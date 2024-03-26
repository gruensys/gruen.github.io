function startDragging(e, id) {
    let offsetX = e.clientX,
        offsetY = e.clientY,
        initialX = document.getElementById(id).offsetLeft,
        initialY = document.getElementById(id).offsetTop;

    function moveWindow(e) {
        let newX = initialX + e.clientX - offsetX,
            newY = initialY + e.clientY - offsetY;

        document.getElementById(id).style.left = newX + 'px';
        document.getElementById(id).style.top = newY + 'px';
    }

    function stopDragging() {
        document.removeEventListener('mousemove', moveWindow);
        document.removeEventListener('mouseup', stopDragging);
    }

    document.addEventListener('mousemove', moveWindow);
    document.addEventListener('mouseup', stopDragging);
}

function minimizeWindow(id) {
    let window = document.getElementById(id);
    window.classList.toggle('minimized');
}

function toggleMenu(id) {
    let window = document.getElementById(id);
    window.classList.toggle('menu-open');
}

function closeWindow(id) {
    let window = document.getElementById(id);
    window.style.display = "none";
}

function openWindow(id) {
    let window = document.getElementById(id);
    window.style.display = "block";
}
