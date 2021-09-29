console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', init);

function init() {
    const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
    fetch(imgUrl)
        .then(response => response.json())
        .then(results => addImages(results));

    const breedsUrl = 'https://dog.ceo/api/breeds/list/all';
    fetch(breedsUrl)
        .then(response => response.json())
        .then(results => addBreeds(results));

    document.getElementById('dog-breeds').addEventListener('click', changeFontColor);
    document.getElementById('breed-dropdown').addEventListener('change', filterBreeds);
}

function addImages(data) {
    const container = document.getElementById('dog-image-container')
    data.message.forEach((imgPath) => {
        const newImg = document.createElement('img');
        newImg.src = imgPath;
        newImg.width = 200;
        container.append(newImg);
    });
}

function addBreeds(breeds) {
    const container = document.getElementById('dog-breeds');
    for (let breedKey in breeds.message) {
        const newListItem = document.createElement('li');
        // newListItem.addEventListener('click', changeFontColor);
        newListItem.textContent = breedKey
        container.append(newListItem);
    }
}

function changeFontColor(e) {
    console.log(e.target);
    e.target.style.color = 'red';
}

function filterBreeds(e) {
    const container = document.getElementById('dog-breeds');
    const breeds = Array.from(container.querySelectorAll('li'));
    for (const breed of breeds) {
        if (breed.innerText.charAt(0).toLowerCase() === e.target.value) {
            breed.style.display = 'list-item';
        } else {
            breed.style.display = 'none';
        }
    }
}