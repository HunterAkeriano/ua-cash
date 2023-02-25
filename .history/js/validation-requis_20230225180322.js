const requisInput = document.querySelector('.requis-input');
const requisSpan = document.querySelector('.requis-span');

requisInput.addEventListener('input', () => {
    let sum = Math.round((requisInput.value /100 ) * 4);
    let sumres = +requisInput.value +  sum;
    requisSpan.textContent = `${sumres} грн`;
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
