document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    // Current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Animate stats counting
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            stat.textContent = Math.floor(current);
            
            if (current >= target) {
                stat.textContent = target + '+';
                clearInterval(timer);
            }
        }, 10);
    });

    // Skills data
    const skillsData = [
        { name: 'HTML', percentage: 95 },
        { name: 'CSS', percentage: 90 },
        { name: 'JavaScript', percentage: 85 },
        { name: 'React', percentage: 80 },
        { name: 'Node.js', percentage: 75 },
        { name: 'Python', percentage: 70 },
        { name: 'UI/UX Design', percentage: 85 },
        { name: 'Git', percentage: 80 }
    ];

    // Populate skills grid
    const skillsGrid = document.querySelector('.skills-grid');
    skillsData.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <div class="skill-name">
                <h3>${skill.name}</h3>
                <span class="skill-percentage">${skill.percentage}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" style="width: ${skill.percentage}%"></div>
            </div>
        `;
        skillsGrid.appendChild(skillItem);
    });

    // Certificates data
    const certificatesData = [
        { 
            image: 'assests/IPR CERTIFICATE.PNG.png', 
            title: 'IPR Certificate', 
            issuer: 'Kalinga University - 2024' 
        },
        { 
            image: 'assests/MIND-MELD CERTIFICATE.PNG.png', 
            title: 'Mind-Meld Certificate', 
            issuer: 'Online Platform - 2025' 
        },
        { 
            image: 'assests/MIND-MELD CERTIFICATE.PNG.png', 
            title: 'Mind-Meld Certificate', 
            issuer: 'Online Platform - 2025' 
        },

    ];

    // Populate certificates slider
    const sliderContainer = document.querySelector('.slider-container');
    certificatesData.forEach(cert => {
        const slide = document.createElement('div');
        slide.className = 'slider-item';
        slide.innerHTML = `
            <img src="${cert.image}" alt="${cert.title}">
            <div class="certificate-info">
                <h3>${cert.title}</h3>
                <p>${cert.issuer}</p>
            </div>
        `;
        sliderContainer.appendChild(slide);
    });

    // Certificate slider functionality
    const slides = document.querySelectorAll('.slider-item');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
        });
    }

    prevBtn.addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    nextBtn.addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    // Initialize slider
    showSlide(currentSlide);

        // Game Section
    const codeSnippets = {
        easy: [
            `function greet(name) {
    return "Hello, " + name + "!";
}`,
            `const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(x => x * 2);`,
            `let count = 0;
