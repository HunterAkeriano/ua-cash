let inputZsu = document.getElementById("bank-card-input"),
            number = /[0-9]/,
            regEx = /[0-9]{4}/

            // добавляем слушатель события на инпут
            inputZsu.addEventListener("input", (ev)=>{
            // не позволяем ввести ничего, кроме цифр 0-9, ограничиваем размер поля 19-ю символами
            if( ev.inputType === "insertText" && !number.test(ev.data) || inputZsu.value.length > 19){
                inputZsu.value = inputZsu.value.slice(0, inputZsu.value.length - 1)
                return
            }

            // обеспечиваем работу клавиш "backspace","delete"
            let value = inputZsu.value
            if( ev.inputType === "deleteContentBackward" && regEx.test(value.slice(-4)) ){
                inputZsu.value = inputZsu.value.slice(0, inputZsu.value.length - 1)
                return
            }

            // добавяем пробел после 4 цифр подряд
            if( regEx.test(value.slice(-4)) && value.length < 19){
                inputZsu.value += " "
            }
        })

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
      let sumres = +value + sum;
      resultZsu.textContent = `${sumres.toFixed(2)} ₴`;
    } else {
      resultZsu.textContent = '0 ₴';
    }
  });


  inpZsu.addEventListener("input", (ev)=>{
    // не позволяем ввести ничего, кроме цифр 0-9, ограничиваем размер поля 19-ю символами
    if( ev.inputType === "insertText" && !number.test(ev.data) || inpZsu.value.length > 19){
        inpZsu.value = inpZsu.value.slice(0, inpZsu.value.length - 1)
        return
    }

    // обеспечиваем работу клавиш "backspace","delete"
    let value = inpZsu.value
    if( ev.inputType === "deleteContentBackward" && regEx.test(value.slice(-4)) ){
        inpZsu.value = inpZsu.value.slice(0, inpZsu.value.length - 1)
        return
    }

    // добавяем пробел после 4 цифр подряд
    if( regEx.test(value.slice(-4)) && value.length < 19){
        inpZsu.value += " "
    }
})

