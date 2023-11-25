const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declare an array of image filenames */
const imageFiles = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Loop through images */
imageFiles.forEach((filename) => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/' + filename);
  newImage.setAttribute('alt', 'Image ' + filename);
  thumbBar.appendChild(newImage);

  /* Adding click event listener to each thumbnail image */
  newImage.addEventListener('click', function() {
    displayedImage.setAttribute('src', 'images/' + filename);
    displayedImage.setAttribute('alt', 'Image ' + filename);
  });
});

/* Writing a handler for the darken/lighten button */
btn.addEventListener('click', function() {
    const btnClass = btn.getAttribute('class');
  
    if (btnClass === 'dark') {
      btn.setAttribute('class', 'light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class', 'dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });
  

// The code is ready to push to origin