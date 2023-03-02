// Свайпер отображение
// отображение суммы карточки
const inputNumber = document.querySelector("cardcard");
const outputSpan = document.getElementById("outputSpan");

inputNumber.addEventListener("input", () => {
  const inputValue = parseFloat(inputNumber.value);
  const outputValue = inputValue * 1.025; // добавляем 2.5%
  outputSpan.textContent = outputValue.toFixed(2); // выводим с округлением до 2 знаков после запятой
});