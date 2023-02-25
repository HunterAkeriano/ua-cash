// Настройка данных для диаграмм
var data1 = {
    datasets: [{
      data: [10, 20, 30],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  };
  
  var data2 = {
    datasets: [{
      data: [25, 50, 75],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  };
  
  var data3 = {
    datasets: [{
      data: [15, 30, 45],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  };
  
  var data4 = {
    datasets: [{
      data: [5, 10, 15],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  };
  
  // Создание графиков и привязка данных
  var chart1 = new Chart(document.getElementById("chart1"), {
    type: 'pie',
    data: data1
  });
  
  var chart2 = new Chart(document.getElementById("chart2"), {
    type: 'pie',
    data: data2
  });
  
  var chart3 = new Chart(document.getElementById("chart3"), {
    type: 'pie',
    data: data3
  });
  
  var chart4 = new Chart(document.getElementById("chart4"), {
    type: 'pie',
    data: data4
  });
  