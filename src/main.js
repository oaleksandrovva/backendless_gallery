const theme = localStorage.getItem('data-theme');
const form = document.querySelector('.form');
const changeTheme = (color) => {
  document.documentElement.setAttribute('data-theme', color);
  localStorage.setItem('data-theme', color);
};

changeTheme(theme);

form.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  const selectedColor = clickEvent.target.value;
  const selectedClassName = clickEvent.target.className;
  const selectedInputId = clickEvent.target.htmlFor;
  const selectInput = clickEvent.target.closest('.form__radio');
  const selectedInput = document.getElementById(selectedInputId);

  if (selectInput && selectedInputId) {
    selectedInput.checked = true;
  }

  switch (selectedColor || selectedClassName) {
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
});
