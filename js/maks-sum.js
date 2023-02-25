let maskSum = document.querySelectorAll('.max-sum');

maskSum.forEach((input) => {
    input.addEventListener('input', (e) => {
        let value = e.target.value;
        if(value > 5000){
            e.target.value = 5000;
        }
    })
})