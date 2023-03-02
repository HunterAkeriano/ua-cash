// Свайпер отображение
// отображение суммы карточки
const inputNumber = document.getElementById("card-card");
const outputSpan = document.getElementById("card-span");

inputNumber.addEventListener('input', () => {
    if (!inputNumber.value) {
        outputSpan.textContent = "0 ₴";
      return;
    }
   
    let sum = (inputNumber.value / 100) * 2.5;
    let sumres = +inputNumber.value + sum + 3;
    outputSpan.textContent = `${sumres.toFixed(2)} ₴`;
  });
  console.log(inputNumber)