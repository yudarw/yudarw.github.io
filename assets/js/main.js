// Main JavaScript - Handles dynamic content loading and interactions

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    loadHeroContent();
    loadAboutContent();
    loadExperienceContent();
    loadEducationContent();
    loadProjectsContent();
    loadResearchContent();
    loadSkillsContent();
    loadContactContent();
    initContactForm();
    setCurrentYear();
    initScrollAnimations();
    initBackToTop();
});

// ===========================
// NAVIGATION
// ===========================
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });

        // Navbar background on scroll
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 22, 40, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 22, 40, 0.95)';
        }
    });
}

// ===========================
// HERO SECTION
// ===========================
function loadHeroContent() {
    const config = portfolioConfig.hero;
    
    // Set subtitle
    document.getElementById('hero-subtitle').textContent = config.subtitle;
    
    // Set description
    document.getElementById('hero-description').innerHTML = `<p>${config.description}</p>`;
    
    // Load social links
    const socialLinksContainer = document.getElementById('social-links');
    const social = portfolioConfig.social;
    
    let socialHTML = '';
    if (social.github) {
        socialHTML += `<a href="${social.github}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>`;
    }
    if (social.linkedin) {
        socialHTML += `<a href="${social.linkedin}" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>`;
    }
    if (social.twitter) {
        socialHTML += `<a href="${social.twitter}" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>`;
    }
    if (social.medium) {
        socialHTML += `<a href="${social.medium}" target="_blank" rel="noopener noreferrer"><i class="fab fa-medium"></i></a>`;
    }
    if (portfolioConfig.personal.email) {
        socialHTML += `<a href="mailto:${portfolioConfig.personal.email}"><i class="fas fa-envelope"></i></a>`;
    }
    
    socialLinksContainer.innerHTML = socialHTML;
}

// ===========================
// ABOUT SECTION
// ===========================
function loadAboutContent() {
    const aboutText = document.getElementById('about-text');
    const paragraphs = portfolioConfig.about.paragraphs;
    
    let html = '';
    paragraphs.forEach(paragraph => {
        html += `<p>${paragraph}</p>`;
    });
    
    // Add resume link at the end
    html += `<a href="assets/resume/resume-yuda-2025.pdf" target="_blank" class="resume-link">
        View Full Resume <i class="fas fa-arrow-right"></i>
    </a>`;
    
    aboutText.innerHTML = html;
    
    // Load profile card location
    const locationElement = document.getElementById('current-location');
    if (locationElement && portfolioConfig.personal.location) {
        locationElement.textContent = portfolioConfig.personal.location;
    }
}

// ===========================
// EXPERIENCE SECTION
// ===========================
function loadExperienceContent() {
    const timeline = document.getElementById('experience-timeline');
    const experiences = portfolioConfig.experience;
    
    let html = '';
    experiences.forEach(exp => {
        html += `
            <div class="timeline-item fade-in">
                <div class="timeline-content">
                    <div class="timeline-date">${exp.period}</div>
                    <h3>${exp.title}</h3>
                    <h4>${exp.company}</h4>
                    <ul>
                        ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    });
    
    timeline.innerHTML = html;
}

// ===========================
// EDUCATION SECTION
// ===========================
function loadEducationContent() {
    const educationGrid = document.getElementById('education-grid');
    const education = portfolioConfig.education;
    
    let html = '';
    education.forEach(edu => {
        html += `
            <div class="education-card fade-in">
                <div class="education-icon">
                    <i class="fas fa-graduation-cap"></i>
                </div>
                <h3>${edu.degree}</h3>
                <h4>${edu.field}</h4>
                <p><strong>${edu.institution}</strong></p>
                <p>${edu.period}</p>
                ${edu.location ? `<p><i class="fas fa-map-marker-alt"></i> ${edu.location}</p>` : ''}
            </div>
        `;
    });
    
    educationGrid.innerHTML = html;
}

// ===========================
// PROJECTS SECTION
// ===========================
function loadProjectsContent() {
    const projectsGrid = document.getElementById('projects-grid');
    const projects = portfolioConfig.projects;
    
    let html = '';
    projects.forEach((project, index) => {
        let imageContent;
        if (project.image && project.image.trim() !== '') {
            imageContent = `<img src="${project.image}" alt="${project.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                           <i class="fas ${project.icon}" style="display:none;"></i>`;
        } else {
            imageContent = `<i class="fas ${project.icon}"></i>`;
        }
        
        // Create URL-friendly slug from project title
        const slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            
        html += `
            <div class="project-card fade-in">
                <div class="project-image">
                    ${imageContent}
                </div>
                <div class="project-content">
                    <h3><a href="${project.link}">${project.title}</a></h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                    <a href="${project.link}" class="project-read-more">
                        Read More <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        `;
    });
    
    projectsGrid.innerHTML = html;
}

