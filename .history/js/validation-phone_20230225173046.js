// валидирую телефон для ввода
const phoneInput = document.querySelector('.phone-inp');
phoneInput.addEventListener('input',   () => {
    if (phoneInput.value.length > 12) {
        phoneInput.value = phoneInput.value.slice(0, 3);
    }
  });


//   перенос суммы в кнопку

const phoneSum = document.querySelector('.phone-sum');
const phoneSpan = document.querySelector('.phone-span');

phoneSum.addEventListener('input', () => {
    let sum = Math.round((phoneSum.value /100 ) * 7);
    let sumres = +phoneSum.value +  sum;
    phoneSpan.textContent = `${sumres} грн`;
    userSpans.textContent = `${sumres} грн`;
  });

// клик на перенос на телефон
const btnPhone = document.querySelector('.btn-phone');
// инпуты  в нижней форме
const userInput = document.querySelector('.user-inst');
const userSpans = document.querySelector('.user-span-phone');
const userPhoneSum = document.querySelector('.user-phone-sum');

btnPhone.addEventListener('click', ()=>{
    userInput.value = phoneInput.value;
    userSpans.textContent = `${phoneSum.value} грн`;
    userPhoneSum.value = phoneSum.value;
});
userPhoneSum.addEventListener('input', () => {
    let sum = Math.round((userPhoneSum.value /100 ) * 7);
    let sumres = +userPhoneSum.value +  sum;
    userSpans.textContent = `${sumres} грн`;
  });
