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
dateCard.forEach((date) =>{
    
})






