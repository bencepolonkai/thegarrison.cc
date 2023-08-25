const flipCards = document.querySelectorAll('.flip-card');

// Check if the device supports hover
const isHoverSupported = () => {
    return window.matchMedia('(hover:hover)').matches;
};

flipCards.forEach(card => {
    if (isHoverSupported()) {
        // Hover behavior for devices that support hover
        card.addEventListener('mouseenter', () => {
            card.classList.add('flipped');
        });

        card.addEventListener('mouseleave', () => {
            card.classList.remove('flipped');
        });
    } else {
        // Click behavior for touch devices
        card.addEventListener('click', () => {
            if (!card.classList.contains('flipped')) {
                card.classList.add('flipped');
            } else {
                card.classList.remove('flipped');
            }
        });
    }
});

