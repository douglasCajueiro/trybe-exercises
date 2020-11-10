window.onload = function () {
  //prettier-ignore
  let bgColors = ['#f5deb3', '#bdd5ea', '#fdc5f5', '#d9dbbc', '#b5ffe9', '#f5deb3'];
  let body = document.querySelector('body');
  let header = document.querySelector('header');
  let main = document.querySelector('main');

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
      //localStorage.bgColor = event.target.style.backgroundColor;
      main.style.backgroundColor = event.target.style.backgroundColor;
    });
	}
	
};