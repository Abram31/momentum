const blockTime: Element | null = document.querySelector('.date-time');
const blockDayDate: Element | null = document.querySelector('.date-day-date');

export const innerDate = () => {
  const date: Date = new Date();
  blockTime!.innerHTML = `
            <span>${date.toLocaleTimeString('en-GB')}</span>
             `;
};

export const innerMonthDay = () => {
  const date: Date = new Date();
  let month;
  let day;
  switch (date.getMonth()) {
    case 0: month = 'January';
      break;
    case 1: month = 'February';
      break;
    case 2: month = 'March';
      break;
    case 3: month = 'April';
      break;
    case 4: month = 'May';
      break;
    case 5: month = 'June';
      break;
    case 6: month = 'July';
      break;
    case 7: month = 'August';
      break;
    case 8: month = 'September';
      break;
    case 9: month = 'October';
      break;
    case 10: month = 'November';
      break;
    case 11: month = 'December';
      break;
    default: month = '';
  }
  switch (date.getDay()) {
    case 0: day = 'Sunday';
      break;
    case 1: day = 'Monday';
      break;
    case 2: day = 'Tuesday';
      break;
    case 3: day = 'Wednesday';
      break;
    case 4: day = 'Thrusday';
      break;
    case 5: day = 'Friday';
      break;
    case 6: day = 'Saturday';
      break;
    default: day = '';
  }
  blockDayDate!.innerHTML = `
            <span>${day}, ${month}, ${date.getDate()}</span>
            `;
};

export const innerDay = () => {
  const date: unknown = new Date();
};
