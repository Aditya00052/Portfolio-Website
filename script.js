document.addEventListener('DOMContentLoaded', function () {

    // For text animation:

    // Initialize the typing animation
    const typingAnimationElement = document.getElementById('typing-animation');

    // Check if the element exists
    if (typingAnimationElement) {
        // Create an array of typing text
        const typingTexts = [
            'Analytical  ',
            'Data Driven  ',
            'Detail-Oriented   ',
        ];

        // Create a function to display the typing animation for a given text
        function playTypingAnimation(text) {
            // Loop through each character and add it to the element
            for (let i = 0; i < text.length; i++) {
                setTimeout(() => {
                    typingAnimationElement.textContent += text[i];
                }, i * 200); // Increase the delay to slow down the typing animation
            }

            // Once the animation is complete, reset the text and start over
            setTimeout(() => {
                typingAnimationElement.textContent = '';
                playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);
            }, text.length * 200);
        }

        // Start the typing animation loop
        playTypingAnimation(typingTexts[0]);
    } else {
        console.error('Element with id "typing-animation" not found.');
    }





    // GPTTTTTTTTTT2
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
    
            const target = document.querySelector(this.getAttribute('href'));
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            let targetPosition = target.offsetTop - navbarHeight;
    
            targetPosition = targetPosition - 100; // Adjust if needed
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
    
            // Remove highlight from all nav-links
            document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active-nav'));
    
            // Highlight the clicked nav-link
            this.classList.add('active-nav');
        });
    });
    
    // Revert the highlight when the user scrolls away from the section
    window.addEventListener('scroll', function() {
        document.querySelectorAll('.nav-link').forEach(anchor => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight - 100;
                const sectionHeight = target.offsetHeight;
    
                if (window.scrollY >= targetPosition && window.scrollY < targetPosition + sectionHeight) {
                    // Highlight the nav-link when the section is in view
                    anchor.classList.add('active-nav');
                } else {
                    // Revert the highlight when the section is out of view
                    anchor.classList.remove('active-nav');
                }
            }
        });
    });

    
    
});

