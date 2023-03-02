// Свайпер отображение
// отображение суммы карточки
const inputNumber = document.getElementById("card-card");
const outputSpan = document.getElementById("card-span");

inputNumber.addEventListener("input", () => {
  const inputValue = parseFloat(inputNumber.value);
  const outputValue = inputValue * 1.025; // добавляем 2.5%
  outputSpan.innerHTML = outputValue.toFixed(2); // выводим с округлением до 2 знаков после запятой
});