const menuItems = [
    { 
        id: 1, 
        name: "Strudel", 
        category: "entradas", 
        price: "$12", 
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Pescado fresco marinado en limón con cebolla, cilantro y ají limo."
    },
const menuItems = [
    { 
        id: 2, 
        name: "Pastel", 
        category: "entradas", 
        price: "$12", 
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Pescado fresco marinado en limón con cebolla, cilantro y ají limo."
    },
// DATOS DEL MENÚ
const menuItems = [
    { id: 1, name: "Ceviche", category: "entradas", price: "$12", image: "plato1.jpg" },
    { id: 2, name: "Lomo Saltado", category: "principales", price: "$18", image: "lomo-saltado.jpg" },
    { id: 3, name: "Tiramisú", category: "postres", price: "$8", image: "tiramisu.jpg" },
    // Agrega más platos aquí...
];

// FILTRADO DEL MENÚ
function displayMenuItems(category = 'all') {
    const menuContainers = document.querySelectorAll('.menu-items');
    
    menuContainers.forEach(container => {
        const containerCategory = container.dataset.category;
        if (category === 'all' || category === containerCategory) {
            container.innerHTML = '';
            const filteredItems = menuItems.filter(item => item.category === containerCategory);
            
            filteredItems.forEach(item => {
                container.innerHTML += `
                    <div class="menu-item">
                        <img src="img/${item.image}" alt="${item.name}">
                        <h3>${item.name} <span>${item.price}</span></h3>
                    </div>
                `;
            });
        }
    });
}

// SLIDER DE IMÁGENES (si lo implementas)
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

// FORMULARIO DE RESERVAS
document.getElementById('reserva-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Reserva enviada. ¡Gracias!');
    e.target.reset();
});

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(); // Carga el menú al inicio
    if (slides.length > 0) showSlide(0); // Inicia el slider si existe
});
function displayMenuItems(category = 'all') {
    const menuContainer = document.querySelector('.menu-items');
    
    // Limpiar el contenedor
    menuContainer.innerHTML = '';
    
    // Filtrar elementos según la categoría
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    // Mostrar mensaje si no hay elementos
    if (filteredItems.length === 0) {
        menuContainer.innerHTML = `
            <div class="no-items-message">
                <p>No hay elementos en esta categoría.</p>
            </div>
        `;
        return;
    }
    
    // Generar HTML para cada elemento del menú
    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.dataset.category = item.category;
        
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span>${item.price}</span>
            </div>
        `;
        
        menuContainer.appendChild(menuItem);
    });
}

// Función para manejar los botones de filtrado
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            button.classList.add('active');
            
            // Obtener la categoría del botón
            const category = button.dataset.category;
            
            // Mostrar los elementos de la categoría seleccionada
            displayMenuItems(category);
        });
    });
}

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(); // Carga todos los elementos al inicio
    setupFilterButtons(); // Configura los eventos de los botones de filtrado
});