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
    if (!windowElement.classList.contains('maximized')) {
        const centerX = (window.innerWidth - windowElement.offsetWidth) / 2;
        const centerY = (window.innerHeight - windowElement.offsetHeight) / 2;
        windowElement.style.left = centerX + 'px';
        windowElement.style.top = centerY + 'px';
    }
    $(windowElement).draggable();
}

function closeApp(appName) {
    const windowElement = document.getElementById(appName + 'App');
    windowElement.classList.remove('active');
    const iframe = windowElement.querySelector('iframe');
    iframe.src = iframe.src;
}

function minimizeApp(appName) {
    var app = document.getElementById(appName + 'App');
    app.classList.add('minimized');
}

function maximizeApp(appName) {
    const app = document.getElementById(appName + 'App');
    if (!app.classList.contains('maximized')) {
        app.style.width = "100vw";
        app.style.height = "100vh";
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