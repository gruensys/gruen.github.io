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
    var app = document.getElementById(appName + 'App');
    if (!app.classList.contains('maximized')) {
        app.style.width = "100%";
        app.style.height = "100%";
        app.style.top = "0";
        app.style.left = "0";
        app.classList.add('maximized');
    } else {
        app.style.width = "";
        app.style.height = "";
        app.style.top = "";
        app.style.left = "";
        app.classList.remove('maximized');
    }
}
