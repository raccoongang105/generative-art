// Main JavaScript for carousel functionality
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showItem(index) {
    const offset = -index * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;

    // Optionally, add opacity fade effect
    items.forEach((item, i) => {
        item.style.opacity = i === index ? '1' : '0';
    });
}

function nextItem() {
    currentIndex = (currentIndex + 1) % totalItems;
    showItem(currentIndex);
}

function prevItem() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showItem(currentIndex);
}

// Add event listeners for button clicks
nextBtn.addEventListener('click', nextItem);
prevBtn.addEventListener('click', prevItem);

// Initially show the first art piece
showItem(currentIndex);
