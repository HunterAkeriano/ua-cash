// Свайпер отображение
// отображение суммы карточки
const inputOne = document.getElementById("card-card");
const spanOne = document.getElementById("card-span");

inputOne.addEventListener('input', () => {
    if (!inputOne.value) {
      spanOne.textContent = "0 ₴";
      return;
    }
    let sum = (inputOne.value / 100) * 2.5;
    let sumres = +inputOne.value + sum + 3;
    spanOne.textContent = `${sumres.toFixed(2)} ₴`;
  });
