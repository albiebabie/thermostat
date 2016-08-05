$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemperature();

  function updateTemperature(){
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  $('#temperature-up').on('click', function(){
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function(){
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').click(function(){
    thermostat.resetTemp();
    updateTemperature();
  });

  $('#powersaving-on').click(function(){
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on')
    updateTemperature();
  });

  $('#powersaving-off').click(function(){
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  });

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,&appid=6b9d318fe42ee8c5f85ba016a32d5492&units=metric', function(data){
    $('#current-temperature').text(data.main.temp);
  });

  $('#select-city').submit(function(event){
    event.preventDefault();
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',&appid=6b9d318fe42ee8c5f85ba016a32d5492&units=metric', function(data){
      $('#current-temperature').text(data.main.temp);
    });
  });
  
});
