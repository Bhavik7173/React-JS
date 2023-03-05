let API_KEY = "cdac7e950841e2eff0329c52d571115b"
let baseurl = "https://api.openweathermap.org/data/2.5/weather?";

function readWeatherData(city) {
    let url = baseurl + "q=" + city + "&appid=" + API_KEY;
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => disp(data))
        .catch(err => console.log(err))
}
function disp(data)
{

    console.log(data)
    document.getElementById("lat").innerHTML = "Latitute : "+data['coord']['lat']
    document.getElementById("lon").innerHTML = "Longitude : "+data['coord']['lon']
    document.getElementById("temp").innerHTML = "Tempreture : "+data['main']['temp']
    document.getElementById("min_temp").innerHTML = "Min Temp : "+data['main']['temp_min']
    document.getElementById("max_temp").innerHTML = "Max Temp : "+data['main']['temp_max']
    document.getElementById("wind_speed").innerHTML = "Wind Speed : "+data['wind']['speed']
    document.getElementById("type").innerHTML = "System Type : "+data['sys']['type']
   
}
function showData() {
    let city = document.getElementById("city_name").value;
    readWeatherData(city);
}