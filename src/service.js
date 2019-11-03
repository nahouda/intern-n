//import axios from 'axios';
const api = "https://api.tvmaze.com/search/shows?q=test"; 
export default class Service {
    GetData(){ 
        return fetch(api).then((res)=>res.json());
    }
    
    }
    