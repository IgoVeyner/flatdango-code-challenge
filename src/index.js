const url = "http://localhost:3000/films"
const api = new API(url)
const filmsList = document.querySelector("#films")
const poster = document.querySelector("#poster")
const title = document.querySelector("#title")
const runtime = document.querySelector("#runtime")
const filmInfo = document.querySelector("#film-info")
const showtime = document.querySelector("#showtime")
const ticketNum = document.querySelector("#ticket-num")
const buy = document.querySelector(".button")

filmsList.innerHTML = ""

api.getFilms().then(films => {
  for (film of films) {
    film_ins = new Film(film)
  }
})
