// This script handles the typing animation and the mobile menu functionality.
window.onload = function() {
    // Typing effect for the tagline
    const taglineElement = document.getElementById('tagline');
    const taglines = [
        "Software Development Engineer",
        "Expert in C++ and Problem-Solving",
        "Passionate about Scalable Systems",
        "Creator of Efficient Solutions"
    ];
    let taglineIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeWriter() {
        const currentText = taglines[taglineIndex];
        if (isDeleting) {
            taglineElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            taglineElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 1000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            taglineIndex = (taglineIndex + 1) % taglines.length;
            typingSpeed = 500;
        }
        setTimeout(typeWriter, typingSpeed);
    }
    typeWriter();

    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Copy to clipboard functionality
    const copyButton = document.getElementById('copy-email-button');
    const emailText = document.getElementById('email-text');
    const copyMessage = document.getElementById('copy-message');

    copyButton.addEventListener('click', () => {
        const textToCopy = emailText.textContent;
        
        // Create a temporary input element
        const tempInput = document.createElement('input');
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);
        
        // Select and copy the text
        tempInput.select();
        tempInput.setSelectionRange(0, 99999); // For mobile devices
        document.execCommand('copy');
        
        // Remove the temporary input
        document.body.removeChild(tempInput);
        
        // Show a brief message
        copyMessage.classList.remove('opacity-0');
        copyMessage.classList.add('opacity-100');
        setTimeout(() => {
            copyMessage.classList.remove('opacity-100');
            copyMessage.classList.add('opacity-0');
        }, 2000);
    });
};