// ===========================
// RESEARCH SECTION
// ===========================
function loadResearchContent() {
    const researchList = document.getElementById('research-list');
    const publications = portfolioConfig.publications;
    
    if (!publications || publications.length === 0) {
        researchList.innerHTML = '<p style="text-align: center; color: #718096;">No publications available at the moment.</p>';
        return;
    }
    
    let html = '';
    
    publications.forEach(pub => {
        const titleContent = pub.link 
            ? `<a href="${pub.link}" target="_blank">${pub.title}</a>`
            : pub.title;
        
        html += `
            <div class="research-item">
                <div class="research-content">
                    <h3 class="research-title">${titleContent}</h3>
                    <p class="research-authors">${pub.authors}</p>
                    <div class="research-meta">
                        <span class="research-venue">
                            <i class="fas fa-university"></i>
                            ${pub.venue}
                        </span>
                        <span class="research-date">
                            <i class="fas fa-calendar"></i>
                            ${pub.date}
                        </span>
                    </div>
                    ${pub.link ? `<a href="${pub.link}" target="_blank" class="research-link">
                        <i class="fas fa-external-link-alt"></i> View Publication
                    </a>` : ''}
                </div>
            </div>
        `;
    });
    
    researchList.innerHTML = html;
}

// ===========================
// SKILLS SECTION
// ===========================
function loadSkillsContent() {
    const skillsContainer = document.getElementById('skills-container');
    const skills = portfolioConfig.skills;
    
    const categoryIcons = {
        programming: 'fa-code',
        robotics: 'fa-robot',
        ai_cv: 'fa-brain',
        embedded: 'fa-microchip',
        protocols: 'fa-network-wired',
        tools: 'fa-tools'
    };
    
    const categoryNames = {
        programming: 'Programming Languages',
        robotics: 'Robotics & Automation',
        ai_cv: 'AI & Computer Vision',
        embedded: 'Embedded Systems',
        protocols: 'Communication Protocols',
        tools: 'Tools & Software'
    };
    
    let html = '';
    
    for (const [category, skillList] of Object.entries(skills)) {
        html += `
            <div class="skill-category fade-in">
                <h3><i class="fas ${categoryIcons[category]}"></i> ${categoryNames[category]}</h3>
                <div class="skills-list">
                    ${skillList.map(skill => `
                        <div class="skill-item">
                            <div class="skill-item-header">
                                <span class="skill-name">${skill.name}</span>
                                <span class="skill-level">${skill.level}</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: ${skill.percentage}%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    skillsContainer.innerHTML = html;
    
    // Animate skill bars on scroll
    animateSkillBars();
}

function animateSkillBars() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.skill-category').forEach(category => {
        observer.observe(category);
    });
}

// ===========================
// CONTACT SECTION
// ===========================
function loadContactContent() {
    const contactInfo = document.getElementById('contact-info');
    const personal = portfolioConfig.personal;
    const social = portfolioConfig.social;
    
    let html = '';
    
    if (personal.email) {
        html += `
            <div class="contact-item fade-in">
                <i class="fas fa-envelope"></i>
                <h3>Email</h3>
                <a href="mailto:${personal.email}">${personal.email}</a>
            </div>
        `;
    }
    
    if (social.linkedin) {
        html += `
            <div class="contact-item fade-in">
                <i class="fab fa-linkedin"></i>
                <h3>LinkedIn</h3>
                <a href="${social.linkedin}" target="_blank" rel="noopener noreferrer">View Profile</a>
            </div>
        `;
    }
    
    if (social.github) {
        html += `
            <div class="contact-item fade-in">
                <i class="fab fa-github"></i>
                <h3>GitHub</h3>
                <a href="${social.github}" target="_blank" rel="noopener noreferrer">@yudarw</a>
            </div>
        `;
    }
    
    contactInfo.innerHTML = html;
}

// ===========================
// UTILITIES
// ===========================
function setCurrentYear() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

function initScrollAnimations() {
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
    
    // Initially hide elements
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // navbar height
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// BACK TO TOP BUTTON
// ===========================
function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    // Scroll to top when clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===========================
// CONTACT SECTION
// ===========================
function loadContactContent() {
    // Load social links in contact section
    const socialLinksContainer = document.getElementById('social-links-contact');
    const social = portfolioConfig.social;
    
    let socialHTML = '';
    if (social.linkedin) {
        socialHTML += `<a href="${social.linkedin}" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i class="fab fa-linkedin"></i></a>`;
    }
    if (social.github) {
        socialHTML += `<a href="${social.github}" target="_blank" rel="noopener noreferrer" title="GitHub"><i class="fab fa-github"></i></a>`;
    }
    if (social.medium) {
        socialHTML += `<a href="${social.medium}" target="_blank" rel="noopener noreferrer" title="Medium"><i class="fab fa-medium"></i></a>`;
    }
    if (social.twitter) {
        socialHTML += `<a href="${social.twitter}" target="_blank" rel="noopener noreferrer" title="Twitter"><i class="fab fa-twitter"></i></a>`;
    }
    
    socialLinksContainer.innerHTML = socialHTML;
    
    // Update contact info
    document.getElementById('contact-email').textContent = portfolioConfig.personal.email;
    document.getElementById('contact-email').href = 'mailto:' + portfolioConfig.personal.email;
    document.getElementById('contact-location').textContent = portfolioConfig.personal.location;
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Create mailto link with pre-filled content
        const mailtoLink = `mailto:${portfolioConfig.personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        // Open default email client
        window.location.href = mailtoLink;
        
        // Optional: Show success message
        alert('Opening your email client...');
    });
}
