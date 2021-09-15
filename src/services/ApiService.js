class ApiService {

    constructor(api){
        this.api = api
    }

    getWines = () => fetch(this.api + "/wines").then(res => res.json())

    addWine = (newWine) => fetch(this.api + "/wines", {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newWine),
      })
      .then(response => response.json())

}