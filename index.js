console.log('Happy developing ✨')

const navbar = document.getElementById('navbar');
let isOpen = false;

function toggleMenu() {
    if (isOpen) {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'flex';
    }
    isOpen = !isOpen;
}

