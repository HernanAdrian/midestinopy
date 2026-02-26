document.addEventListener('DOMContentLoaded', () => {
    // --- Referencias DOM ---
    const locationFilter = document.getElementById('locationFilter');
    const typeFilter = document.getElementById('typeFilter');
    const propertiesGrid = document.getElementById('propertiesGrid');

    // --- Estado ---
    let currentProperties = [];

    // --- Inicialización ---
    init();

    function init() {
        // Cargar datos (asumiendo que propertiesData está global, cargado antes)
        if (window.propertiesData) {
            currentProperties = window.propertiesData.properties;
            populateLocationFilter();
            renderProperties(getFeaturedProperties(currentProperties)); // Mostrar destacadas al inicio
        } else {
            console.error('Error: properties-data.js no cargado.');
        }

        // Event Listeners
        if (document.querySelector('.search-btn')) {
            document.querySelector('.search-btn').addEventListener('click', handleSearch);
        }
    }

    // --- Funciones de Renderizado ---

    function renderProperties(propertiesToRender) {
        if (!propertiesGrid) return;

        propertiesGrid.innerHTML = '';

        if (propertiesToRender.length === 0) {
            propertiesGrid.innerHTML = '<p class="no-results">No encontramos propiedades con esos filtros. Intenta otra búsqueda.</p>';
            return;
        }

        propertiesToRender.forEach(property => {
            const card = createPropertyCard(property);
            propertiesGrid.appendChild(card);
        });
    }

    function createPropertyCard(property) {
        const article = document.createElement('article');
        article.className = 'property-card';

        // Imagen (stripping leading / for relative path compatibility)
        let imageSrc = 'assets/images/placeholders/default.jpg';
        if (property.images && property.images.length > 0) {
            imageSrc = property.images[0].replace(/^\//, '');
        }

        // Badge
        let badgeHtml = '';
        if (property.badge) {
            badgeHtml = `<div class="property-badge">${property.badge}</div>`;
        }

        // Features 
        let featuresHtml = '';
        if (property.capacity) featuresHtml += `<span>👥 ${property.capacity}</span>`;
        if (property.amenities.pool) featuresHtml += `<span>🏊 Piscina</span>`;
        if (property.amenities.grill) featuresHtml += `<span>🔥 Quincho</span>`;

        // URL (construcción robusta usando la lógica centralizada)
        const propertyUrl = window.propertiesData.getPropertyUrl(property);
        const typeLabel = property.type === 'quinta' ? 'Quinta' : property.type === 'cabana' ? 'Cabaña' : property.type === 'posada' ? 'Posada' : property.type === 'hotel' ? 'Hotel' : 'Alojamiento';

        article.innerHTML = `
            <div class="property-image-container">
                <img src="${imageSrc}" alt="${property.name} - ${typeLabel} en ${property.city} con piscina para alquiler" loading="lazy" width="634" height="422" decoding="async">
                ${badgeHtml}
            </div>
            <div class="property-content">
                <h3 class="property-title">${property.name}</h3>
                <p class="property-location">📍 ${property.city}</p>
                ${property.rating ? `<div class="property-rating">⭐ ${property.rating} (${property.reviews})</div>` : ''}
                <div class="property-features">
                    ${featuresHtml}
                </div>
                <div class="property-footer">
                    <div class="price">${property.priceRange || 'Consultar'}<span>/día</span></div>
                    <a href="${propertyUrl}" class="btn-card">Ver más →</a>
                </div>
            </div>
        `;

        return article;
    }

    // --- Funciones de Filtrado ---

    function populateLocationFilter() {
        if (!locationFilter || !window.propertiesData) return;

        const cities = window.propertiesData.getCitiesList();

        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            locationFilter.appendChild(option);
        });
    }

    function handleSearch() {
        if (!locationFilter || !typeFilter) return;

        const city = locationFilter.value;
        const type = typeFilter.value;

        let filtered = window.propertiesData.properties;

        if (city !== 'all') {
            filtered = filtered.filter(p => p.city === city);
        }

        if (type !== 'all') {
            filtered = filtered.filter(p => p.type === type);
        }

        renderProperties(filtered);

        // Scroll to results
        if (propertiesGrid) {
            propertiesGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // --- Helpers ---
    function getFeaturedProperties(props) {
        return props.filter(p => p.featured);
    }
});

// Exponer función global para scrollToProperties si se necesita en HTML inline
window.scrollToProperties = function () {
    const grid = document.getElementById('propertiesGrid');
    if (grid) {
        grid.scrollIntoView({ behavior: 'smooth' });
    }
};

// =============================================
// HAMBURGER MENU TOGGLE
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        // Toggle menu on click
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');

            // Update aria-expanded for accessibility
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);

            // Prevent body scroll when menu is open
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });

        // Close menu on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking on menu links
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
    }
});
