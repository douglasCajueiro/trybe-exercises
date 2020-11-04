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
