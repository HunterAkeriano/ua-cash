
// карточка
const inputField = document.getElementById('card-inp');
const output = document.getElementById('card-span');

// валидированная карточка


// вычесление процентов и записание их в кнопку
inputField.addEventListener('input', () => {
    const value = inputField.value.trim();
    if (value) {
      let sum = (+value / 100) * 2.5;
      let sumres = +value + sum + 3;
      output.textContent = `${sumres.toFixed(2)} грн`;
      userSpan.textContent = `${sumres.toFixed(2)} грн`;
    } else {
      output.textContent = '0 грн';
      userSpan.textContent = '0 грн';
    }
  });

//  валидацию на карточку
const input = document.getElementById('card-card'),
numbers = /[0-9]/,
 regExp = /[0-9]{4}/

            // добавляем слушатель события на инпут
        input.addEventListener("input",(ev)=>{
            // не позволяем ввести ничего, кроме цифр 0-9, ограничиваем размер поля 19-ю символами
            if( ev.inputType === "insertText" && !numbers.test(ev.data) || input.value.length > 19){
                input.value = input.value.slice(0, input.value.length - 1)
                return
            }

            // обеспечиваем работу клавиш "backspace","delete"
            let value = input.value
            if( ev.inputType === "deleteContentBackward" && regExp.test(value.slice(-4)) ){
                input.value = input.value.slice(0, input.value.length - 1)
                return
            }

            // добавяем пробел после 4 цифр подряд
            if( regExp.test(value.slice(-4)) && value.length < 19){
                input.value += " "
            }
        })
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


          carresult.addEventListener("input",(ev)=>{
            // не позволяем ввести ничего, кроме цифр 0-9, ограничиваем размер поля 19-ю символами
            if( ev.inputType === "insertText" && !numbers.test(ev.data) || carresult.value.length > 19){
                carresult.value = carresult.value.slice(0, input.value.length - 1)
                return
            }

            // обеспечиваем работу клавиш "backspace","delete"
            let value = carresult.value
            if( ev.inputType === "deleteContentBackward" && regExp.test(value.slice(-4)) ){
                carresult.value = carresult.value.slice(0, carresult.value.length - 1)
                return
            }

            // добавяем пробел после 4 цифр подряд
            if( regExp.test(value.slice(-4)) && value.length < 19){
                carresult.value += " "
            }
        })

//Номер карты получателя


usersCard.addEventListener("input",(ev)=>{
    // не позволяем ввести ничего, кроме цифр 0-9, ограничиваем размер поля 19-ю символами
    if( ev.inputType === "insertText" && !numbers.test(ev.data) || usersCard.value.length > 19){
        usersCard.value = usersCard.value.slice(0, usersCard.value.length - 1)
        return
    }

    // обеспечиваем работу клавиш "backspace","delete"
    let value = usersCard.value
    if( ev.inputType === "deleteContentBackward" && regExp.test(value.slice(-4)) ){
        usersCard.value = usersCard.value.slice(0, usersCard.value.length - 1)
        return
    }

    // добавяем пробел после 4 цифр подряд
    if( regExp.test(value.slice(-4)) && value.length < 19){
        usersCard.value += " "
    }
})

const dateCard = document.querySelector('.date-card');

dateCard.addEventListener('input',   () => {
    if (dateCard.value.length > 5) {
        dateCard.value = dateCard.value.slice(0, 5);
    }
  });


//   Валидация cvv
const cvvust = document.querySelector('.card-cvv');
cvvust.addEventListener('input',   () => {
    if (cvvust.value.length > 3) {
        cvvust.value = cvvust.value.slice(0, 3);
    }
  });




//   Валидация карты телефона

const cardPhoneUser = document.querySelector('.card-phone');
cardPhoneUser.addEventListener("input",(ev)=>{
    // не позволяем ввести ничего, кроме цифр 0-9, ограничиваем размер поля 19-ю символами
    if( ev.inputType === "insertText" && !numbers.test(ev.data) || cardPhoneUser.value.length > 19){
        cardPhoneUser.value = cardPhoneUser.value.slice(0, cardPhoneUser.value.length - 1)
        return
    }

    // обеспечиваем работу клавиш "backspace","delete"
    let value = cardPhoneUser.value
    if( ev.inputType === "deleteContentBackward" && regExp.test(value.slice(-4)) ){
        cardPhoneUser.value = cardPhoneUser.value.slice(0, cardPhoneUser.value.length - 1)
        return
    }

    // добавяем пробел после 4 цифр подряд
    if( regExp.test(value.slice(-4)) && value.length < 19){
        cardPhoneUser.value += " "
    }
})



let datePhone = document.querySelector('.date-phone');
datePhone.addEventListener('input',   () => {
    if (datePhone.value.length > 5) {
        datePhone.value = datePhone.value.slice(0, 5);
    }
  });


const phoneCVV = document.querySelector('.phone-cvv');
phoneCVV.addEventListener('input',   () => {
    if (phoneCVV.value.length > 3) {
        phoneCVV.value = phoneCVV.value.slice(0, 3);
    }
  });



