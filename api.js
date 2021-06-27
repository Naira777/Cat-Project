
import * as axios from 'axios';




const instance = axios.create ({ 

    baseURL: 'https://api.thecatapi.com/v1/'
  

});



export const catsAPI = { 


    getCats ( page=1, category=1)  {
    
    
        return instance.get(`images/search?limit=10&page=${page}&category_ids=${category}`)
    
       .then(response =>

         {
             return response.data;
    
          });  


}

   




}