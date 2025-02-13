import axios from 'axios';

//const URL = "http://smms.ap-northeast-1.elasticbeanstalk.com/shop";
// const URL = "https://spring-boot-app12322-40669c3fd28c.herokuapp.com/shop"
const URL =  "http://localhost:8081/shop";


class ShopService {

    //1. Fetch all employees JSON data

    getAllShops(){
       return axios.get(`${URL}/list`);
    }

    //2. Delete employee by Id
    deleteShop(id) {
       return axios.delete(`${URL}/delete/${id}`);
    }

    // 3. Update employee 
    updateShop(id, shop) {
      return axios.put(`${URL}/update/${id}`,shop);
    }

    createShop(shop) {
      return axios.post(`${URL}/create`, shop);
    }

    getShopById(id){
      return axios.get(`${URL}/search/${id}`);
    }
}

export default new ShopService();