const api = new ApiService("http://localhost:3000")
const modal = new Modal()
let user 
    
    
document.querySelector("form").addEventListener("submit", handleLogin)
    
function handleLogin(e) {
    e.preventDefault()
    document.getElementById("login").innerHTML = ""
    api.findOrCreateUser(e.target.username.value).then(userInfo => {
        user = userInfo
        Wine.createWines()
    })
} 
    