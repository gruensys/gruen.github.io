function openApp(appName) {
    const windowElement = document.getElementById(appName + 'App');
    windowElement.classList.add('active');
    if (!windowElement.classList.contains('maximized')) {
        centerWindow(windowElement);
    }
    if (appName === 'game') {
        const iframe = windowElement.querySelector('iframe');
        iframe.src += '&autoplay=1'; // discord fucked up here
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
    const windowElement = document.getElementById(appName + 'App');
    if (windowElement.classList.contains('maximized')) {
        windowElement.classList.add('minimized');
    }
}

function maximizeApp(appName) {
    const windowElement = document.getElementById(appName + 'App');
    if (!windowElement.classList.contains('maximized')) {
        windowElement.style.width = "100vw";
        windowElement.style.height = "100vh";
        windowElement.style.top = "0";
        windowElement.style.left = "0";
        windowElement.classList.add('maximized');
    } else {
        windowElement.style.width = "";
        windowElement.style.height = "";
        windowElement.style.top = "";
        windowElement.style.left = "";
        windowElement.classList.remove('maximized');
        if (!windowElement.classList.contains('minimized')) {
            centerWindow(windowElement);
        }
    }
}

function centerWindow(windowElement) {
    const centerX = (window.innerWidth - windowElement.offsetWidth) / 2;
    const centerY = (window.innerHeight - windowElement.offsetHeight) / 2;
    windowElement.style.left = centerX + 'px';
    windowElement.style.top = centerY + 'px';
}