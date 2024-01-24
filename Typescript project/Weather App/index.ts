const container: HTMLElement | null = document.querySelector('.container');
const search: HTMLElement | null = document.querySelector('.search-box button');
const weatherBox: HTMLElement | null = document.querySelector('.weather-box');
const weatherDetails: HTMLElement | null = document.querySelector('.weather-details');
const error404: HTMLElement | null = document.querySelector('.not-found');

if (search && container && weatherBox && weatherDetails && error404) {
    search.addEventListener('click', () => {
        const APIKey: string = 'c98dcd4ebafc8e87cee71bf69b3a557f';
        const cityInput: HTMLInputElement | null = document.querySelector('.search-box input');
        
        if (!cityInput || cityInput.value === '') {
            return;
        }

        const city: string = cityInput.value;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`)
            .then(response => response.json())
            .then((json: any) => {
                if (json.cod === '404') {
                    if (container) container.style.height = '400px';
                    if (weatherBox) weatherBox.classList.remove('active');
                    if (weatherDetails) weatherDetails.classList.remove('active');
                    if (error404) error404.classList.add('active');
                    return;
                }

                if (container) container.style.height = '555px';
                if (weatherBox) weatherBox.classList.add('active');
                if (weatherDetails) weatherDetails.classList.add('active');
                if (error404) error404.classList.remove('active');

                const image: HTMLImageElement | null = document.querySelector('.weather-box img');
                const temperature: HTMLElement | null = document.querySelector('.weather-box .temperature');
                const description: HTMLElement | null = document.querySelector('.weather-box .description');
                const humidity: HTMLElement | null = document.querySelector('.weather-details .humidity span');
                const wind: HTMLElement | null = document.querySelector('.weather-details .wind span');

                if (image) {
                    switch (json.weather[0].main) {
                        case 'Clear':
                            image.src = './images/clear.png';
                            break;
                        case 'Rain':
                            image.src = './images/rain.png';
                            break;
                        case 'Snow':
                            image.src = './images/snow.png';
                            break;
                        case 'Clouds':
                            image.src = './images/cloud.png';
                            break;
                        case 'Mist':
                            image.src = './images/mist.png';
                            break;
                        default:
                            image.src = './images/cloud.png';
                    }
                }

                if (temperature) temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
                if (description) description.innerHTML = `${json.weather[0].description}`;
                if (humidity) humidity.innerHTML = `${json.main.humidity}%`;
                if (wind) wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
            });
    });
}
