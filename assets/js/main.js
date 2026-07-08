document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const menu = document.getElementById("menu");

    setTimeout(() => body.classList.remove('is-preload'), 100);

    if (menu) {
        const closeBtn = document.createElement("a");
        closeBtn.className = "close";
        closeBtn.href = "#menu";
        closeBtn.textContent = "Close";
        menu.appendChild(closeBtn);
    }

    document.addEventListener("click", function(event) {
        const menuToggle = event.target.closest('a[href="#menu"]');
        
        if (menuToggle) {
            event.preventDefault();
            event.stopPropagation();
            body.classList.toggle('is-menu-visible');
        } else if (body.classList.contains('is-menu-visible') && !event.target.closest('#menu')) {
            body.classList.remove('is-menu-visible');
        }
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && body.classList.contains('is-menu-visible')) {
            body.classList.remove('is-menu-visible');
        }
    });
});