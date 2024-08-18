// Global variables to control the movement interval and the image
let moveInterval;
const memeImage = document.getElementById('memeImage');
const backgroundSound = document.getElementById('backgroundSound');

// Function to start moving the image
function startMoving() {
    // Disable the Start button and enable the Stop button
    document.getElementById('startButton').disabled = true;
    document.getElementById('stopButton').disabled = false;

    // Start the interval to move the image
    moveInterval = setInterval(moveImage, 500);

    // Play background sound
    backgroundSound.play();
}

// Function to stop moving the image
function stopMoving() {
    // Disable the Stop button and enable the Start button
    document.getElementById('stopButton').disabled = true;
    document.getElementById('startButton').disabled = false;

    // Clear the interval to stop the image from moving
    clearInterval(moveInterval);

    // Pause background sound
    backgroundSound.pause();
}

// Function to randomly move the image within the bounds of the screen
function moveImage() {
    // Get random x and y positions within the viewport
    const x = Math.random() * (window.innerWidth - memeImage.width);
    const y = Math.random() * (window.innerHeight - memeImage.height);

    // Set the image's new position
    memeImage.style.transform = `translate(${x}px, ${y}px)`;
}

// Attach event listeners to the buttons
document.getElementById('startButton').onclick = startMoving;
document.getElementById('stopButton').onclick = stopMoving;
