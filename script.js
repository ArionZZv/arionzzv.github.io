
document.addEventListener('DOMContentLoaded', () => {
    const bgText = document.querySelector('.bg-text');
    const heroContent = document.querySelector('.hero-content');
    const portrait = document.querySelector('.portrait-container');
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (bgText) {
            bgText.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
        
        if (heroContent) {
            let opacity = 1 - (scrolled / 400); 
            heroContent.style.opacity = Math.max(0, opacity);
            let scale = 1 - (scrolled / 2000);
            heroContent.style.transform = `scale(${Math.max(0.9, scale)})`;
        }
        
        if (scrolled > 50) {
            navbar.style.top = '1rem';
            navbar.querySelector('.nav-container').style.padding = '0.4rem 1.2rem';
        } else {
            navbar.style.top = '2rem';
            navbar.querySelector('.nav-container').style.padding = '0.6rem 1.5rem';
        }
    });

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX - window.innerWidth / 2) / 40;
        mouseY = (e.clientY - window.innerHeight / 2) / 40;
    });

    function animate() {
        currentX += (mouseX - currentX) * 0.05;
        currentY += (mouseY - currentY) * 0.05;

        if (portrait) {
            portrait.style.transform = `translate(${currentX}px, ${currentY}px)`;
        }
        
        requestAnimationFrame(animate);
    }
    animate();

    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        dropdown.addEventListener('mouseenter', () => {
        });
    }

    console.log("%c Designed by JENGUX %c ARION Project ", 
        "background: #ff579c; color: #fff; padding: 5px; border-radius: 3px 0 0 3px;", 
        "background: #2b1717ff; color: #fff; padding: 5px; border-radius: 0 3px 3px 0;");
});
