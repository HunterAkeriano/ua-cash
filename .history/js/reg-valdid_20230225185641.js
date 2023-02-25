// валидация всех инпутов карт
const inputCard = document.querySelectorAll('.reg-card'),
number = /[0-9]/,
regEx = /[0-9]{4}/

inputCard.forEach((input)=>{
    input.addEventListener("input", (ev)=>{
        // не позволяем ввести ничего, кроме цифр 0-9, ограничиваем размер поля 19-ю символами
        if( ev.inputType === "insertText" && !number.test(ev.data) || input.value.length > 19){
            input.value = input.value.slice(0, input.value.length - 1)
            return
        }

        // обеспечиваем работу клавиш "backspace","delete"
        let value = input.value
        if( ev.inputType === "deleteContentBackward" && regEx.test(value.slice(-4)) ){
            input.value = input.value.slice(0, input.value.length - 1)
            return
        }

        // добавяем пробел после 4 цифр подряд
        if( regEx.test(value.slice(-4)) && value.length < 19){
            input.value += " "
        }
    })
    
    
})


// валидация всех сроков действий карт

const dateCard = document.querySelectorAll('.srock-cart');
dateCard.forEach((date)=>{
    date.addEventListener('input',   () => {
        if (date.value.length > 5) {
            date.value = date.value.slice(0, 5);
        }
      });
})


// валидация на CVV
const cvvUser = document.querySelectorAll('.cvv');
cvvUser.forEach((cvv)=>{
    cvv.addEventListener('input',   () => {
        if (cvv.value.length > 3) {
            cvv.value = cvv.value.slice(0, 3);
        }
      });
})

// валидация сум инпутов
// первый инпут и кнопка
// мобилка
const inputOne = document.querySelector('.user-input-one');
const spanOne = document.querySelector('.span-one');
inputOne.addEventListener('input', ()=>{
    let sum = Math.round((inputOne.value /100 ) * 7);
    let sumres = +inputOne.value +  sum;
    spanOne.textContent = `${sumres} грн`;
})


// ЗСУ
const zsuInput = document.querySelector('.zsu-input');
const spanZsu = document.querySelector('.span-zsu');
zsuInput.addEventListener('input', ()=>{
    let sum = Math.round((zsuInput.value /100 ) * 7);
    let sumres = +zsuInput.value +  sum;
    spanZsu.textContent = `${sumres} грн`;
})

// карта на карту

// cspan card
const spanCard = document.querySelector('.card-card');
const inpCard = document.querySelector('.inp-card');
inpCard.addEventListener('input', ()=>{
    let sum = Math.round((inpCard.value /100 ) * 7);
    let sumres = +inpCard.value +  sum;
    spanCard.textContent = `${sumres} грн`;
})

// реквезиты
const reqInput = document.querySelector('.inp-req');
const spanReq = document.querySelector('.span-req');