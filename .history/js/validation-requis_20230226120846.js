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
    linkSpan.textContent = `${requisInpt.value} грн`;
});

requisInpt.addEventListener('input', () => {
    let sum = Math.round((requisInpt.value /100 ) * 4);
    let sumres = +requisInpt.value +  sum;
    linkSpan.textContent = `${sumres} грн`;
  });

// number phone
const numberPhone = document.querySelector('.requis-phone');
numberPhone.addEventListener('input',   () => {
    if (numberPhone.value.length > 12) {
        numberPhone.value = numberPhone.value.slice(0, 3);
    }
  });  
