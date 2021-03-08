class API {
  constructor(url) {
    this.url = url 
  }

  parseJSON = r => r.json() 

  getFilms = () => {
    return fetch(this.url)
    .then(this.parseJSON)
  }

  // Not in use with the advanced deliverables
  // I just load all films, create instances and use those instance's data
  // No need to do another fetch request
  getFilm = id => {
    fetch(`${this.url}/${id}`)
    .then(this.parseJSON)
    .then(data => console.log(data))
  }

  updateFilm = (id, data) => {
    return fetch(`${this.url}/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(this.parseJSON)
  }
}