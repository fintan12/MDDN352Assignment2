$( document ).ready(function() {
      $(".button-collapse").sideNav({
      menuWidth: 200, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
    });



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

        console.log(result.main.temp);
  }});




  $('.output-text').html("Range has been set to" + input);
}
