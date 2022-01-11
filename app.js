//Weather Class
class Weather{
  constructor(){
    // XHR api store in variable
    this.http = new XMLHttpRequest()

  }
// Weather class function
  getWeather(url, callback) {
    this.http.open('GET', url)
    this.http.onload = function() {
      // Conditional statment checks HTTP status 
      switch(this.status){
        case 200:
          callback(this.responseText)
          break
        default:
          callback(`Error: ${this.status}`)
      }
    }
    
    this.http.send()
  }
}

// Instantiate Weather Class constructor
const weather = new Weather()

weather.getWeather('https://api.openweathermap.org/data/2.5/weather?zip=43219,us&units=imperial&appid=cb6b5c6429136c2b6f23997e1d521411', weather => {
  // DOM Elements Selection
const cityName = document.getElementById('cityName'),
        cityTemp = document.getElementById('cityTemp'),
        description = document.getElementById('description'),
        tempHigh = document.getElementById('tempHigh'),
        tempLow = document.getElementById('tempLow'), 
        wind = document.getElementById('wind'),
        realFeel = document.getElementById('realFeel'),
        pressure = document.getElementById('pressure'),
        humid = document.getElementById('humidity'),
        currWeather = JSON.parse(weather);

  // Assign external data to DOM Elements
  cityName.textContent = currWeather.name
  cityTemp.textContent = parseInt(currWeather.main.temp) + '°'
  description.textContent = currWeather['weather'][0]['description']
  tempHigh.textContent = parseInt(currWeather.main.temp_max) + '°'
  tempLow.textContent = parseInt(currWeather.main.temp_min) + '°'
  wind.textContent = currWeather.wind.speed +' '+'mph'
  realFeel.textContent = parseInt(currWeather.main.feels_like) + '°'
  pressure.textContent = currWeather.main.pressure 
  humid.textContent = currWeather.main.humidity + '%'
})
