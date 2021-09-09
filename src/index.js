const api = "http://localhost:3000/wines"

fetch(api)
.then(response => response.json())
.then(data => console.log(data));