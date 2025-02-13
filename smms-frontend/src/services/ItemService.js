import axios from 'axios';

//const URL = "http://smms.ap-northeast-1.elasticbeanstalk.com/item";
// const URL = "https://spring-boot-app12322-40669c3fd28c.herokuapp.com/item"
const URL = "http://localhost:8081/item"

class ItemService {

    //1. Fetch all items JSON data

    getAllItems(){
       return axios.get(`${URL}/list`);
    }

    //2. Delete items by Id
    deleteItem(id) {
       return axios.delete(`${URL}/delete/${id}`);
    }

    // 3. Update items 
    updateItem(id, item) {
      return axios.put(`${URL}/update/${id}`,item);
    }

    createItem(item) {
      return axios.post(`${URL}/create`, item);
    }

    getItemById(id){
      return axios.get(`${URL}/search/${id}`);
    }
}

export default new ItemService();