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
  const value = phoneSum.value.trim();
  if (value) {
    let sum = (+value / 100) * 2.5;
    let sumres = +value + sum + 3;
    phoneSpan.textContent = `${sumres.toFixed(2)} ₴`;
    userSpans.textContent = `${sumres.toFixed(2)} ₴`;
  } else {
    phoneSpan.textContent = '0 ₴';
    userSpans.textContent = '0 ₴';
  }
});

// клик на перенос на телефон
const btnPhone = document.querySelector('.btn-phone');
// инпуты  в нижней форме
const userInput = document.querySelector('.user-inst');
const userSpans = document.querySelector('.user-span-phone');
const userPhoneSum = document.querySelector('.user-phone-sum');

btnPhone.addEventListener('click', ()=>{
    userInput.value = phoneInput.value;
    userSpans.textContent = `${phoneSum.value} ₴`;
    userPhoneSum.value = phoneSum.value;
});
userPhoneSum.addEventListener('input', () => {
  const value = userPhoneSum.value.trim();
  if (value) {
    let sum = (+value / 100) * 2.5;
    let sumres = +value + sum + 3;
    userSpans.textContent = `${sumres.toFixed(2)} ₴`;
  } else {
    userSpans.textContent = '0 ₴';
  }
});