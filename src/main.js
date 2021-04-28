const theme = localStorage.getItem('data-theme') || 'light';

const selectedButton = (color) => {
  const selectedOption = document.querySelector(`option[name="theme"][value="${color}Theme"]`);
  const checkedInput = document.querySelector(`input[name="theme"][value="${color}Theme"]`);

  checkedInput.checked = true;
  selectedOption.selected = true;
};

const changeTheme = (color) => {
  document.documentElement.setAttribute('data-theme', color);
  localStorage.setItem('data-theme', color);
  selectedButton(color);
};

const updateColor = (changeEvent) => {
  const colorOfTheme = changeEvent.target.value;

  switch (colorOfTheme) {
    case 'lightTheme':
      changeTheme('light');
      break;

    case 'darkTheme':
      changeTheme('dark');
      break;

    case 'grayTheme':
      changeTheme('gray');
      break;

    default:
      break;
  }
};

const selectElement = document.querySelector('.select');
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
