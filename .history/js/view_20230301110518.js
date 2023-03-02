// Свайпер отображение
// отображение суммы карточки
const inputOne = document.querySelector('.input-cards');
const spanOne = document.querySelector('.span-one');
inputOne.addEventListener('input', () => {
    if (!inputOne.value) {
      spanOne.textContent = "0 ₴";
      return;
    }
    let sum = (inputOne.value / 100) * 2.5;
    let sumres = +inputOne.value + sum + 3;
    spanOne.textContent = `${sumres.toFixed(2)} ₴`;
  });
