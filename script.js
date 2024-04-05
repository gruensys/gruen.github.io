function centerWindow(windowElement) {
    const centerX = (window.innerWidth - windowElement.offsetWidth) / 2;
    const centerY = (window.innerHeight - windowElement.offsetHeight) / 2;
    windowElement.style.left = Math.max(centerX, 0) + 'px';
    windowElement.style.top = Math.max(centerY, 0) + 'px';
}

window.addEventListener('resize', function() {
    const activeWindows = document.querySelectorAll('.window.active');
    activeWindows.forEach(function(windowElement) {
        centerWindow(windowElement);
    });
});

function openApp(appName) {
    const windowElement = document.getElementById(appName + 'App');
    windowElement.classList.add('active');
    if (!windowElement.classList.contains('maximized')) {
        centerWindow(windowElement);
    }
    if (appName === 'game') {
        const iframe = windowElement.querySelector('iframe');
        iframe.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'; 
    }
    $(windowElement).draggable();
    $(windowElement).fadeIn();
}

function closeApp(appName) {
    const windowElement = document.getElementById(appName + 'App');
    windowElement.classList.remove('active');
    const iframe = windowElement.querySelector('iframe');
    if (appName === 'game') {
        iframe.src = ''; // Reset iframe source to stop video
    } else {
        iframe.src = iframe.src; // Resetting iframe src to fix reloading issue
    }
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
        windowElement.style.zIndex = "2";
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