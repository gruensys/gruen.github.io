function openApp(appName) {
    const windowElement = document.getElementById(appName + 'App');
    windowElement.classList.add('active');
    if (!windowElement.classList.contains('maximized')) {
        if (appName === 'game') {
            const iframe = windowElement.querySelector('iframe');
            iframe.src += '&autoplay=1'; // Autoplay YouTube video
        } else {
            switch (appName) {
                case 'drawing':
                    windowElement.style.top = '20px';
                    windowElement.style.left = '20px';
                    break;
                case 'calculator':
                    windowElement.style.top = '20px';
                    windowElement.style.right = '20px';
                    break;
                case 'terminal':
                    windowElement.style.bottom = '20px';
                    windowElement.style.left = '20px';
                    break;
                default: // 'game'
                    windowElement.style.bottom = '20px';
                    windowElement.style.right = '20px';
            }
        }
        centerWindow(windowElement);
    }
    $(windowElement).draggable();
}

function closeApp(appName) {
    const windowElement = document.getElementById(appName + 'App');
    windowElement.classList.remove('active');
    const iframe = windowElement.querySelector('iframe');
    iframe.src = iframe.src; // Resetting iframe src to fix reloading issue
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
        windowElement.style.bottom = "0";
        windowElement.style.right = "0";
        windowElement.style.zIndex = "2"; // Ensure it's above other apps
        windowElement.classList.add('maximized');
    } else {
        windowElement.style.width = "";
        windowElement.style.height = "";
        windowElement.style.top = "";
        windowElement.style.left = "";
        windowElement.style.bottom = "";
        windowElement.style.right = "";
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