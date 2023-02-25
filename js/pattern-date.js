const dateInput = document.querySelectorAll('.card-date');

dateInput.forEach((input)=>{
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
        // Ограничиваем длину строки 10 символами (дата в формате dd/mm/yyyy)
        this.value = value.slice(0, 10);
      });
})
