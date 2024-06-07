// Select the elements
const nav = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-btn');
const navLinks = document.querySelector('.nav-links');

// Function to handle scroll event
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.remove('transparent');
        nav.classList.add('solid');
    } else {
        nav.classList.remove('solid');
        nav.classList.add('transparent');
    }
});

// Function to handle hamburger menu click
hamburger.addEventListener('click', () => {
    navLinks.classList.add('active');
    hamburger.style.display = 'none';
    closeBtn.style.display = 'block';
});

// Function to handle close button click
closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.style.display = 'flex';
    closeBtn.style.display = 'none';
});

// Function to handle scroll to quote section
function scrollToQuote() {
    const quoteSection = document.getElementById('quote');
    quoteSection.scrollIntoView({ behavior: 'smooth' });
}

function openQuoteLink() {
    window.open('https://wa.me/27813944582?text=Greetings,+I+was+browsing+on+your+website+and+would+like+to+get+a+quote+on+a+service+provided+by+your+company.', '_blank');
}



