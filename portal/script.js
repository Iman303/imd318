// Assuming the username is stored in a variable, for example, after login
var username = "John Doe"; // Replace this with actual login logic

document.getElementById("username").textContent = "Hi, " + username;

const audio = document.getElementById('background-music');

        // Function to play the audio
        function playMusic() {
            audio.play();
        }

        // Function to stop the audio
        function stopMusic() {
            audio.pause();
            audio.currentTime = 0;  // Reset to the start of the audio
        }

        // Function to increase the volume
        function increaseVolume() {
            if (audio.volume < 1) {
                audio.volume += 0.1; // Increase volume by 10%
            }
        }

        // Function to decrease the volume
        function decreaseVolume() {
            if (audio.volume > 0) {
                audio.volume -= 0.1; // Decrease volume by 10%
            }
        }