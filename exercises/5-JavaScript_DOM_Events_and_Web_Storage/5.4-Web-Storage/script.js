//prettier-ignore
let bgColors = ['#f5deb3', '#bdd5ea', '#fdc5f5', '#d9dbbc', '#b5ffe9', '#fafffd'];
let textColors = ['#212529', '#495057', '#847577', '#343a40'];
let body = document.querySelector('body');
let header = document.querySelector('header');
let main = document.querySelector('main');

window.onload = function () {
  // Adding Background colors to the palette:
  let bgPalette = document.querySelector('.bg-color-palette');

  for (let color = 0; color < bgColors.length; color += 1) {
    let colorBtn = document.createElement('button');
    colorBtn.type = 'button';
    colorBtn.className = 'btn-bg-color';
    colorBtn.style.backgroundColor = bgColors[color];
    bgPalette.appendChild(colorBtn);
  }

  // Switching Background color according to the clicks in the palette
  let allBgButtons = document.querySelectorAll('.btn-bg-color');
  for (let btn = 0; btn < allBgButtons.length; btn += 1) {
    allBgButtons[btn].addEventListener('click', function (event) {
      localStorage.bgColor = event.target.style.backgroundColor;
      main.style.backgroundColor = event.target.style.backgroundColor;
    });
  }

  // Adding text color buttons
  let textColorPalette = document.querySelector('.text-color-palette');

  for (let color = 0; color < textColors.length; color += 1) {
    const colorTxtBtn = document.createElement('button');
    colorTxtBtn.type = 'button';
    colorTxtBtn.className = 'btn-text-color';
    colorTxtBtn.style.backgroundColor = textColors[color];
    textColorPalette.appendChild(colorTxtBtn);
  }

  // Switching text color according to the clicks in the palette
  let allTextButtons = document.querySelectorAll('.btn-text-color');
  for (let btn = 0; btn < allTextButtons.length; btn += 1) {
    allTextButtons[btn].addEventListener('click', function (event) {
      localStorage.textColor = event.target.style.backgroundColor;
      main.style.color = event.target.style.backgroundColor;
    });
  }
};

// Recovering Local Storage
function recoverLocalStorage() {
  // If it is empty
  if (localStorage.length === 0) {
    // Set default background color
    localStorage.setItem('bgColor', '#f5deb3');
    localStorage.setItem('textColor', '#212529');
  }
  // Formatting the page according to the Local Storage values
  main.style.backgroundColor = localStorage.getItem('bgColor');
  main.style.color = localStorage.getItem('textColor');
}
recoverLocalStorage();
