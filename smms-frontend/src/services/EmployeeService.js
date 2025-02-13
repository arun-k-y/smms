import axios from 'axios';

//  const URL = "http://localhost:8081/employee"
//const URL = "https://smms.ap-northeast-1.elasticbeanstalk.com/employee";

//const URL = "http://smms.ap-northeast-1.elasticbeanstalk.com/employee"

//https://spring-boot-app12322-40669c3fd28c.herokuapp.com

// const URL = "https://spring-boot-app12322-40669c3fd28c.herokuapp.com/employee"

const URL =  "http://localhost:8081/employee";



class EmployeeService {

    //1. Fetch all employees JSON data

    getAllEmployees(){
       return axios.get(`${URL}/list`);
    }

    //2. Delete employee by Id
    deleteEmployee(id) {
       return axios.delete(`${URL}/delete/${id}`);
    }

    // 3. Update employee 
    updateEmployee(id, employee) {
      return axios.put(`${URL}/update/${id}`,employee);
    }

    createEmployee(employee) {
      return axios.post(`${URL}/create`, employee);
    }

    getEmployeeById(id){
      return axios.get(`${URL}/search/${id}`);
    }
}
// eslint-disable-next-line
export default new EmployeeService();