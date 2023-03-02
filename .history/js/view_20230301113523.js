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
const phoneInput = document.querySelector('input[type="tel"]');

// Определяем шаблон номера телефона
const phonePattern = /^\+?[1-9]\d{1,14}$/;

// Добавляем обработчик события ввода данных в input
input.addEventListener('input', (event) => {
  // Получаем введенное значение из input
  const value = event.target.value;
  
  // Проверяем, соответствует ли значение шаблону номера телефона
  if (phonePattern.test(value)) {
    // Если да, то удаляем класс с ошибкой и добавляем класс с подтверждением
    event.target.classList.remove('invalid');
    event.target.classList.add('valid');
  } else {
    // Если нет, то удаляем класс с подтверждением и добавляем класс с ошибкой
    event.target.classList.remove('valid');
    event.target.classList.add('invalid');
  }
});
