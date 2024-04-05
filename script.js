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

    const centerX = (window.innerWidth - windowElement.offsetWidth) / 2;
    const centerY = (window.innerHeight - windowElement.offsetHeight) / 2;
    windowElement.style.left = centerX + 'px';
    windowElement.style.top = centerY + 'px';

    $(windowElement).draggable();
}

function closeApp(appName) {
    const windowElement = document.getElementById(appName + 'App');
    windowElement.classList.remove('active');
    
 
    const iframe = windowElement.querySelector('iframe');
    if (iframe) {
        iframe.parentNode.removeChild(iframe);
    }
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
        // Restore to original size and position
        const centerX = (window.innerWidth - app.offsetWidth) / 2;
        const centerY = (window.innerHeight - app.offsetHeight) / 2;
        app.style.width = "";
        app.style.height = "";
        app.style.top = centerY + 'px';
        app.style.left = centerX + 'px';
    }
}