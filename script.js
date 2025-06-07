// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Navigation smooth scrolling
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Typing animation for terminal
    const typingElements = document.querySelectorAll('.typing-text');
    let delay = 0;

    typingElements.forEach((element, index) => {
        const text = element.textContent;
        element.textContent = '';
        
        setTimeout(() => {
            typeWriter(element, text, 50);
        }, delay);
        
        delay += (text.length * 50) + 1000; // Add delay between each typing animation
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-100px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeNavLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                
                // Remove active class from all nav links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current nav link
                if (activeNavLink) {
                    activeNavLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Parallax effect for matrix background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.matrix-bg');
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    });

    // Neural network animation enhancement
    createNeuralConnections();
    
    // Skill items hover effect enhancement
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.setProperty('--glow-color', getRandomColor());
        });
    });

    // Terminal cursor blinking enhancement
    animateTerminalCursor();
});

// Typing animation function
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.style.borderRight = '2px solid #00ff88';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            element.style.borderRight = 'none';
        }
    }
    type();
}

// Create neural network connections
function createNeuralConnections() {
    const neuralNetwork = document.querySelector('.neural-network');
    const nodes = document.querySelectorAll('.node');
    
    if (!neuralNetwork || nodes.length === 0) return;

    // Create SVG for connections
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.style.pointerEvents = 'none';
    svg.style.zIndex = '-1';
    neuralNetwork.appendChild(svg);

    // Create connections between nodes
    const connections = [
        [0, 1], [0, 5], [1, 2], [1, 5], 
        [2, 3], [2, 5], [3, 4], [3, 5], 
        [4, 0], [4, 5], [5, 1], [5, 3]
    ];

    connections.forEach(([startIndex, endIndex], connectionIndex) => {
        const startNode = nodes[startIndex];
        const endNode = nodes[endIndex];
        
        if (!startNode || !endNode) return;

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        
        // Get node positions
        const startRect = startNode.getBoundingClientRect();
        const endRect = endNode.getBoundingClientRect();
        const containerRect = neuralNetwork.getBoundingClientRect();
        
        const startX = startRect.left - containerRect.left + startRect.width / 2;
        const startY = startRect.top - containerRect.top + startRect.height / 2;
        const endX = endRect.left - containerRect.left + endRect.width / 2;
        const endY = endRect.top - containerRect.top + endRect.height / 2;
        
        line.setAttribute('x1', startX);
        line.setAttribute('y1', startY);
        line.setAttribute('x2', endX);
        line.setAttribute('y2', endY);
        line.setAttribute('stroke', '#00ff88');
        line.setAttribute('stroke-width', '1');
        line.setAttribute('opacity', '0.3');
        
        // Add animation
        line.style.animation = `connectionPulse 3s ease-in-out infinite`;
        line.style.animationDelay = `${connectionIndex * 0.2}s`;
        
        svg.appendChild(line);
    });

    // Add CSS for connection animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes connectionPulse {
            0%, 100% { opacity: 0.3; stroke-width: 1; }
            50% { opacity: 0.8; stroke-width: 2; }
        }
    `;
    document.head.appendChild(style);
}

// Get random color for skill items
function getRandomColor() {
    const colors = ['#00ff88', '#00d4ff', '#ff0080', '#ffff00', '#ff6600'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Enhanced terminal cursor animation
function animateTerminalCursor() {
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        setInterval(() => {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }, 800);
    }
}

// Intersection Observer for scroll animations
const animateOnScroll = () => {
    const animatedElements = document.querySelectorAll('.timeline-item, .skill-category, .contact-link');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
};

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Matrix rain effect (optional enhancement)
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-2';
    canvas.style.opacity = '0.1';
    
    document.body.appendChild(canvas);
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "01";
    const drops = [];
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(10, 10, 10, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff88';
        ctx.font = fontSize + 'px JetBrains Mono';
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrix[Math.floor(Math.random() * matrix.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 100);
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Uncomment the line below to enable matrix rain effect
// createMatrixRain();