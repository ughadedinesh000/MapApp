
async function getWeather() {
  const city = document.getElementById("city").value.trim();
ta
    const respons
  const resultDiv = document.getElementById("result");
  const errorDiv = document.getElementById("error");

  const apiKey = "YOUR_API_KEY"; // Replace with your API key

  resultDiv.innerHTML = "";
  errorDiv.innerHTML = "";

 
  if (city === "") {
    errorDiv.innerHTML = "Please enter a city name.";
    return;
  }

  try {
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    
    const data = await response.json();

    if (data.cod !== 200) {
      errorDiv.innerHTML = "City not found!";
      return;
    }

    resultDiv.innerHTML = `
      <div class="weather-box">
        <h2>${data.name}, ${data.sys.country}</h2>
        <h3>${data.main.temp}°C</h3>
        <p><strong>Condition:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
      </div>
    `;

  } catch (error) {
    errorDiv.innerHTML = "Something went wrong. Try again!";
  }
}


document.getElementById("city").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    getWeather();
  }
});