var valorEmCelsius = 33.55;
var nomeUser = "Beatriz";

var valorEmFahrenheit = (valorEmCelsius * 9/5) + 32;
var valorEmKelvin = (valorEmCelsius + 273.15);

valorEmFahrenheit = valorEmFahrenheit.toFixed([2]);
valorEmKelvin = valorEmKelvin.toFixed([2]);

alert("Olá," + nomeUser);
alert("Este é o conversor de temperaturas:");

alert(valorEmCelsius + " Celcius = " + valorEmFahrenheit + " Em Fahrenheit\n"+
    valorEmCelsius + " Celcius = " + valorEmKelvin +" Em Kelvin");