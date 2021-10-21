// converts kelvin to fahranheit
function conversion(kelvin){ 
    fahrenheit = ((1.8)*(kelvin-273))+32
    return fahrenheit
}

let apiKey = '41cd67d04c85d544ed2b306b0e33913c'
let responded = null

// when citySubmit is clicked, user's entry of city and country code will be sent to weather service and retreieves temperature 
document.getElementById("citySubmit").addEventListener('click', function(event) {
    var req = new XMLHttpRequest();
    let city = document.getElementById('cityInput').value; 
    let country = document.getElementById('countryInput').value; 
    req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&appid=" + apiKey, false);
    req.send(null);
    let response = JSON.parse(req.responseText);
    let temperature = response.main.temp;  // temperature in kelvin 
    console.log(temperature)
    let fahren = conversion(temperature)  // temperature converted to fahrenheit
    document.getElementById('weatherResults').textContent = Math.round(fahren)
    event.preventDefault();
});

// when citySubmit is clicked, user's entry of zipcode and country code will be sent to weather service and retreieves temperature 
document.getElementById("zipcodeSubmit").addEventListener('click', function(event) {
    var req = new XMLHttpRequest();
    let zipcode = document.getElementById('zipInput').value; 
    let country = document.getElementById('countryInput2').value; 
    req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + zipcode + "," + country + "&appid=" + apiKey, false);
    req.send(null);
    let response = JSON.parse(req.responseText);
    let temperature = response.main.temp;   // temperature in kelvin 
    console.log(temperature)
    let fahren = conversion(temperature)  // temperature converted to fahrenheit
    document.getElementById('weatherResults').textContent = Math.round(fahren)
    event.preventDefault();
});