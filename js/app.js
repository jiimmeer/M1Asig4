// Añadir efectos de hover a las tarjetas
document.querySelectorAll('.product-card, .pet-card, .service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(2.05)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Efecto de click en los botones
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        let ripple = document.createElement('div');
        this.appendChild(ripple);
        
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        setTimeout(() => {
            ripple.remove();
        }, 1000);
    });
});