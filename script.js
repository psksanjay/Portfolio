// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const projectButtons = document.querySelectorAll('.project-demo-btn');
const modal = document.getElementById('projectModal');
const closeModal = document.querySelector('.close-modal');
const contactForm = document.getElementById('contactForm');

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Project data for modals
const projectData = {
    chat: {
        title: "Real-Time Chat Application",
        description: "A full-featured real-time messaging application built with modern web technologies.",
        features: [
            "Developed using Spring Boot with WebSocket and STOMP protocol for instant communication",
            "Implemented user presence tracking with join/leave notifications and connection status indicators",
            "Built responsive modern UI with message timestamps and real-time activity updates",
            "Designed scalable backend architecture supporting multiple concurrent users and chat sessions"
        ],
        technologies: ["Spring Boot", "WebSocket", "STOMP", "JavaScript", "HTML/CSS"],
        status: "Completed (2025)"
    },
    banking: {
        title: "Banking Application",
        description: "A console-based banking system demonstrating core Java concepts and database integration.",
        features: [
            "Developed console-based banking system demonstrating core Java concepts and OOP principles",
            "Implemented account management, transactions, and balance inquiry features with MySQL database",
            "Applied JDBC for database connectivity with proper error handling and transaction management",
            "Designed efficient data models and SQL queries for optimal performance"
        ],
        technologies: ["Core Java", "MySQL", "JDBC", "OOP Principles"],
        status: "Completed (2025)"
    },
    ipl: {
        title: "IPL Match Prediction System",
        description: "Machine learning model to predict IPL match outcomes using historical cricket data.",
        features: [
            "Built machine learning model to predict IPL match outcomes using historical cricket data",
            "Performed data preprocessing, feature engineering, and exploratory data analysis on large datasets",
            "Implemented classification algorithms achieving reliable prediction accuracy",
            "Visualized insights using Python libraries for data-driven decision making"
        ],
        technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "Data Visualization"],
        status: "Completed (2025)"
    },
    tts: {
        title: "Text-to-Speech Converter",
        description: "Interactive web application that converts text to speech with voice customization options.",
        features: [
            "Built interactive web application converting text to speech with voice customization options",
            "Implemented Web Speech Synthesis API supporting multiple Google and Microsoft voices",
            "Created responsive UI with real-time controls and cross-browser compatibility",
            "Added features for voice rate, pitch, and volume control"
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "Web Speech API"],
        status: "Completed (2025)"
    }
};

// Open project modal
projectButtons.forEach(button => {
    button.addEventListener('click', () => {
        const projectId = button.getAttribute('data-project');
        const project = projectData[projectId];
        
        if (project) {
            document.getElementById('modalTitle').textContent = project.title;
            
            let modalHTML = `
                <p><strong>Description:</strong> ${project.description}</p>
                <p><strong>Status:</strong> ${project.status}</p>
                
                <h3>Key Features</h3>
                <ul class="modal-features">
            `;
            
            project.features.forEach(feature => {
                modalHTML += `<li>${feature}</li>`;
            });
            
            modalHTML += `
                </ul>
                
                <h3>Technologies Used</h3>
                <div class="modal-tech">
            `;
            
            project.technologies.forEach(tech => {
                modalHTML += `<span>${tech}</span>`;
            });
            
            modalHTML += `</div>`;
            
            document.getElementById('modalContent').innerHTML = modalHTML;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // In a real application, you would send this data to a server
    // For this demo, we'll just show a success message
    alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon at ${email}.`);
    
    // Reset form
    contactForm.reset();
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '15px 0';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    }
});

// Add animation to elements when scrolling
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements to animate
const animateElements = document.querySelectorAll('.strength-card, .skill-category, .project-card, .education-card');
animateElements.forEach(el => {
    observer.observe(el);
});

// Initialize with some animations
document.addEventListener('DOMContentLoaded', () => {
    // Add CSS for animation classes
    const style = document.createElement('style');
    style.textContent = `
        .strength-card, .skill-category, .project-card, .education-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .strength-card.animate, .skill-category.animate, .project-card.animate, .education-card.animate {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Trigger animation for hero section
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image');
    
    setTimeout(() => {
        heroText.style.animation = 'fadeInUp 0.8s ease forwards';
        heroImage.style.animation = 'fadeInRight 0.8s ease forwards';
    }, 300);
});