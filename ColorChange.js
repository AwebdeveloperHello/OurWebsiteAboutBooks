
// Change backgound color button.

const button = document.getElementById('ChangeBack');
const body = document.getElementById('BackGroundMain');  
const storedColor = localStorage.getItem('backgroundColor');

    
if (storedColor) {
    body.style.backgroundColor = storedColor;
}

button.addEventListener('click', () => {
    const currentColor = body.style.backgroundColor;
    const newColor = currentColor === 'white' ? 'rgb(48, 48, 48)' : 'white';

    body.style.backgroundColor = newColor;
    localStorage.setItem('backgroundColor', newColor); // Save the new color
});


// Pause audio files

const audioElements = document.querySelectorAll('audio');

audioElements.forEach(audio => {
  audio.addEventListener('play', () => {
    audioElements.forEach(otherAudio => {
      if (otherAudio !== audio) {
        otherAudio.pause();
      }
    });
  });
});


