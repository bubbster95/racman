// Adds toggles hamburger menu
hamburger = () => {
    let hamburger = document.querySelector('.nav-wrap');
    let topBar = document.getElementById('top');
    let middleBar = document.getElementById('middle');
    let bottomBar = document.getElementById('bottom');

    if (hamburger.className === 'nav-wrap') {
        hamburger.className = 'nav-wrap visible';
        topBar.className+= ' tilt';
        middleBar.className+= ' fade';
        bottomBar.className+= ' untilt';
    } else {
        hamburger.className = 'nav-wrap';
        topBar.classList.remove('tilt');
        middleBar.classList.remove('fade');
        bottomBar.classList.remove('untilt')
    }
}


// Runs when body scrolls, updates menus' state
scrollEvents = () => {
    let aboutHeight = document.getElementById('about').offsetTop - (window.innerHeight * .5);
    let salesHeight = document.getElementById('sales').offsetTop - (window.innerHeight * .5);
    let servicesHeight = document.getElementById('services').offsetTop - (window.innerHeight * .5);
    let contactHeight = document.getElementById('contact').offsetTop - (window.innerHeight * .5);

    let screenHeight = window.scrollY;

    // let homeButton = document.getElementById('home-button');
    let salesButton = document.getElementById('sales-button');
    let servicesButton = document.getElementById('services-button');
    let aboutButton = document.getElementById('about-button');
    let contactButton = document.getElementById('contact-button');

    // homeButton.className = 'nav-button'
    salesButton.className = 'nav-button'
    servicesButton.className = 'nav-button'
    aboutButton.className = 'nav-button'
    contactButton.className = 'nav-button'

    if (screenHeight >= salesHeight && screenHeight < servicesHeight) {
        salesButton.className = 'nav-button active';
    } else if (screenHeight >= servicesHeight && screenHeight < aboutHeight) {
        servicesButton.className = 'nav-button active';
    }else if (screenHeight >= aboutHeight && screenHeight < contactHeight) {
        aboutButton.className = 'nav-button active';
    } else if (screenHeight >= contactHeight) {
        contactButton.className = 'nav-button active';
    } 
    // else {
    //     homeButton.className = 'nav-button active';
    // }
}