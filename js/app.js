/** @format */

const storeg = new Storeg()
const weatherLocal = storeg.getLocationData()

const weather = new Weather(weatherLocal.city, weatherLocal.state)
const ui = new UI()
weather.changeWeather("تهران", "تهران")

document.addEventListener("DOMContentLoaded", getWeather)
document
  .querySelector("#exampleModal")
  .addEventListener("click", changeLocation)

function changeLocation() {
  const state = document.querySelector("#state").value
  const city = document.querySelector("#city").value
  weather.changeLocation(city, state)
  storeg.setLocationDate(city, state)
  getWeather()
}

function getWeather() {
  weather
    .getWeather()
    .then((res) => {
      console.log(res)
      ui.point(res, weather.location)
    })
    .catch((err) => console.log(err.message))
}
