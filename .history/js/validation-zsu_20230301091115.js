
 //Вычесление суммы

const zsuSum = document.querySelector('.zsu-input-sum');
const zsuSpan = document.querySelector('.zsu-span');

zsuSum.addEventListener('input', () => {
    const value = zsuSum.value.trim();
    if (value) {
      let sum = (+value / 100) * 2.5;
      let sumres = +value + sum + 3;
      zsuSpan.textContent = `${sumres.toFixed(2)} ₴`;
    } else {
      zsuSpan.textContent = '0 ₴';
    }
  });

const zsuBtn = document.querySelector('.zsu-btn');
const inpZsu = document.querySelector('.inp-zsu');
const resultZsu = document.querySelector('.result-zsu');
const zsuSums = document.querySelector('.zsu-sum');


zsuBtn.addEventListener('click',  ()=>{
    inpZsu.value = inputZsu.value;
    zsuSums.value = zsuSum.value;
    resultZsu.textContent = `${zsuSums.value} ₴`;
});

zsuSums.addEventListener('input', () => {
    const value = zsuSums.value.trim();
    if (value) {
      let sum = (+value / 100) * 2.5;
      let sumres = +value + sum + 3;
      resultZsu.textContent = `${sumres.toFixed(2)} ₴`;
    } else {
      resultZsu.textContent = '0 ₴';
    }
  });



