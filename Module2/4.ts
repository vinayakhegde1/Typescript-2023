
// Create indexable types 

//  you can use interface that describe Array types that you can idex into 

// Indexable types have an index signature that describes the type you can 
// use to index into the object, along with the corresponding return types when indexing

interface InceCreamArray{
    [index: number]: string;
}

let myIceCream: InceCreamArray;
myIceCream = ['chocolate', 'butterscotch', 'strawberry'];
let myStr: string = myIceCream[2];
console.log(myStr);


// Now Let's Describe a Javascript API using an interface 

const fetchURL = 'https://jsonplaceholder.typicode.com/posts'

// It's a interface describing the shape of our json data

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function fetchPost(url: string){
    let response = await fetch(url);
    let body = await response.json();
    return body as Post[];
}

async function showPost() {
   let posts = await fetchPost(fetchURL);
   //Display the contents of the first item in the response
   let post = posts[1];
   console.log('Post #' + post.id);
       // If the userId is 1, then display a note that it's an administrator
    console.log('Author: ' + (post.userId === 2 ? "Administrator" : post.userId.toString()))
    console.log('Title: ' + post.title)
    console.log('Body: ' + post.body)
}

showPost();