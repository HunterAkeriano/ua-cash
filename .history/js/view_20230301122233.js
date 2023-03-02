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


// валидация на номер телефона
const phoneInput = document.querySelectorAll('input[type="tel"]');
const maxLength = 12;
let isOperatorCodeAdded = false;
phoneInput.forEach((input) =>{
    input.addEventListener('input', (event) => {
        let value = event.target.value;
        value = value.replace(/[^\d]/g, '');
        value = value.slice(0, maxLength);
        
        if (!isOperatorCodeAdded) {
          value = '380' + value;
          isOperatorCodeAdded = true;
        }
        event.target.value = value;
      });
} )

// добавление результата из инпута в кнопку
const phoneSum = document.querySelector('.phone-sum');
const phoneSpan = document.querySelector('.phone-span');
phoneSum.addEventListener('input', () => {
    if (!phoneSum.value) {
        phoneSpan.textContent = "0 ₴";
      return;
    }
    let sum = (phoneSum.value / 100) * 2.5;
    let sumres = +phoneSum.value + sum + 3;
    phoneSpan.textContent = `${sumres.toFixed(2)} ₴`;
  });

// переброс данных в блок
const phoneSum2 = document.querySelector('.user-inst'),
phoneSum1 = document.querySelector('.phone-sum');
const phoneSpan2 = document.querySelector('.user-span-phone');

// кнопка
const btnPhone = document.querySelector('.btn-phone');

btnPhone.addEventListener('click', ()=>{
    phoneSum2.value = phoneSum1.value;
    let sum = (inputOne.value / 100) * 2.5;
    let sumres = +inputOne.value + sum + 3;
    span2.textContent = `${sumres.toFixed(2)} ₴`;
    card2.value = card1.value;
})