function increment() {
    count++;
}`
        ],
        medium: [
            `function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}`,
            `class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return \`Hi, I'm \${this.name}!\`;
    }
}`,
            `const fetchData = async () => {
    try {
        const response = await fetch('https://api.example.com/data');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
};`
        ],
        hard: [
            `function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}`,
            `const deepClone = obj => {
    if (obj === null || typeof obj !== 'object') return obj;
    const clone = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
};`,
            `const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
};`
        ]
    };

    const codeDisplay = document.getElementById('code-display');
    const codeInput = document.getElementById('code-input');
    const startBtn = document.getElementById('start-btn');
    const resetBtn = document.getElementById('reset-btn');
    const timerDisplay = document.getElementById('timer');
    const wpmDisplay = document.getElementById('wpm');
    const accuracyDisplay = document.getElementById('accuracy');
    const difficultySelect = document.getElementById('difficulty');

    let timer;
    let startTime;
    let isPlaying = false;
    let currentCode = '';
    let correctChars = 0;
    let totalChars = 0;

    function loadRandomCode(difficulty) {
        const snippets = codeSnippets[difficulty];
        currentCode = snippets[Math.floor(Math.random() * snippets.length)];
        renderCodeDisplay();
    }

    function renderCodeDisplay() {
        codeDisplay.innerHTML = '';
        currentCode.split('').forEach(char => {
            const span = document.createElement('span');
            span.textContent = char;
            codeDisplay.appendChild(span);
        });
    }

    function updateCodeDisplay(input) {
        const codeSpans = codeDisplay.querySelectorAll('span');
        let correctCount = 0;
        
        codeSpans.forEach((span, index) => {
            span.className = '';
            
            if (index < input.length) {
                if (input[index] === currentCode[index]) {
                    span.classList.add('correct');
                    correctCount++;
                } else {
                    span.classList.add('incorrect');
                }
            }
            
            if (index === input.length) {
                span.classList.add('current');
            }
        });
        
        correctChars = correctCount;
        totalChars = input.length;
        updateStats();
    }

    function updateStats() {
        // Calculate accuracy
        const accuracy = totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 0;
        accuracyDisplay.textContent = `${accuracy}%`;
        
        // Calculate WPM (5 chars = 1 word)
        if (isPlaying && startTime) {
            const timeElapsed = (Date.now() - startTime) / 1000 / 60; // in minutes
            const words = correctChars / 5;
            const wpm = Math.round(words / timeElapsed);
            wpmDisplay.textContent = wpm;
        }
    }

    function startTimer() {
        startTime = Date.now();
        timer = setInterval(() => {
            const elapsed = Math.floor((Date.now() - startTime) / 1000);
            const minutes = Math.floor(elapsed / 60).toString().padStart(2, '0');
            const seconds = (elapsed % 60).toString().padStart(2, '0');
            timerDisplay.textContent = `${minutes}:${seconds}`;
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timer);
    }

    function resetGame() {
        stopTimer();
        isPlaying = false;
        timerDisplay.textContent = '00:00';
        wpmDisplay.textContent = '0';
        accuracyDisplay.textContent = '0%';
        codeInput.value = '';
        codeInput.disabled = true;
        startBtn.textContent = 'Start Challenge';
        loadRandomCode(difficultySelect.value);
    }

    function startGame() {
        if (isPlaying) {
            // Finish the game
            isPlaying = false;
            codeInput.disabled = true;
            startBtn.textContent = 'Start Challenge';
            stopTimer();
        } else {
            // Start the game
            isPlaying = true;
            codeInput.value = '';
            codeInput.disabled = false;
            codeInput.focus();
            startBtn.textContent = 'Finish';
            startTimer();
            loadRandomCode(difficultySelect.value);
        }
    }

    // Event listeners
    startBtn.addEventListener('click', startGame);
    resetBtn.addEventListener('click', resetGame);

    codeInput.addEventListener('input', () => {
        if (isPlaying) {
            updateCodeDisplay(codeInput.value);
            
            // Check if completed
            if (codeInput.value === currentCode) {
                setTimeout(() => {
                    alert(`Challenge completed! Your speed: ${wpmDisplay.textContent} WPM with ${accuracyDisplay.textContent} accuracy.`);
                    resetGame();
                }, 100);
            }
        }
    });

    difficultySelect.addEventListener('change', () => {
        if (!isPlaying) {
            loadRandomCode(difficultySelect.value);
        }
    });

    // Initialize
    resetGame();

    // Coding journey data
    const journeyData = [
        { 
            year: '2020', 
            title: 'Started Learning Web & App Development', 
            description: 'Began my journey with HTML,CSS and FLUTTER, building simple static App & Websiite.',
            milestone: 'Beginning'
        },
        { 
            year: '2021', 
            title: 'Flutter', 
            description: 'Created Apps such as "Chatpot", a game "music tile".',
            milestone: 'Learned'
        },
        { 
            year: '2022', 
            title: 'First Compititive Project', 
            description: 'Participated in "YouthIdeathon"',
            milestone: 'Milestone'
        },
        { 
            year: '2024', 
            title: 'Started Leadrning Web Development', 
            description: 'Started building website with the help of HTML and CSS and Java Script.',
            milestone: 'Beginer'
        },
        { 
            year: '2025', 
            title: 'Part-time Freelancing', 
            description: 'Making complete website front-end and all set for Pair Freelance',
            milestone: 'Advanced'
        }
    ];

    // Populate coding journey
    const journeyTimeline = document.querySelector('.journey-timeline');
    journeyData.forEach(item => {
        const journeyItem = document.createElement('div');
        journeyItem.className = 'journey-item';
        journeyItem.innerHTML = `
            <div class="journey-date">${item.year}</div>
            <div class="journey-content">
                <span class="journey-milestone">${item.milestone}</span>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        journeyTimeline.appendChild(journeyItem);
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
            
            // Reset form
            contactForm.reset();
        });
    }

    // Animate elements when scrolling
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.skill-progress, .service-card, .timeline-item, .journey-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                if (element.classList.contains('skill-progress')) {
                    // Skills animation is handled by CSS transition when width is set
                } else {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            }
        });
    };

    // Initialize animation states
    document.querySelectorAll('.skill-progress').forEach(progress => {
        progress.style.width = '0';
    });

    document.querySelectorAll('.service-card, .timeline-item, .journey-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Trigger animations on scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});

// Add this at the end of your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    // // Floating cursor effects
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Create trail elements
        const trail = document.createElement('div');
        trail.classList.add('cursor-trail');
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        document.body.appendChild(trail);
        
        // Remove trail after animation
        setTimeout(() => {
            trail.remove();
        }, 1000);
    });
    
    // Interactive hover effects
    document.querySelectorAll('a, button, .service-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
        });
    });
    
    // Initialize particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#3498db" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": true },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#3498db", "opacity": 0.4, "width": 1 },
            "move": { "enable": true, "speed": 2, "direction": "none", "random": true, "straight": false, "out_mode": "out" }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": { "enable": true, "mode": "repulse" },
                "onclick": { "enable": true, "mode": "push" }
            }
        }
    });
});

// Add this with your other event listeners
const animateOnScroll = function() {
    const elements = document.querySelectorAll('[data-animate]');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.setAttribute('data-animate', 'in');
        }
    });
};

// Update scroll progress indicator
window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scrollProgress');
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = progress + '%';
    
    animateOnScroll();
});

// // Music toggle functionality
// const musicToggle = document.getElementById('musicToggle');
// const bgMusic = document.getElementById('bgMusic');
// const musicStatus = document.querySelector('.music-status');

// let isMusicPlaying = false;

// musicToggle.addEventListener('click', () => {
//     if (isMusicPlaying) {
//         bgMusic.pause();
//         musicStatus.textContent = 'OFF';
//     } else {
//         bgMusic.play();
//         musicStatus.textContent = 'ON';
//     }
//     isMusicPlaying = !isMusicPlaying;
// });

// Add confetti effect when completing the code challenge
function showConfetti() {
    const confettiSettings = { 
        target: 'confetti-canvas',
        max: 150,
        size: 1.5,
        animate: true,
        props: ['circle', 'square', 'triangle', 'line'],
        colors: [[46, 204, 113], [52, 152, 219], [155, 89, 182], [241, 196, 15]],
        clock: 25,
        rotate: true,
        start_from_edge: true,
        respawn: true
    };
    
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    
    setTimeout(() => {
        confetti.clear();
    }, 5000);
}

// Add this to your code challenge completion alert
setTimeout(() => {
    showConfetti();
    alert(`Challenge completed! Your speed: ${wpmDisplay.textContent} WPM with ${accuracyDisplay.textContent} accuracy.`);
    resetGame();
}, 100);

// Music Player Functionality
document.addEventListener('DOMContentLoaded', function() {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const musicStatus = document.querySelector('.music-status');
    const volumeSlider = document.getElementById('volumeSlider');
    
    // Start with music off
    let isMusicPlaying = false;
    bgMusic.volume = 0.5;
    
    // Toggle music play/pause
    musicToggle.addEventListener('click', function() {
        if (isMusicPlaying) {
            bgMusic.pause();
            musicStatus.textContent = 'OFF';
        } else {
            bgMusic.play().catch(e => {
                console.log("Auto-play was prevented. Please interact with the page first.");
                // Show a tooltip or message to click the button
                musicToggle.title = "Click to enable music";
            });
            musicStatus.textContent = 'ON';
        }
        isMusicPlaying = !isMusicPlaying;
    });
    
    // Volume control
    volumeSlider.addEventListener('input', function() {
        bgMusic.volume = this.value;
    });
    
    // Enable music after user interaction (to comply with autoplay policies)
    document.body.addEventListener('click', function firstInteraction() {
        // This helps with browsers that block autoplay
        bgMusic.volume = 0; // Start muted
        bgMusic.play().then(() => {
            bgMusic.pause();
            bgMusic.volume = volumeSlider.value;
        }).catch(e => {
            console.log("Autoplay not allowed yet");
        });
        document.body.removeEventListener('click', firstInteraction);
    }, { once: true });
});