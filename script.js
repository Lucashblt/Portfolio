// Language Management
let currentLang = 'fr'; // Default language
let currentTheme = 'dark'; // Default theme

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // One-time green code fly-up effect
    if (typeof initCodeFlyUp === 'function') initCodeFlyUp();
    // Start fake terminal typing animation
    startFakeTerminalTyping();

    // Add close button handler for fake terminal
    const closeBtn = document.getElementById('close-terminal');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            const term = document.getElementById('fake-terminal');
            if (term) term.style.display = 'none';
        });
    }
    // Check if there's a saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        currentLang = savedLang;
    }

    // Check if there's a saved theme preference
    const savedTheme = localStorage.getItem('preferredTheme');
    if (savedTheme) {
        currentTheme = savedTheme;
        applyTheme(savedTheme);
    }

    // Set up language toggle buttons
    const langFrBtn = document.getElementById('lang-fr');
    const langEnBtn = document.getElementById('lang-en');

    langFrBtn.addEventListener('click', () => switchLanguage('fr'));
    langEnBtn.addEventListener('click', () => switchLanguage('en'));

    // Set up theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', toggleTheme);

    // Apply initial language
    applyTranslations(currentLang);
    updateActiveButton(currentLang);

    // Smooth scroll for navigation links
    setupSmoothScroll();

    // Add scroll animations
    setupScrollAnimations();
});

// Create "movie-like" green code lines flying upward on first load
function initCodeFlyUp() {
    try {
        let container = document.getElementById('code-splash');
        if (!container) {
            container = document.createElement('div');
            container.id = 'code-splash';
            document.body.appendChild(container);
        }

        const width = window.innerWidth;
        const height = window.innerHeight;
        const lineCount = Math.min(60, Math.floor(width / 20));
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789{}[]()<>=+-*/%&|!~^:;,.#_';

        for (let i = 0; i < lineCount; i++) {
            const span = document.createElement('span');
            span.className = 'code-line';
            // Random code-like content
            const len = 20 + Math.floor(Math.random() * 30);
            let text = '';
            for (let j = 0; j < len; j++) {
                text += charset[Math.floor(Math.random() * charset.length)];
            }
            span.textContent = text;

            // Randomize position and speed
            const left = Math.random() * (width - 50);
            const delay = Math.random() * 0.8;
            const duration = 1.8 + Math.random() * 1.6; // 1.8s - 3.4s
            span.style.left = left + 'px';
            span.style.animationDuration = duration + 's';
            span.style.animationDelay = delay + 's';
            container.appendChild(span);
        }

        // Remove overlay after animations end
        const totalTime = 5000; // ms
        setTimeout(() => {
            container.classList.add('fade-out');
            // allow small fade
            setTimeout(() => {
                if (container && container.parentNode) container.parentNode.removeChild(container);
            }, 300);
        }, totalTime);
    } catch (e) {
        // fail gracefully
        console.error('Code splash error', e);
    }
}

// Make the green code fly-up effect callable globally
window.flyGreenCode = initCodeFlyUp;

// Switch language function
function switchLanguage(lang) {
    if (lang === currentLang) return;
    
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    applyTranslations(lang);
    updateActiveButton(lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Apply translations to the page
function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Update active button state
function updateActiveButton(lang) {
    const langFrBtn = document.getElementById('lang-fr');
    const langEnBtn = document.getElementById('lang-en');
    
    if (lang === 'fr') {
        langFrBtn.classList.add('active');
        langEnBtn.classList.remove('active');
    } else {
        langEnBtn.classList.add('active');
        langFrBtn.classList.remove('active');
    }
}

// Theme toggle function
function toggleTheme() {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    currentTheme = newTheme;
    applyTheme(newTheme);
    localStorage.setItem('preferredTheme', newTheme);
}

// Apply theme to the page
function applyTheme(theme) {
    const html = document.documentElement;
    const themeToggleBtn = document.getElementById('theme-toggle');
    const icon = themeToggleBtn.querySelector('i');
    
    if (theme === 'light') {
        html.setAttribute('data-theme', 'light');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        html.removeAttribute('data-theme');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

// Smooth scroll for navigation
function setupSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Trigger green code fly-up animation
            if (window.flyGreenCode) window.flyGreenCode();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(30px)';
        category.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(category);
    });

    // Observe timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = `all 0.6s ease ${index * 0.15}s`;
        observer.observe(item);
    });

    // Observe project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// Add active state to navigation on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    const navHeight = document.querySelector('.navbar').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.pageYOffset >= sectionTop && 
            window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add typing effect to hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Utility function to update content dynamically
function updateContent(elementId, content) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = content;
    }
}

// Export functions if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        switchLanguage,
        applyTranslations,
        updateContent
    };
}


// --- Fake Terminal Typing Animation ---
function startFakeTerminalTyping() {
    const el = document.getElementById('terminal-content');
    if (!el) return;
    const lines = [
        '<span class="hl-comment">// Compiling portfolio...</span>',
        '<span class="hl-key">const</span> <span class="hl-var">portfolio</span> <span class="hl-key">=</span> <span class="hl-fn">buildPortfolio</span><span class="hl-key">(</span><span class="hl-str">\'Lucas Hublart\'</span><span class="hl-key">,</span> <span class="hl-str">\'Software Engineer\'</span><span class="hl-key">)</span>;',
        '<span class="hl-key">if</span> <span class="hl-key">(</span><span class="hl-var">portfolio</span>.<span class="hl-fn">isReady</span><span class="hl-key">())</span> <span class="hl-key">{</span>',
        '    <span class="hl-fn">console</span>.<span class="hl-fn">log</span><span class="hl-key">(</span><span class="hl-str">\'Welcome to my portfolio!\'</span><span class="hl-key">)</span>;',
        '    <span class="hl-fn">console</span>.<span class="hl-fn">log</span><span class="hl-key">(</span><span class="hl-str">\'Lucas Hublart - Software Engineer\'</span><span class="hl-key">)</span>;',
        '<span class="hl-key">}</span>',
    ];
    let lineIdx = 0;
    let charIdx = 0;
    let html = '';
    let typing = true;
    let cursor = '<span class="typed-cursor">|</span>';

    function typeLine() {
        if (lineIdx >= lines.length) {
            el.innerHTML = html + cursor;
            typing = false;
            setTimeout(() => el.innerHTML = html, 1200);
            return;
        }
        const line = lines[lineIdx];
        let display = '';
        let inTag = false;
        let i = 0;
        // Type char by char, but skip over HTML tags for highlighting
        function typeChar() {
            if (i > line.length) {
                html += line + '\n';
                el.innerHTML = html + cursor;
                lineIdx++;
                charIdx = 0;
                setTimeout(typeLine, 350);
                return;
            }
            let c = line.charAt(i);
            if (c === '<') inTag = true;
            if (!inTag) display += c;
            else display += c;
            if (c === '>') inTag = false;
            el.innerHTML = html + display + cursor;
            i++;
            let speed = inTag ? 0 : Math.max(8, (18 + Math.random() * 32) * 0.75);
            setTimeout(typeChar, speed);
        }
        typeChar();
    }
    typeLine();
}
