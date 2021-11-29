const images =["01.jpg", "02.jpg", "03.jpg", "05.jpg" ]

const choseImage = images[Math.floor(Math.random() * images.length)];

const bgimages = document.createElement("img");

bgimages.src = `img/${choseImage}`;

document.body.appendChild(bgimages);