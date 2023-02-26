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
inputOne.addEventListener('input', () => {
    if (!inputOne.value) {
      spanOne.textContent = "0 ₴";
      return;
    }
    let sum = (inputOne.value / 100) * 2.5;
    let sumres = +inputOne.value + sum + 3;
    spanOne.textContent = `${sumres.toFixed(2)} ₴`;
  });

// ЗСУ
const zsuInput = document.querySelector('.zsu-input');
const spanZsu = document.querySelector('.span-zsu');
zsuInput.addEventListener('input', () => {
    let inputValue = zsuInput.value;
    if (!inputValue) {
      spanZsu.textContent = '0 ₴';
      return;
    }
    
    let sum = (inputValue / 100) * 2.5;
    let sumRes = +inputValue + sum + 3;
    spanZsu.textContent = `${sumRes.toFixed(2)} ₴`;
  });

// карта на карту

// cspan card
const spanCard = document.querySelector('.card-card');
const inpCard = document.querySelector('.inp-card');
inpCard.addEventListener('input', ()=>{
    let sum = Math.round((inpCard.value /100 ) * 4);
    let sumres = +inpCard.value +  sum;
    spanCard.textContent = `${sumres} грн`;
})

// реквезиты
const reqInput = document.querySelector('.inp-req');
const spanReq = document.querySelector('.span-req');
reqInput.addEventListener('input', ()=>{
    let sum = Math.round((reqInput.value /100 ) * 4);
    let sumres = +reqInput.value +  sum;
    spanReq.textContent = `${sumres} грн`;
})