function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercise-1
// --------------------------------------------------------------------------------------------------------
// prettier-ignore
// Month days
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
// Holidays
let dezHolidays = [24, 25, 31];
// Fridays
const dezFridays = [4, 11, 18, 25];

function createAllDays() {
  //Taking the days list
  const ulDays = document.getElementById('days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let liDay = document.createElement('li');
    let currentDay = dezDaysList[index];
    liDay.className = 'day';
    liDay.innerHTML = currentDay;

    if (dezHolidays.indexOf(currentDay) !== -1) {
      liDay.className += ' holiday';
    }

    if (dezFridays.indexOf(currentDay) !== -1) {
      liDay.className += ' friday';
    }

    ulDays.appendChild(liDay);
  }
}

createAllDays();

// Exercise-2
// --------------------------------------------------------------------------------------------------------
const btnsContainer = document.querySelector('.buttons-container');

function holidaysBtn(btnString) {
  const btnHolidays = document.createElement('button');
  btnHolidays.innerHTML = btnString;
  btnHolidays.id = 'btn-holiday';
  btnsContainer.appendChild(btnHolidays);
}

holidaysBtn('Feriados');

// Exercise-3
// --------------------------------------------------------------------------------------------------------
let holidaysHighlight = false;
function holidaysChanger() {
  // Picking all holidays
  const allHolidays = document.querySelectorAll('.holiday');

  for (let index = 0; index < allHolidays.length; index += 1) {
    // If holidays are not highlighted, highlight it
    if (holidaysHighlight === false) {
      allHolidays[index].style.backgroundColor = 'green';
      allHolidays[index].style.color = 'white';
    }
    // If holidays are already highlighted, switch their colors back to normal
    else {
      allHolidays[index].style.backgroundColor = 'rgb(238,238,238)';
      allHolidays[index].style.color = '#777';
    }
  }
  holidaysHighlight = !holidaysHighlight;
}

let btnHolidays = document.getElementById('btn-holiday');
btnHolidays.addEventListener('click', holidaysChanger);

// Exercise-4
// --------------------------------------------------------------------------------------------------------
function fridaysBtn(btnString) {
  const btnFridays = document.createElement('button');
  btnFridays.innerHTML = btnString;
  btnFridays.id = 'btn-friday';
  btnsContainer.appendChild(btnFridays);
}

fridaysBtn('Sexta-feira');

// Exercise-5
// --------------------------------------------------------------------------------------------------------

let fridaysChanged = false;

function fridaysChanger() {
  // Picking all fridays
  const allFridays = document.querySelectorAll('.friday');

  for (let index = 0; index < allFridays.length; index += 1) {
    // If fridays are not changed yet, change them
    if (fridaysChanged === false) {
      allFridays[index].innerHTML = 'SEXTOU!!';
    }
    // If fridays are already changed, switch them back to normal
    else {
			let thisFriday = allFridays[index];
			let previousDay = parseInt(thisFriday.previousSibling.innerHTML);
			thisFriday.innerHTML = previousDay + 1;
    }
  }
  fridaysChanged = !fridaysChanged;
}

let btnFridays = document.getElementById('btn-friday');
btnFridays.addEventListener('click', fridaysChanger);
