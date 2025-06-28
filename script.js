// Variables globales
const gallery = document.getElementById('gallery');
const cards = document.querySelectorAll('.card');
const filterBtns = document.querySelectorAll('.filter-btn');
const viewBtns = document.querySelectorAll('.view-btn');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeBtn = document.querySelector('.close');

// Filtrado por categorías
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Actualizar botón activo
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const filter = btn.dataset.filter;
    filterCards(filter);
  });
});

// Cambio de vista
viewBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    viewBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const view = btn.dataset.view;
    gallery.classList.toggle('list-view', view === 'list');
  });
});

// Búsqueda
searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  filterCardsBySearch(searchTerm);
});

// Función de filtrado
function filterCards(category) {
  cards.forEach(card => {
    const cardCategories = card.dataset.category;
    const shouldShow = category === 'all' || cardCategories.includes(category);
    
    if (shouldShow) {
      card.style.display = 'block';
      card.style.animation = 'slideUp 0.4s ease forwards';
    } else {
      card.style.display = 'none';
    }
  });
}

// Función de búsqueda
function filterCardsBySearch(searchTerm) {
  cards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    const description = card.querySelector('.card-description').textContent.toLowerCase();
    const shouldShow = title.includes(searchTerm) || description.includes(searchTerm);
    
    if (shouldShow) {
      card.style.display = 'block';
      card.style.animation = 'slideUp 0.4s ease forwards';
    } else {
      card.style.display = 'none';
    }
  });
}

// Modal
cards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.dataset.title;
    const description = card.querySelector('.card-description').textContent;
    const imgSrc = card.querySelector('img').src;
    
    // Crear contenido del modal
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
      <img src="${imgSrc}" alt="${title}" style="width: 100%; height: auto;" />
      <div style="padding: 2rem; text-align: center; color: white; background: #111;">
        <h2 style="margin-bottom: 1rem; letter-spacing: 2px; text-transform: uppercase;">${title}</h2>
        <p style="opacity: 0.8; line-height: 1.5;">${description}</p>
      </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

// Cerrar modal
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Animación inicial
window.addEventListener('load', () => {
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 100);
  });
});