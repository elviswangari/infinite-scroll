const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
const ACCESS_KEY = 'T8viIZycS2rrIeWBNAzvBxz4jwmitWldBGq_buV_X8Q';
const count = 10;
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&count=${count}`;

let photosArray = [];

//display elements to the dom
function displayPhotos () {
    photosArray.forEach((photo) => {
        // creating <a>
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');

        // creating an image
        const image = document.createElement('img');
        image.setAttribute('src', photo.urls.regular);
        image.setAttribute('alt', photo.alt_description);
        image.setAttribute('alt', photo.alt_description);

        // put img inside the a in the conatiner 
        item.appendChild(image);
        imageContainer.appendChild(item);
    });
}

async function getPhotos() {
    try {
        const responce = await fetch(apiUrl);
        photosArray = await responce.json();
        //console.log(photosArray)
        displayPhotos();

    } catch (error) {
        console.error(`Error ${error.message}`);
    }
}

//onload
getPhotos();