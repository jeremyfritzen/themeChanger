const bodyEl = document.querySelector('body')
const boutonThemeEl = document.querySelector('#mode')
const boutonTexte = document.queryCommandIndeterm('span')


function modeSombre() {
    bodyEl.classList.add('dark')
    boutonTexte.textContent = 'Thème clair'
    localStorage.setItem('theme', 'sombre')
}

// Activation du thème au chargement de la page 
if (localStorage.getItem('theme')) {
    // console.log('il existe un localStorage theme')
    if (localStorage.getItem('theme') === 'sombre') {
        console.log('Mode sombre activé')
        modeSombre()
    }
} else {
    console.log('PAS DE LOCALSTORAGE THEME')
}

// Changement de thème par le biais du bouton
boutonThemeEl.addEventListener('click', () => {
    console.log('Le bouton a été cliqué !')
    if (bodyEl.className === 'dark') {
        console.log('Activation du thème clair')
        // bodyEl.removeAttribute('class')
        bodyEl.classList.remove('dark')
        boutonTexte.textContent = 'Thème sombre'
        localStorage.setItem('theme', 'clair')
    } else {
        modeSombre()
    }
})