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
})

