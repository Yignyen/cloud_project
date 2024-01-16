const backgroundImages = [
  'image/background_image.jpeg',
  'image/background_image2.jpeg',
  'image/background_image3.jpg'
  // Add more image URLs as needed
];

let currentBackground = 0;

function changeBackground() {
    const backgroundImage = document.getElementById('background-images');
    const nextImage = new Image();
    nextImage.src = backgroundImages[currentBackground];

    nextImage.onload = function () {
        backgroundImage.style.opacity = 0; // Start with opacity set to 0
        backgroundImage.style.backgroundImage = `url(${backgroundImages[currentBackground]})`;
        
        // Trigger reflow to apply the initial opacity
        void backgroundImage.offsetWidth;

        // Set opacity to 1 for the fade-in effect
        backgroundImage.style.opacity = 1;

        currentBackground = (currentBackground + 1) % backgroundImages.length;
        setTimeout(changeBackground, 3000); // Change every 5 seconds
    };
}

document.addEventListener('DOMContentLoaded', function () {
    changeBackground();
});

document.getElementById('register-link').addEventListener('click', function (event) {
    event.preventDefault();
    // Implement registration functionality or redirect to the registration page
});
