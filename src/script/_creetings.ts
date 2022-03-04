const blockCreetings = document.querySelector('.date-creetings');

export const innerCreetings = () => {
  const date: Date = new Date();
  let partOfDay;
  if (date.getHours() < 6) {
    partOfDay = 'Night';
  } else if (date.getHours() < 12) {
    partOfDay = 'Morning';
  } else if (date.getHours() < 18) {
    partOfDay = 'Day';
  } else if (date.getHours() < 24) {
    partOfDay = 'Evening';
  }
  blockCreetings!.innerHTML = `
        <span>Good ${partOfDay}</span> <input class = "text-field-input" id = "input-id" type ="text" placeholder="[Enter name]">
        `;
};

export const saveName = () => {
  const input: any = document.getElementById('input-id');
  localStorage.setItem('name', input!.value);
};

export const showName = () => {
  const input: any = document.getElementById('input-id');
  if (localStorage.getItem('name')) {
    input!.value = localStorage.getItem('name');
  }
};
