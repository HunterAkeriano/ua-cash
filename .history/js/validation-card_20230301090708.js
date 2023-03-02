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
})
            // добавляем слушатель события на инпут
       
        // карта пользователя
        let usersCard = document.querySelector('.user-cars');


        let userResult = document.querySelector('.cardsum');
        let carresult = document.querySelector('.cardresult');
        let sum = input.value;
        const button = document.getElementById("btn-card");
        button.addEventListener("click", (e) => {
            e.preventDefault();
            usersCard.value = input.value;
            userResult.value  = inputField.value
            
                        
        });

        let userSpan = document.querySelector('.card-span-usr');
        userResult.addEventListener('input', () => {
            const value = userResult.value.trim();
            if (value) {
              let sum = ((+value) / 100) * 2.5;
              let results = sum + 3;
              let result = +value + results;
              userSpan.textContent = `${result.toFixed(2)} ₴`;
            } else {
              userSpan.textContent = '0 ₴';
            }
          });


// валидация даты
const dateCard = document.querySelectorAll('.date-card-all')






