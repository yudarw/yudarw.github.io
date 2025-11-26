// Load and render portfolio data
// Note: portfolioData is now loaded from content.js

// Fetch data from JSON file (no longer needed, but keeping function structure)
async function loadData() {
    try {
        // Data is already available from content.js
        if (typeof portfolioData !== 'undefined') {
            renderPortfolio();
            initScrollEffects();
        } else {
            console.error('Portfolio data not found. Make sure content.js is loaded.');
        }
    } catch (error) {
        console.error('Error loading portfolio data:', error);
    }
}

// Render all sections
function renderPortfolio() {
    if (!portfolioData) return;

    renderNavBrand();
    renderHero();
    renderSocial();
    renderAbout();
    renderExperience();
    renderProjects();
    renderSkills();
    renderPublications();
    renderFooter();
}

// Render Publications
function renderPublications() {
    const container = document.getElementById('publications-list');
    if (!container || !portfolioData.publications) return;

    container.innerHTML = portfolioData.publications.map(pub => `
        <div class="publication-item">
            <h3 class="publication-title"><a href="${pub.link}" target="_blank" rel="noopener">${pub.title}</a></h3>
            <div class="publication-meta">${pub.authors} — ${pub.venue}, ${pub.year}</div>
            <p class="publication-summary">${pub.summary}</p>
        </div>
    `).join('');
}

// Render Nav Brand
function renderNavBrand() {
    const navBrand = document.getElementById('nav-brand');
    if (navBrand) navBrand.textContent = portfolioData.profile.name;
}

// Render Hero (Top Section)
function renderHero() {
    const heroName = document.getElementById('hero-name');
    const heroTitle = document.getElementById('hero-title');
    const heroTagline = document.getElementById('hero-tagline');
    
    if (heroName) heroName.textContent = portfolioData.profile.name;
    if (heroTitle) heroTitle.textContent = portfolioData.profile.title;
    if (heroTagline) heroTagline.textContent = portfolioData.profile.tagline;
}

// Render Social Links
function renderSocial() {
    const socialLinks = document.getElementById('social-links');
    const social = portfolioData.profile.social;

    socialLinks.innerHTML = `
        ${social.github ? `<a href="${social.github}" target="_blank" aria-label="GitHub" rel="noopener noreferrer"><i class="fab fa-github"></i></a>` : ''}
        ${social.linkedin ? `<a href="${social.linkedin}" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>` : ''}
        ${social.medium ? `<a href="${social.medium}" target="_blank" aria-label="Medium" rel="noopener noreferrer"><i class="fab fa-medium"></i></a>` : ''}
    `;
}

// Render About Section
function renderAbout() {
    const aboutText = document.getElementById('about-text');
    const paragraphs = portfolioData.profile.about
        .map(paragraph => `<p>${paragraph}</p>`)
        .join('');
    aboutText.innerHTML = paragraphs;
}

// Render Experience Section
function renderExperience() {
    const experienceList = document.getElementById('experience-list');
    const experiences = portfolioData.experience;

    experienceList.innerHTML = experiences.map(exp => {
        const descriptions = Array.isArray(exp.description) 
            ? `<ul>${exp.description.map(item => `<li>${item}</li>`).join('')}</ul>`
            : `<p>${exp.description}</p>`;

        // Extract technologies if they exist
        const tags = exp.tags || [];
        const tagsHTML = tags.length > 0 
            ? `<div class="experience-tags">${tags.map(tag => `<span class="experience-tag">${tag}</span>`).join('')}</div>`
            : '';

        return `
            <div class="experience-item">
                <div class="experience-header">
                    <div class="experience-date">${exp.date}</div>
                </div>
                <h3 class="experience-title">${exp.title}</h3>
                <div class="experience-company">${exp.company}${exp.location ? ` • ${exp.location}` : ''}</div>
                <div class="experience-description">
                    ${descriptions}
                </div>
                ${tagsHTML}
            </div>
        `;
    }).join('');
}

// Render Projects Section
function renderProjects() {
    const projectsList = document.getElementById('projects-list');
    const projects = portfolioData.projects;

    projectsList.innerHTML = projects.map(project => {
        const tags = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
        
        // Build project links
        let links = '';
        if (project.links) {
            if (project.links.github) {
                links += `<a href="${project.links.github}" class="project-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <i class="fab fa-github"></i>
                </a>`;
            }
            if (project.links.live) {
                links += `<a href="${project.links.live}" class="project-link" target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                    <i class="fas fa-arrow-up-right-from-square" style="font-size: 18px;"></i>
                </a>`;
            }
            if (project.links.description) {
                links += `<a href="${project.links.description}" class="project-link" onclick="loadProjectDetail('${project.links.description}'); return false;" aria-label="View Details">
                    <i class="fas fa-info-circle"></i>
                </a>`;
            }
        }

        return `
            <div class="project-item" ${project.links && project.links.description ? `data-demo="${project.links.description}"` : ''}>
                <div class="project-image">
                    ${project.image ? `<img src="${project.image}" alt="${project.title}">` : `<span class="project-icon">${project.icon || '📦'}</span>`}
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">${tags}</div>
                    ${links ? `<div class="project-links">${links}</div>` : ''}
                </div>
            </div>
        `;
    }).join('');

    // Add click event listeners to project cards
    document.querySelectorAll('.project-item[data-demo]').forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't trigger if clicking on a link
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                return;
            }
            const demoLink = card.getAttribute('data-demo');
            if (demoLink) {
                loadProjectDetail(demoLink);
            }
        });
    });
}

// Render Skills Section
function renderSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    const skills = portfolioData.skills;

    skillsGrid.innerHTML = Object.entries(skills).map(([category, data]) => {
        const skillItems = data.items.map(skill => 
            `<div class="skill-item">${skill}</div>`
        ).join('');

        return `
            <div class="skill-category">
                <h3 class="skill-category-title">
                    <i class="fas ${data.icon}"></i>
                    ${category}
                </h3>
                <div class="skill-list">
                    ${skillItems}
                </div>
            </div>
        `;
    }).join('');
}

// Render Footer
function renderFooter() {
    document.getElementById('footer-name').textContent = portfolioData.profile.name;
    document.getElementById('footer-text').textContent = 'Built with HTML, CSS & JavaScript';
}

// Load project detail - Navigate to new page
function loadProjectDetail(markdownFile) {
    // Extract project ID from markdown file path
    // e.g., "projects/warehouse-robot.md" -> "warehouse-robot"
    const projectId = markdownFile.replace('projects/', '').replace('.md', '');
    // Open project detail page in the same window
    window.location.href = `pages/projects.html?project=${projectId}`;
}

// Initialize scroll effects
function initScrollEffects() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');
    
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));

    // Add navbar background on scroll
    // const navbar = document.querySelector('.navbar');
    // window.addEventListener('scroll', () => {
    //     if (window.scrollY > 50) {
    //         navbar.style.background = 'rgba(10, 25, 47, 0.98)';
    //     } else {
    //         navbar.style.background = 'var(--navy)';
    //     }
    // });
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
    // Load portfolio data
    loadData();

    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Export functions for use in HTML
window.loadProjectDetail = loadProjectDetail;
