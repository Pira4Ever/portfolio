const toggleTheme = document.getElementById('toggleTheme');
const rootElement = document.documentElement;

function changeTheme() {
  const currentTheme = rootElement.getAttribute('data-theme');

  currentTheme === 'dark'
    ? rootElement.setAttribute('data-theme', 'light')
    : rootElement.setAttribute('data-theme', 'dark');

  toggleTheme.classList.toggle('bi-sun');
  toggleTheme.classList.toggle('bi-moon-stars');
}

toggleTheme.addEventListener('click', changeTheme);
