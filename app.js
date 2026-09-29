// ==========================================
// 1. DATOS DEL PORTAFOLIO
// ==========================================
const portfolioData = {
    name: "Astrit Fernanda Luza Grajeda",
    description: "Soy una estudiante de Ingeniería de Sistemas que está terminando su carrera. Tengo un enfoque que combina la creatividad con las mejores prácticas de desarrollo para entregar resultados excepcionales.",
    about: {
        location: "Cusco, Perú",
        email: "023100613i@uandina.edu.pe",
        experience: "Begginer",
        availability: "Disponible"
    },
    projects: [
        {
            title: "E-commerce Platform",
            description: "Plataforma de comercio electrónico con carrito de compras, pagos y panel de administración.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
            tags: ["React", "Node.js", "MongoDB"],
            link: "projects/ecommerce-platform.html"
        },
        {
            title: "Mobile App Design",
            description: "Aplicación móvil para descubrir restaurantes locales con recomendaciones personalizadas.",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
            tags: ["Flutter", "Firebase"],
            link: "projects/mobile-app-design.html"
        },
        {
            title: "Landing Page Fitness",
            description: "Landing page promocional para campaña de verano con formulario de registro.",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
            tags: ["Next.js", "Tailwind"],
            link: "projects/landing-page-fitness.html"
        },
        {
            title: "Dashboard Analytics",
            description: "Panel de control interactivo para visualización de datos y métricas empresariales.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            tags: ["Vue.js", "D3.js"],
            link: "projects/dashboard-analytics.html"
        }
    ],
    skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Node.js", level: 80 },
        { name: "MongoDB", level: 75 }
    ],
    contact: {
        email: "023100613i@uandina.edu.pe",
        phone: "+51 986195166",
        location: "Cusco, Perú"
    }
};

// ==========================================
// 2. FUNCIONES DE RENDERIZADO
// ==========================================

function renderBasicInfo() {
    const heroName = document.getElementById('hero-name');
    const heroDesc = document.getElementById('hero-desc');
    const aboutDesc = document.getElementById('about-desc');
    
    if (heroName) heroName.textContent = portfolioData.name;
    if (heroDesc) heroDesc.textContent = portfolioData.description;
    if (aboutDesc) aboutDesc.textContent = portfolioData.description;

    const aboutInfoContainer = document.getElementById('about-info-container');
    if (aboutInfoContainer) {
        aboutInfoContainer.innerHTML = `
            <div class="about-item">
                <div class="label">📍 Ubicación</div>
                <div class="value">${portfolioData.about.location}</div>
            </div>
            <div class="about-item">
                <div class="label">📧 Email</div>
                <div class="value">${portfolioData.about.email}</div>
            </div>
            <div class="about-item">
                <div class="label">💼 Experiencia</div>
                <div class="value">${portfolioData.about.experience}</div>
            </div>
            <div class="about-item">
                <div class="label">✅ Disponibilidad</div>
                <div class="value" style="color:#22c55e">${portfolioData.about.availability}</div>
            </div>
        `;
    }
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    let html = '';
    portfolioData.projects.forEach(project => {
        const tagsHTML = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
        html += `
            <a href="${project.link}" class="card">
                <img src="${project.image}" alt="${project.title}"/>
                <div class="card-body">
                    <h3 class="card-title">${project.title}</h3>
                    <p class="card-text">${project.description}</p>
                    <div>${tagsHTML}</div>
                    <div style="margin-top:1rem; color:#2563eb; font-weight:500">Ver detalles →</div>
                </div>
            </a>
        `;
    });
    container.innerHTML = html;
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;

    let html = '';
    portfolioData.skills.forEach(skill => {
        html += `
            <div class="skill-item">
                <div class="skill-header">
                    <span>${skill.name}</span>
                    <span>${skill.level}%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-fill" style="width:${skill.level}%"></div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function renderContact() {
    const container = document.getElementById('contact-info-container');
    if (!container) return;

    container.innerHTML = `
        <h3>Información de Contacto</h3>
        <div class="contact-item">
            <div class="contact-icon">✉️</div>
            <div>
                <div style="font-size:0.8rem; color:#6b7280">Email</div>
                <div style="font-weight:600">${portfolioData.contact.email}</div>
            </div>
        </div>
        <div class="contact-item">
            <div class="contact-icon">📞</div>
            <div>
                <div style="font-size:0.8rem; color:#6b7280">Teléfono</div>
                <div style="font-weight:600">${portfolioData.contact.phone}</div>
            </div>
        </div>
        <div class="contact-item">
            <div class="contact-icon">📍</div>
            <div>
                <div style="font-size:0.8rem; color:#6b7280">Ubicación</div>
                <div style="font-weight:600">${portfolioData.contact.location}</div>
            </div>
        </div>
    `;
}

// ==========================================
// 3. INTERACTIVIDAD
// ==========================================

function setupMobileMenu() {
    const btn = document.getElementById('mobile-btn');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', () => menu.classList.toggle('open'));
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => menu.classList.remove('open'));
    });
}

function setupForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        alert(`¡Gracias ${name}! Tu mensaje ha sido enviado (simulación).`);
        form.reset();
    });
}

function setupYear() {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// ==========================================
// 4. INICIALIZACIÓN
// ==========================================

function init() {
    console.log("✅ Portafolio inicializado correctamente");
    renderBasicInfo();
    renderProjects();
    renderSkills();
    renderContact();
    setupMobileMenu();
    setupForm();
    setupYear();
}

// Ejecuta cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
