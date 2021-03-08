class API {
  constructor(url) {
    this.url = url 
  }

  parseJSON = r => r.json() 

  getFilms = () => {
    fetch(this.url)
    .then(this.parseJSON)
    .then(data => console.log(data))
  }

  getFilm = id => {
    fetch(`${this.url}/${id}`)
    .then(this.parseJSON)
    .then(data => console.log(data))
  }

  updateFilm = (id, data) => {
    fetch(`${this.url}/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(this.parseJSON)
    .then(data => console.log(data))
  }
}