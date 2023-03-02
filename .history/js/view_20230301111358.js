// Свайпер отображение
// отображение суммы карточки
const inputOne = document.querySelector('.input-cards');
const spanOne = document.querySelector('.card-span');
inputOne.addEventListener('input', sumVaule);
//   при клику отправляем все данные в основу

const btnCard = document.getElementById('btn-card');
// получаю второй инпут суммы и карточки
const card2 = document.querySelector('.user-cars');
const sum2 = document.querySelector('.cardsum');
const span2 = document.querySelector('.card-span-usr');
btnCard.addEventListener('click', ()=>{
    sum2.value = inputOne.value;
})

