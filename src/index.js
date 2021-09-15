const api = new ApiService("http://localhost:3000")
const modal = new Modal()
    
    
//Wine.createWines()
document.querySelector("form").addEventListener("submit", handleLogin)
    
function handleLogin(e) {
    e.preventDefault()
    api.findOrCreateUser(e.target.username.value).then(console.log)
} 
    