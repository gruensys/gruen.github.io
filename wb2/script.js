function centerWindow(windowElement) {
    const centerX = (window.innerWidth - windowElement.offsetWidth) / 2;
    const centerY = (window.innerHeight - windowElement.offsetHeight) / 2;
    windowElement.style.left = Math.max(centerX, 0) + 'px';
    windowElement.style.top = Math.max(centerY, 0) + 'px';
}

window.addEventListener('resize', function () {
    const activeWindows = document.querySelectorAll('.window.active');
    activeWindows.forEach(function (windowElement) {
        centerWindow(windowElement);
    });
});

function openApp(appName) {
    const windowElement = document.getElementById(appName + 'App');
    windowElement.classList.add('active');
    if (!windowElement.classList.contains('maximized')) {
        centerWindow(windowElement);
    }
}

function closeApp(appName) {
    const windowElement = document.getElementById(appName + 'App');
    windowElement.classList.remove('active');
}

document.querySelectorAll('.icon').forEach(function (icon) {
    icon.addEventListener('click', function () {
        const appName = this.dataset.appName;
        openApp(appName);
    });
});

function toggleSize(appName) {
    const windowElement = document.getElementById(appName + 'App');
    if (!document.fullscreenElement) {
        windowElement.classList.add('maximized');
        windowElement.style.left = '40px';
        windowElement.style.top = '40px';
    } else {
        windowElement.classList.remove('maximized');
        centerWindow(windowElement);
    }
}