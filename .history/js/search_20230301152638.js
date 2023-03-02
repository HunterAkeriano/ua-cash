const searchInput = document.querySelector('#searchInput');
const searchBlock = document.querySelector('#searchBlock');

searchInput.addEventListener('input', () => {
  const searchText = searchInput.value.toLowerCase();
  const items = searchBlock.querySelectorAll('.item');

  items.forEach(item => {
    if (item.textContent.toLowerCase().includes(searchText)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });

  if (searchText.length === 0) {
    items.forEach(item => {
      item.style.display = '';
    });
  }
});