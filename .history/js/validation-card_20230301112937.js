//  валидацию на карточку
const input = document.querySelectorAll('.card-valid'),
numbers = /[0-9]/,
 regExp = /[0-9]{4}/
input.forEach((inputss) =>{
    inputss.addEventListener("input",(ev)=>{
        // не позволяем ввести ничего, кроме цифр 0-9, ограничиваем размер поля 19-ю символами
        if( ev.inputType === "insertText" && !numbers.test(ev.data) || inputss.value.length > 19){
            inputss.value = inputss.value.slice(0, inputss.value.length - 1)
            return
        }

        // обеспечиваем работу клавиш "backspace","delete"
        let value = inputss.value
        if( ev.inputType === "deleteContentBackward" && regExp.test(value.slice(-4)) ){
            inputss.value = inputss.value.slice(0, inputss.value.length - 1)
            return
        }

        // добавяем пробел после 4 цифр подряд
        if( regExp.test(value.slice(-4)) && value.length < 19){
            inputss.value += " "
        }
    })
});

// валидация даты
const dateCard = document.querySelectorAll('.date-card-all');
dateCard.forEach((input) =>{
    input.addEventListener('input', function() {
        let value = this.value;
        // Убираем все символы, кроме цифр
        value = value.replace(/\D/g, '');
        // Добавляем слэши в нужных местах
        if (value.length > 2) {
          value = value.slice(0, 2) + '/' + value.slice(2);
        }
        if (value.length > 5) {
          value = value.slice(0, 5) + '/' + value.slice(5);
        }
        // Ограничиваем длину строки 5 символами
        this.value = value.slice(0, 5);
      });
})

// валидация CVV кода
const allCvv = document.querySelectorAll('.all-cvv');

allCvv.forEach((cvv) => {
    cvv.addEventListener('input',   () => {
        if (cvv.value.length > 3) {
            cvv.value = cvv.value.slice(0, 3);
        }
      });
})

// валидация номера получателя





