
const inputArea = document.querySelector('.inputValue');
const inputButton = document.querySelector('.button');
const cityName = document.querySelector('.name');
const cityTemp = document.querySelector('.temp');
const cityMax = document.querySelector('.max');
const cityMin = document.querySelector('.min');
const cityDesc = document.querySelector('.desc');
const cityHumid = document.querySelector('.humid');
const cityPressure = document.querySelector('.pressure');
const cityWind = document.querySelector('.wind');
const cityWindDirection = document.querySelector('.windDirection');


inputButton.addEventListener('click', function(){

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputArea.value+'&appid=b5b939efc38b16a5fe861695c123ac2f')

    .then(response=> response.json())

    .then(data => {

        console.log(data);

        const tempValue = data['main']['temp'];

        const maxTemp = data['main']['temp_max'];

        const minTemp = data['main']['temp_min'];

        const nameValue = data['name'];

        const countryValue = data['sys']['country'];

        const descValue = data['weather'][0]['description'];

        const humidValue = data['main']['humidity'];

        const pressureVal = data['main']['pressure'];

        const windValue = data['wind']['speed'];

        cityName.innerHTML = "Location: " + nameValue + " - " + countryValue;

        cityTemp.innerHTML = "Current Temp: " + Math.floor(tempValue-272) + " Celsius";

        cityMax.innerHTML = "Max Temp: " + Math.floor(maxTemp-272) + " Celsius";

        cityMin.innerHTML = "Min Temp: " + Math.floor(minTemp-272) + " Celsius";

        cityHumid.innerHTML = "Humidity: " + humidValue + "%";

        cityPressure.innerHTML = "Pressure: " + pressureVal + "HG";

        cityWind.innerHTML = "Wind Speed: " + Math.floor(windValue) + "m/s";

        cityDesc.innerHTML = "Weather: " + descValue;

        inputArea.value ="";

    })

    .catch(err=> alert("Can not find a location ..."));


});