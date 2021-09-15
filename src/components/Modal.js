class Modal {

    constructor() {
        this.addCloseEventListener()
    }
     
    //grab the element
    get modalElement () {
        return document.querySelector("#myModal")
    }
    //use the getter to open element by displaying in block
    open = () => {
        this.modalElement.style.display = "block"
    }
    //use getter to close by changing display to none 
    close = () => {
        this.modalElement.style.display = "none"
    }

    addCloseEventListener = () => {
        this.modalElement.addEventListener("click", (e) => {
            if (e.target.classList.contains("close") || e.target.id == "myModal") {
                modal.close()
            }
        })
    }
    
}