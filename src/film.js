class Film {
  constructor({capacity, description, id, poster, runtime, showtime, ticketsSold, title}) {
    this.capacity = capacity
    this.description = description
    this.id = id
    this.poster = poster
    this.runtime = runtime
    this.showtime = showtime
    this.ticketsSold = ticketsSold
    this.title = title
  }

  buyTicket = () => {
    if (this.capacity === this.ticketsSold) {
      console.log("no tickets left")
    } else {
      // buy a ticket
      this.ticketsSold += 1
      api.updateFilm({ticketsSold: this.ticketsSold})
      
    }
  }
}