const categories = Array.from(new Set(products.map(product => product.category)));
const categoryFilter = document.getElementById('categoryFilter');
categories.forEach(category => {
  const option = document.createElement('option');
  option.value = category;
  option.textContent = category;
  categoryFilter.appendChild(option);
});

function filterProducts() {
const selectedCategory = document.getElementById('categoryFilter').value;
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
const cardCategory = card.getAttribute('data-category');
if (selectedCategory === 'all' || cardCategory === selectedCategory) {
  card.classList.remove('hidden');
} else {
  card.classList.add('hidden');
}
});
}