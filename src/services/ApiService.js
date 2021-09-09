class ApiService {

    constructor(api){
        this.api = api
    }

    getWines = () => fetch(this.api + "/wines").then(res => res.json())

}