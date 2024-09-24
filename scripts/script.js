(function() {
    window.addEventListener('load', function() {
        const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;

        let loadTimeElement = document.getElementById('load-time');
        if (loadTimeElement) {
            loadTimeElement.textContent = `Page loaded in: ${loadTime} ms`;
        }
    });

    const currentPage = window.location.pathname.split('/').pop();

    document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll("nav ul li a").forEach(link => { console.log(link);
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add("active");
                }
            });
    });
})();