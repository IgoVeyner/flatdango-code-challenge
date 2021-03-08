class Film {
  constructor({capacity, description, id, poster, runtime, showtime, tickets_sold, title}) {
    this.capacity = capacity
    this.description = description
    this.id = id
    this.poster = poster
    this.runtime = runtime
    this.showtime = showtime
    this.ticketsSold = tickets_sold
    this.title = title
    this.createElements()
  }

  createElements = film => {
    const div = document.createElement("div")

    div.innerText = this.title
    div.classList.add("film")
    div.classList.add("item")

    if (this.ticketsSold == this.capacity) {
      div.classList.add("sold-out")
      // buy.disabled = true // doesnt work 
      // buy.innerText = "Sold Out"
      // buy.style.backgroundColor = "grey"
    }

    div.dataset.id = this.id

    this.div = div

    div.addEventListener("click", this.updateDOM)
    
    filmsList.appendChild(div)

    if (this.id == "1") {
      this.updateDOM()
    }
  }

  updateDOM = () => {
    poster.src = this.poster
    title.innerText = this.title
    runtime.innerText = `${this.runtime} minutes`
    filmInfo.innerText = this.description
    showtime.innerText = this.showtime
    ticketNum.innerText = this.capacity - this.ticketsSold

    if (this.ticketsSold === this.capacity) {
      buy.disabled = true // doesnt work 
    }

    buy.movie = this
    buy.removeEventListener("click", this.buyTicket)
    buy.addEventListener("click", this.buyTicket)
  }

  buyTicket = () => {
    if (this.capacity === this.ticketsSold) {
      console.log("no tickets left")
    } else {
      this.ticketsSold += 1

      if (this.ticketsSold == this.capacity) {
        this.div.classList.add("sold-out")
        buy.diabled = true
      }

      api.updateFilm(this.id, {tickets_sold: this.ticketsSold})
      .then(() => this.updateDOM())
    }
  }
}