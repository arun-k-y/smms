import axios from 'axios';

//  const URL = "http://localhost:8081/shopOwner"
//const URL = "https://smms.ap-northeast-1.elasticbeanstalk.com/shopOwner";

//const URL = "http://smms.ap-northeast-1.elasticbeanstalk.com/shop_owner"
// const URL = "https://spring-boot-app12322-40669c3fd28c.herokuapp.com/shop_owner"
const URL =  "http://localhost:8081/shop_owner";



class ShopOwnerService {

    //1. Fetch all shopOwners JSON data

    getAllShopOwners(){
       return axios.get(`${URL}/list`);
    }

    //2. Delete shopOwner by Id
    deleteShopOwner(id) {
       return axios.delete(`${URL}/delete/${id}`);
    }

    // 3. Update shopOwner 
    updateShopOwner(id, shopOwner) {
      return axios.put(`${URL}/update/${id}`,shopOwner);
    }

    createShopOwner(shopOwner) {
      return axios.post(`${URL}/create`, shopOwner);
    }

    getShopOwnerById(id){
      return axios.get(`${URL}/search/${id}`);
    }
}
// eslint-disable-next-line
export default new ShopOwnerService();