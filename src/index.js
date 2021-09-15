const api = new ApiService("http://localhost:3000")
const modal = new Modal()
    
    
//Wine.createWines()
document.querySelector("form").addEventListener("submit", handleLogin)
    
function handleLogin(e) {
    e.preventDefault()
    api.findOrcreateUser(e.target.username.value).the(console.log)
} 
    