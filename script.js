function resizeWallpaper() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    document.body.style.backgroundSize = screenWidth + 'px ' + screenHeight + 'px';
}

window.onload = resizeWallpaper;
window.onresize = resizeWallpaper;

function openApp(appName) {
    const windowElement = document.getElementById(appName + 'App');
    windowElement.classList.add('active');

    const randomX = Math.floor(Math.random() * (window.innerWidth - windowElement.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - windowElement.offsetHeight));
    windowElement.style.left = randomX + 'px';
    windowElement.style.top = randomY + 'px';

    $(windowElement).draggable();
}

function closeApp(appName) {
    document.getElementById(appName + 'App').classList.remove('active');
}

function minimizeApp(appName) {
    var app = document.getElementById(appName + 'App');
    app.style.display = "none";
}

function maximizeApp(appName) {
    const app = document.getElementById(appName + 'App');
    if (!app.classList.contains('maximized')) {
        app.style.width = "100vw"; // Set width to full viewport width
        app.style.height = "100vh"; // Set height to full viewport height
        app.style.top = "0"; // Align to top
        app.style.left = "0"; // Align to left
        app.classList.add('maximized');
    } else {
        app.style.width = ""; // Reset width
        app.style.height = ""; // Reset height
        app.style.top = ""; // Reset top position
        app.style.left = ""; // Reset left position
        app.classList.remove('maximized');
    }
}

