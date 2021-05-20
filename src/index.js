document.addEventListener('DOMContentLoaded', imageFetch)  

function imageFetch() { 
    fetch("https://dog.ceo/api/breeds/image/random/4") 
    .then(function(resp){ 
      
       return resp.json() 
    }) 
    .then(function(json){ 
        renderPictures(json.message) 
    })
}

function renderPictures(array) { 
    array.forEach(renderPicture)
} 

function renderPicture(pictureUrl) {  
    const image = document.createElement('img') 
    image.src = pictureUrl 
    document.querySelector("#dog-image-container").appendChild(image)

}