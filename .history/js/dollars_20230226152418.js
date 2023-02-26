// Создаем объект XMLHttpRequest
let xhr = new XMLHttpRequest();

// Открываем GET-запрос на API НБУ
xhr.open('GET', 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json', true);

// Отправляем запрос
xhr.send();

// Обрабатываем ответ
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // Парсим ответ в формате JSON
    let response = JSON.parse(xhr.responseText);

    // Находим значения курса валют
    let usd_buy = response.find(item => item.cc === 'USD').rate_buy.toFixed(2);
    let usd_sell = response.find(item => item.cc === 'USD').rate_sell.toFixed(2);
    let eur_buy = response.find(item => item.cc === 'EUR').rate_buy.toFixed(2);
    let eur_sell = response.find(item => item.cc === 'EUR').rate_sell.toFixed(2);
    let rub_buy = response.find(item => item.cc === 'RUB').rate_buy.toFixed(4);
    let rub_sell = response.find(item => item.cc === 'RUB').rate_sell.toFixed(4);

    // Выводим значения на HTML страницу
    document.getElementById("usd-buy").innerHTML = usd_buy;
    document.getElementById("usd-sell").innerHTML = usd_sell;
    document.getElementById("eur-buy").innerHTML = eur_buy;
    document.getElementById("eur-sell").innerHTML = eur_sell;
    document.getElementById("rub-buy").innerHTML = rub_buy;
    document.getElementById("rub-sell").innerHTML = rub_sell;
  }
}

  function displayTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('date-date-date').textContent = timeString;
  }
  
  setInterval(displayTime, 1000);
