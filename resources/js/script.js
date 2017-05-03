$( document ).ready(function() {
      $(".button-collapse").sideNav({
      menuWidth: 200, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
    });

function normalizeTemp() {
  var tempInput = $('#temp-input').val();
  tempInput = tempInput.sort();

  if (tempInput.length == 1) {
    switch(tempInput[0]) {
    case "1":
        return [0, 10];
        break;
    case "2":
        return [11, 20];
        break;
    default:
        return [21, 30];
    }
  } else {
    var firstNum = tempInput[0];
    var lastNum = tempInput[tempInput.length - 1];

    var firstNumRange, lastNumRange;

    switch(firstNum) {
    case "1":
        firstNumRange = [0, 10];
        break;
    case "2":
        firstNumRange = [11, 20];
        break;
    default:
        firstNumRange = [21, 30];
    }

    switch(lastNum) {
    case "1":
        lastNumRange = [0, 10];
        break;
    case "2":
        lastNumRange = [11, 20];
        break;
    default:
        lastNumRange = [21, 30];
    }

    var joinedRange = firstNumRange.concat(lastNumRange).sort();

    return [joinedRange[0], joinedRange[joinedRange.length - 1]]

  }
}

function normalizeHumidity() {
  var humidityInput = $('#humidity-input').val();
  humidityInput = humidityInput.sort();

  if (humidityInput.length == 1) {

    switch(humidityInput[0]) {
    case "1":
        return [0, 25];
        break;
    case "2":
        return [26, 50];
        break;
    case "3":
        return [51, 75];
        break;
    default:
        return [76, 100];
    }
  } else {
    var firstNum = humidityInput[0];
    var lastNum = humidityInput[humidityInput.length - 1];

    var firstNumRange, lastNumRange;

    switch(firstNum) {
    case "1":
        firstNumRange = [0, 25];
        break;
    case "2":
        firstNumRange = [26, 50];
        break;
    case "3":
        firstNumRange = [51, 75];
        break;
    default:
        firstNumRange = [76, 100];
    }

    switch(lastNum) {
    case "1":
        lastNumRange = [0, 25];
        break;
    case "2":
        lastNumRange = [26, 50];
        break;
    case "3":
        lastNumRange = [51, 75];
        break;
    default:
        lastNumRange = [76, 100];
    }

    var joinedRange = firstNumRange.concat(lastNumRange).sort();

    return [joinedRange[0], joinedRange[joinedRange.length - 1]]

  }
}

function normalizeWind() {
  var windInput = $('#wind-input').val();
  windInput = windInput.sort();

  if (windInput.length == 1) {

    switch(windInput[0]) {
    case "1":
        return [0, 5.5];
        break;
    case "2":
        return [5.6, 11.1];
        break;
    default:
        return [11.2, 16.6];
    }
  } else {
    var firstNum = windInput[0];
    var lastNum = windInput[windInput.length - 1];

    var firstNumRange, lastNumRange;

    switch(firstNum) {
    case "1":
        firstNumRange = [0, 5.5];
        break;
    case "2":
        firstNumRange = [5.6, 11.1];
        break;
    default:
        firstNumRange = [11.2, 16.6];
    }

    switch(lastNum) {
    case "1":
        lastNumRange = [0, 5.5];
        break;
    case "2":
        lastNumRange = [5.6, 11.1];
        break;
    default:
        lastNumRange = [11.2, 16.6];
    }

    var joinedRange = firstNumRange.concat(lastNumRange).sort();

    return [joinedRange[0], joinedRange[joinedRange.length - 1]]

  }
}

function checkTemp(currentTemp, tempRangeOne, tempRangeTwo) {
  if (currentTemp >= tempRangeOne && currentTemp <= tempRangeTwo) {
    return true;
  } else {
    return false;
  }
}

function checkHumidity(currentHumidity, humidityRangeOne, humidityRangeTwo) {
  if (currentHumidity >= humidityRangeOne && currentHumidity <= humidityRangeTwo) {
    return true;
  } else {
    return false;
  }
}

function checkWind(currentWind, windRangeOne, windRangeTwo) {
  if (currentWind >= windRangeOne && currentWind <= windRangeTwo) {
    return true;
  } else {
    return false;
  }
}

function getData() {
  var tempRange = normalizeTemp();
  var humidityRange = normalizeHumidity();
  var windRange = normalizeWind();

  $.ajax({url: "http://api.openweathermap.org/data/2.5/weather?q=Wellington&units=Metric&APPID=842002ec4742e8ab7d2032ec14f2fe8e", success: function(result){
        var currentTemp = result.main.temp;
        var currentHumidity = result.main.humidity;
        var currentWind = result.wind.speed;

        var tempResult = checkTemp(currentTemp, tempRange[0], tempRange[1]);
        var humidityResult = checkHumidity(currentHumidity, humidityRange[0], humidityRange[1]);
        var windResult = checkWind(currentWind, windRange[0], windRange[1]);


        if (tempResult && humidityResult && windResult) {
          $('.output').addClass('optimal-color');
        }
        else if (tempResult && humidityResult || tempResult && windResult || humidityResult && windResult) {
          $('.output').addClass('average-color');
        } else if (humidityResult || tempResult || windResult) {
          $('.output').addClass('average-color');
        }
        else {
          $('.output').addClass('dangerous-color');
        }

  }});
}

function iconRunning() {
  $("#iconChange").attr("src","resources/images/run.png");
}

function iconSailing() {
  $("#iconChange").attr("src","resources/images/sail.png");
}

function iconClimbing() {
  $("#iconChange").attr("src","resources/images/climb.png");
}

$(document).ready(function() {
   $('select').material_select();
 });
