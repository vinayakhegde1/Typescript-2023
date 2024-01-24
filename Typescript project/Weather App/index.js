var container = document.querySelector('.container');
var search = document.querySelector('.search-box button');
var weatherBox = document.querySelector('.weather-box');
var weatherDetails = document.querySelector('.weather-details');
var error404 = document.querySelector('.not-found');
if (search && container && weatherBox && weatherDetails && error404) {
    search.addEventListener('click', function () {
        var APIKey = 'c98dcd4ebafc8e87cee71bf69b3a557f';
        var cityInput = document.querySelector('.search-box input');
        if (!cityInput || cityInput.value === '') {
            return;
        }
        var city = cityInput.value;
        fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=").concat(APIKey))
            .then(function (response) { return response.json(); })
            .then(function (json) {
            if (json.cod === '404') {
                if (container)
                    container.style.height = '400px';
                if (weatherBox)
                    weatherBox.classList.remove('active');
                if (weatherDetails)
                    weatherDetails.classList.remove('active');
                if (error404)
                    error404.classList.add('active');
                return;
            }
            if (container)
                container.style.height = '555px';
            if (weatherBox)
                weatherBox.classList.add('active');
            if (weatherDetails)
                weatherDetails.classList.add('active');
            if (error404)
                error404.classList.remove('active');
            var image = document.querySelector('.weather-box img');
            var temperature = document.querySelector('.weather-box .temperature');
            var description = document.querySelector('.weather-box .description');
            var humidity = document.querySelector('.weather-details .humidity span');
            var wind = document.querySelector('.weather-details .wind span');
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
            if (temperature)
                temperature.innerHTML = "".concat(parseInt(json.main.temp), "<span>\u00B0C</span>");
            if (description)
                description.innerHTML = "".concat(json.weather[0].description);
            if (humidity)
                humidity.innerHTML = "".concat(json.main.humidity, "%");
            if (wind)
                wind.innerHTML = "".concat(parseInt(json.wind.speed), "Km/h");
        });
    });
}
