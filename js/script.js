// Open the overlay menu when clicking on the menu icon
document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('overlay-menu').classList.add('active');
    document.getElementById('menu-icon').style.display = 'none'; // Hide hamburger icon
});

// Close the overlay menu when clicking on the close button
document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('overlay-menu').classList.remove('active');
    document.getElementById('menu-icon').style.display = 'block'; // Show hamburger icon
});
