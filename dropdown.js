document.querySelector('.profile-pic').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.profile-dropdown').classList.toggle('show');
});

window.addEventListener('click', function(event) {
    if (!event.target.closest('.profile-dropdown')) {
        document.querySelector('.profile-dropdown').classList.remove('show');
    }
});