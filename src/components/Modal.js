class Modal {

    get modalElement () {
        return document.querySelector("#myModal")
    }

    open = () => {
        this.modal.style.display = "block"
    }

    close = () => {
        this.modal.style.display = "none"
    }
    
}