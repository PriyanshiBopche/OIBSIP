function convertTemperature() {
  var inputTemperature = document.getElementById("temperatureInput").value;
  var inputUnit = document.getElementById("temperatureUnit").value;

  if (inputUnit == "celsius") {
    var celsius = parseFloat(inputTemperature);
    var fahrenheit = (celsius * 9 / 5) + 32;
    var kelvin = celsius + 273.15;
  } else if (inputUnit == "fahrenheit") {
    var fahrenheit = parseFloat(inputTemperature);
    var celsius = (fahrenheit - 32) * 5 / 9;
    var kelvin = (fahrenheit + 459.67) * 5 / 9;
  } else if (inputUnit == "kelvin") {
    var kelvin = parseFloat(inputTemperature);
    var celsius = kelvin - 273.15;
    var fahrenheit = (kelvin * 9 / 5) - 459.67;
  }

  document.getElementById("celsiusOutput").innerHTML = celsius.toFixed(2) + " &#8451;";
  document.getElementById("fahrenheitOutput").innerHTML = fahrenheit.toFixed(2) + " &#8457;";
  document.getElementById("kelvinOutput").innerHTML = kelvin.toFixed(2) + " K";
}
