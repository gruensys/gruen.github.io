<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Window Manager</title>
    <style>
        /* Add your CSS styles here */
        .window {
            position: absolute;
            border: 1px solid #000;
            background-color: #fff;
            padding: 10px;
            z-index: 100;
        }

        .active {
            z-index: 101;
        }

        .maximized {
            position: fixed;
        }

        .close-button {
            position: absolute;
            top: 5px;
            right: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>

<div id="calculatorApp" class="window">
    <span class="close-button" onclick="closeApp('calculator')">Close</span>
    <!-- Embed your calculator app here -->
    <iframe src="calculator.html" width="300" height="300"></iframe>
</div>

<div id="weatherApp" class="window">
    <span class="close-button" onclick="closeApp('weather')">Close</span>
    <!-- Embed your weather app here -->
    <iframe src="weather.html" width="300" height="300"></iframe>
</div>

<!-- Include jQuery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<script>
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

        // Calculate center position
        const centerX = (window.innerWidth - windowElement.offsetWidth) / 2;
        const centerY = (window.innerHeight - windowElement.offsetHeight) / 2;
        windowElement.style.left = centerX + 'px';
        windowElement.style.top = centerY + 'px';

        $(windowElement).draggable();
    }

    function closeApp(appName) {
        const windowElement = document.getElementById(appName + 'App');
        windowElement.classList.remove('active');
        
        // Remove iframe and other contents
        const iframe = windowElement.querySelector('iframe');
        if (iframe) {
            iframe.parentNode.removeChild(iframe);
        }
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
</script>

</body>
</html>