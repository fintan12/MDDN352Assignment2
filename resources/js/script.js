function getData() {
  var input = $('.input-range').val()

  $.ajax({url: "http://api.openweathermap.org/data/2.5/weather?q=Wellington&units=Metric&APPID=842002ec4742e8ab7d2032ec14f2fe8e", success: function(result){
        var currentTemp = result.main.temp;

        if (currentTemp > 0 && currentTemp < 10) {
          $('.output').addClass('dangerous-color');
        }
        else if (currentTemp > 9 && currentTemp < 20) {
          $('.output').addClass('average-color');
        }
  }});




  $('.output-text').html("Range has been set to" + input);
}
