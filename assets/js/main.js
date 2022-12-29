/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc =>{
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t =>{
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.profile__border`)
sr.reveal(`.profile__name`, {delay: 500})
sr.reveal(`.profile__profession`, {delay: 600})
sr.reveal(`.profile__social`, {delay: 700})
sr.reveal(`.profile__info-group`, {interval: 100, delay: 700})
sr.reveal(`.profile__buttons`, {delay: 800})
sr.reveal(`.filters__content`, {delay: 900})
sr.reveal(`.filters`, {delay: 1000})
document.write('<style type="text/css"> .snow-container { position: fixed; width: 100%; max-width: 100%; z-index: 99999; pointer-events: none; overflow: hidden; top: 0; height: 100%; } .snow { display: block; position: absolute; z-index: 2; top: 0; right: 0; bottom: 0; left: 0; pointer-events: none; -webkit-transform: translate3d(0,-100%,0); transform: translate3d(0,-100%,0); -webkit-animation: snow linear infinite; animation: snow linear infinite; } .snow.foreground { background-image: url("https://itexpress.vn/API/files/img/snow-medium.png"); -webkit-animation-duration: 15s; animation-duration: 10s; } .snow.foreground.layered { -webkit-animation-delay: 7.5s; animation-delay: 7.5s; } .snow.middleground { background-image: url(https://itexpress.vn/API/files/img/snow-medium.png); -webkit-animation-duration: 20s; animation-duration: 15s; } .snow.middleground.layered { -webkit-animation-delay: 10s; animation-delay: 10s; } .snow.background { background-image: url(https://itexpress.vn/API/files/img/snow-medium.png); -webkit-animation-duration: 25s; animation-duration: 20s; } .snow.background.layered { -webkit-animation-delay: 12.5s; animation-delay: 12.5s; } @-webkit-keyframes snow { 0% { -webkit-transform: translate3d(0,-100%,0); transform: translate3d(0,-100%,0); } 100% { -webkit-transform: translate3d(5%,100%,0); transform: translate3d(5%,100%,0); } } @keyframes snow { 0% { -webkit-transform: translate3d(0,-100%,0); transform: translate3d(0,-100%,0); } 100% { -webkit-transform: translate3d(5%,100%,0); transform: translate3d(5%,100%,0); } } </style> <div class="snow-container"> <div class="snow foreground"></div> <div class="snow foreground layered"></div> <div class="snow middleground"></div> <div class="snow middleground layered"></div> <div class="snow background"></div> <div class="snow background layered"></div></div>');
console.log(
    "%c Coder : Nguyễn Hoàng Anh %c",
    'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:24px;color:#00bbee;-webkit-text-fill-color:#00bbee;-webkit-text-stroke: 1px #00bbee;',
    "font-size:12px;color:#999999;"
  );
