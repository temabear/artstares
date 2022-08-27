const toggleThemeBtn = document.getElementById('toggle-theme-btn')
const toggleThemeImage = document.getElementById('toggle-theme-image')
const logo = document.getElementsByClassName('logo');

if (localStorage.getItem('theme') === 'dark') {
    document.body.className = "dark";
    toggleThemeImage.src = 'img/sun.png'
    for (let i = 0; i < logo.length; i++) {
        logo[i].style.fill = '#118DA8'
    }
}

toggleThemeBtn.addEventListener('click', () => {
    if (document.body.classList.contains('dark')) {
        document.body.className = "light";
        toggleThemeImage.src = 'img/moon.png';
        localStorage.setItem('theme', 'light');
        for (let i = 0; i < logo.length; i++) {
            logo[i].style.fill = '#A90098'
        }
    } else {
        document.body.className = "dark";
        toggleThemeImage.src = 'img/sun.png';
        localStorage.setItem('theme', 'dark')
        for (let i = 0; i < logo.length; i++) {
            logo[i].style.fill = '#118DA8'
        }
    }
})
