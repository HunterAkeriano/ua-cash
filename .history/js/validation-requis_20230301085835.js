const requisInput = document.querySelector('.requis-input');
const requisSpan = document.querySelector('.requis-span');

requisInput.addEventListener('input', () => {
  const value = requisInput.value.trim();
  if (value) {
    let sum = (+value / 100) * 2.5;
    let sumres = +value + sum + 3;
    requisSpan.textContent = `${sumres.toFixed(2)} ₴`;
  } else {
    requisSpan.textContent = '0 ₴';
  }
});

// кнопка
const requisBtn = document.querySelector('.requis-btn');

const requisInpt = document.querySelector('.inp-last-sim');
const requisBottomBtn = document.querySelector('.link-btn');
const linkSpan = document.querySelector('.link-span');

requisBtn.addEventListener('click',  ()=>{
    requisInpt.value = requisInput.value;
    linkSpan.textContent = `${requisInpt.value} ₴`;
});

requisInpt.addEventListener('input', () => {
  const value = requisInpt.value.trim();
  if (value) {
    let sum = (+value / 100) * 2.5;
    let sumres = +value + sum + 3;
    linkSpan.textContent = `${sumres.toFixed(2)} ₴`;
  } else {
    linkSpan.textContent = '0 ₴';
  }
});

// number phone
const numberPhone = document.querySelector('.requis-phone');
numberPhone.addEventListener('input',   () => {
    if (numberPhone.value.length > 12) {
        numberPhone.value = numberPhone.value.slice(0, 3);
    }
  });
  
  
// валидация карточки


// валидация срока действия
const requisDate = document.querySelector('.requsdate');
requisDate.addEventListener('input',   () => {
  if (requisDate.value.length > 5) {
    requisDate.value = requisDate.value.slice(0, 5);
  }
});


// cvv
const requisCvv = document.querySelector('.requiscvv');
requisCvv.addEventListener('input',   () => {
    if (requisCvv.value.length > 3) {
      requisCvv.value = requisCvv.value.slice(0, 3);
    }
  });