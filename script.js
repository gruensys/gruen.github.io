function resizeWallpaper() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    document.body.style.backgroundSize = screenWidth + 'px ' + screenHeight + 'px';
}

window.onload = resizeWallpaper;
window.onresize = resizeWallpaper;

function openApp(appName) {
    const windowElement = document.getElementById(appName + 'App');
    const iframe = windowElement.querySelector('iframe');

    if (!iframe) {
        const newIframe = document.createElement('iframe');
        newIframe.src = getAppURL(appName);
        newIframe.style.width = '100%';
        newIframe.style.height = '100%';
        windowElement.appendChild(newIframe);
    }

    windowElement.classList.add('active');
    centerWindow(windowElement);
    $(windowElement).draggable();
}

function closeApp(appName) {
    const windowElement = document.getElementById(appName + 'App');
    windowElement.classList.remove('active');
}

function minimizeApp(appName) {
    const app = document.getElementById(appName + 'App');
    app.classList.add('minimized');
}

function maximizeApp(appName) {
    const app = document.getElementById(appName + 'App');
    app.classList.toggle('maximized');
    if (app.classList.contains('maximized')) {
        app.style.width = "100%";
        app.style.height = "100%";
        app.style.top = "0";
        app.style.left = "0";
    } else {
        centerWindow(app);
    }
}

function getAppURL(appName) {
}

function centerWindow(windowElement) {
    const centerX = (window.innerWidth - windowElement.offsetWidth) / 2;
    const centerY = (window.innerHeight - windowElement.offsetHeight) / 2;
    windowElement.style.left = centerX + 'px';
    windowElement.style.top = centerY + 'px';
}