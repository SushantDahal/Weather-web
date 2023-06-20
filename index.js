const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function getWeather(city) {
  var res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=93Y5PBPC3H2UWBWWP433VGUZ8`
  );
  var data = await res.json();
  console.log(data);
  document.querySelector(".celcius").innerHTML =
    Math.round(((data.currentConditions.temp - 32) * 5) / 9) + "°C";
  document.querySelector(".city").innerHTML = data.address;
  document.querySelector(".humidityP").innerHTML =
    data.currentConditions.humidity + "%";
  document.querySelector(".windS").innerHTML =
    data.currentConditions.windspeed + "km/h";

  searchBtn.addEventListener("click", () => {
    getWeather(searchInput.value);
  });
}

getWeather("Kathmandu");
