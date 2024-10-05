const apiKey = "bd5e378503939ddaee76f12ad7a97608";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

document.getElementById("getWeatherBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  if (city) {
    fetchWeather(city);
  }
});

function fetchWeather(city) {
  const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("cityName").textContent = data.name;
      document.getElementById("temperature").textContent = `${Math.round(
        data.main.temp
      )}°C`;
      document.getElementById("description").textContent =
        data.weather[0].description;
      const iconCode = data.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
      const weatherIcon = document.getElementById("weatherIcon");
      weatherIcon.src = iconUrl;
      weatherIcon.style.display = "block";
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}
