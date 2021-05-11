const theme = localStorage.getItem('data-theme') || 'light';

const wasSelectedButton = (color) => {
  const selectedOption = document.querySelector(`option[name="theme"][value="${color}-theme"]`);
  const checkedInput = document.querySelector(`input[name="theme"][value="${color}-theme"]`);

  checkedInput.checked = true;
  selectedOption.selected = true;
};

const changeTheme = (color) => {
  document.documentElement.setAttribute('data-theme', color);
  localStorage.setItem('data-theme', color);
  wasSelectedButton(color);
};

const updateColor = (changeEvent) => {
  const colorOfTheme = changeEvent.target.value;

  switch (colorOfTheme) {
    case 'light-theme':
      changeTheme('light');
      break;

    case 'dark-theme':
      changeTheme('dark');
      break;

    case 'gray-theme':
      changeTheme('gray');
      break;

    default:
      break;
  }
};

const selectElement = document.querySelector('.form__select');
const inputElements = document.querySelectorAll('input[name="theme"]');
const buttonsElement = document.querySelectorAll('.form__button');

selectElement.addEventListener('change', updateColor);
inputElements.forEach((element) => {
  element.addEventListener('change', updateColor);
});
buttonsElement.forEach((element) => {
  element.addEventListener('click', updateColor);
});

changeTheme(theme);
