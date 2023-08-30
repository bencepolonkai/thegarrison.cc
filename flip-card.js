const flipCards = document.querySelectorAll('.flip-card');

// Check if the device supports hover
const isHoverSupported = () => {
    return window.matchMedia('(hover:hover)').matches;
};

flipCards.forEach(card => {
    if (!isHoverSupported()) {
        
        // card.addEventListener('click', () => {
            
        //         card.classList.toggle('flipped');
           
        // });
        card.addEventListener('touchend', () => {
            
            card.classList.toggle('flipped');
       
    });
    }
});

