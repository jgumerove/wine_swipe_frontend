const api = new ApiService("http://localhost:3000")

api.getWines()
.then(wines => console.log(wines))

