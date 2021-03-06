function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data))
}

loadPhotos()

function displayPhotos(photos) {
    // console.log(photos);
    const photoContainer = document.getElementById('photo-container')
    for (const photo of photos) {
        const div = document.createElement('div')

        div.style.textAlign = 'center'
        div.innerHTML = `
        <img class="img" src="${photo.url}">
<h3>${photo.id}</h3>




        `
        photoContainer.appendChild(div)
    }
}