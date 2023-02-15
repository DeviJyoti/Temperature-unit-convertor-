function convertFromFahrenheit() {
  //convert Fahrenheit to Celsius
  var f = document.getElementById('f').value;
  var c = ((eval(f)-32)*5)/9;
  document.getElementById('c').value=c;

  // fahernheit to Kelvin
  var k = c+273.15;
    document.getElementById('k').value=k;
}

function convertFromCelsius() {
  //convert celsius to fahernheit
  var c = document.getElementById('c').value;
  var f = (eval(c)*9/5) +32;
  document.getElementById('f').value=f;

  //celsius to kelvin
  var k = eval(c)+273.15;
  document.getElementById('k').value=k;
}

function convertFromKelvin() {
  //convert kelvin to celsius
 var k = document.getElementById('k').value;
 var c = eval(k)-273.15;
 document.getElementById('c').value=c;
 //kelvin to fahernheit
 var f = (c * 9/5) + 32;
  document.getElementById('f').value=f;
}
