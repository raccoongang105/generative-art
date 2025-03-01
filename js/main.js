document.addEventListener('DOMContentLoaded', function () {
    // If you want to add any custom behavior for the links, do so here.
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            // You can handle the event or log something here if you want
            console.log('Navigating to:', link.href);
        });
    });
});
