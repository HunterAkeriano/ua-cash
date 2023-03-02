// Свайпер отображение
// отображение суммы карточки
const inputOne = document.querySelector('.input-cards');
const spanOne = document.querySelector('.card-span');
inputOne.addEventListener('input', () => {
    if (!inputOne.value) {
      spanOne.textContent = "0 ₴";
      return;
    }
    let sum = (inputOne.value / 100) * 2.5;
    let sumres = +inputOne.value + sum + 3;
    spanOne.textContent = `${sumres.toFixed(2)} ₴`;
  });
//   при клику отправляем все данные в основу

const btnCard = document.getElementById('btn-card');
// получаю второй инпут суммы и карточки

const sum2 = document.querySelector('.cardsum');
const span2 = document.querySelector('.card-span-usr');
// получение перой карточки слайдера и карточки блока
const card2 = document.querySelector('.user-cars');
const card1 = document.querySelector('.cardcard');


btnCard.addEventListener('click', ()=>{
    sum2.value = inputOne.value;
    let sum = (inputOne.value / 100) * 2.5;
    let sumres = +inputOne.value + sum + 3;
    span2.textContent = `${sumres.toFixed(2)} ₴`;
    card2.value = card1.value;
})
// валидация блока карточки на вывод суммы

sum2.addEventListener('input', () => {
    if (!sum2.value) {
        span2.textContent = "0 ₴";
      return;
    }
    let sum = (sum2.value / 100) * 2.5;
    let sumres = +sum2.value + sum + 3;
    span2.textContent = `${sumres.toFixed(2)} ₴`;
  });


// переброска из свайпера телефона в блок телефона
// Получаем ссылку на HTML-элемент input
const phoneInput = document.querySelector('input[type="tel"]');

// Определяем максимальное количество символов в номере телефона
const maxLength = 13;

// Определяем переменную, которая будет хранить информацию о том, добавлен ли уже операторный код
let isOperatorCodeAdded = false;

// Добавляем обработчик события ввода данных в input
phoneInput.addEventListener('input', (event) => {
  // Получаем введенное значение из input
  let value = event.target.value;
  
  // Удаляем все символы, кроме цифр
  value = value.replace(/[^\d]/g, '');
  
  // Обрезаем значение до максимальной длины
  value = value.slice(0, maxLength);
  
  // Добавляем операторный код, если его еще не было добавлено
  if (!isOperatorCodeAdded) {
    value = '380' + value;
    isOperatorCodeAdded = true;
  }
  
  // Обновляем значение input
  event.target.value = value;
});