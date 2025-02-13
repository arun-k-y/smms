import React, { useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'; 
import { useState } from 'react';
import * as ReactBootStrap from 'react-bootstrap'
import styled from 'styled-components';


// const customId = "custom-id-yes";

const StyledEmployeeList = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #f7f7f7;
  width: 300px;
  margin: 0 auto;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
`;


const Heading = styled.h3`
  font-size: 1.2em;
  margin-top: 0;
  padding-bottom: 5px;
  border-bottom: 1px solid #ccc;
`;


const ListAllEmployeesComponent =()=> {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(false)



    useEffect(() => {
        document.title = 'View-Employees';
        getAllEmployees();
    }, []); // The empty dependency array ensures this effect only runs once on mount
    

    // const getAllEmployees = () => {
    //     EmployeeService.getAllEmployees().then((response) => {
    //         setEmployees(response.data)
    //         setLoading(true);
    //         console.log(response.data);
    //     }).catch(error =>{
    //         console.log(error);
    //     })
    // }
    const getAllEmployees = () => {
        EmployeeService.getAllEmployees()
            .then((response) => {
                setEmployees(response.data);
                setLoading(true); // Set loading to false after data is fetched
                console.log(response.data);
            })
            .catch((error) => {
                setLoading(false); // Set loading to false in case of error
                console.log(error);
            });
    };
    

    const deleteEmployee = (employeeId) => {
       EmployeeService.deleteEmployee(employeeId).then((response) =>{
       toast.success(response.data); 
       getAllEmployees();
       }).catch(error =>{
           console.log(error);
       })
        
    }
    return(
        <div className='container'>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                   <h3>Employee List</h3>
                   <Link  to = "/add-employee" className = "btn btn-primary mb-2 "> Add Employee </Link>
                </div>
                
                <table className='table table-hover table-bordered table-striped'>
                   {/* <thead>
                     <tr className='bg-secondary text-white'>
                       <th>ID</th>
                       <th>Name</th>
                       <th>DOB</th>
                       <th>Salary</th>
                       <th>Address</th>
                       <th>Designation</th>
                       <th>Actions</th>
                     </tr> 
                   </thead> */}
                   <tbody>
                         {loading ? 
                        employees.map((emp)=>(
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.dob}</td>
                                <td>{emp.salary}</td>
                                <td>{emp.address}</td>
                                <td>{emp.designation}</td>
                                <td><Link className="btn btn-outline-primary" to={`/update-employee/${emp.id}`}> UPDATE</Link>  
                                    <button style={{marginLeft:"10px"}} className='btn btn-danger'onClick={()=> deleteEmployee(emp.id)}>DELETE</button></td>
                            </tr>
                        )): <ReactBootStrap.Spinner animation="border" style={{position: "fixed", top: "50%", left: "50%"}}> <h2>Loading...</h2></ReactBootStrap.Spinner>
                    }
                    </tbody>

                    <thead>
                     <tr className='bg-secondary text-white'>
                       <th>ID</th>
                       <th>Name</th>
                       <th>DOB</th>
                       <th>Salary</th>
                       <th>Address</th>
                       <th>Designation</th>
                       <th>Actions</th>
                     </tr> 
                   </thead>
                </table>
        </div>
    );
}

// class ListAllEmployeesComponent extends React.Component {
    
//     constructor(props){
//         super(props);
//         this.state = {
//             employees : [],    
//         }
//     }

//     componentDidMount() {
//         document.title = `View-Employees`;
//         this.getAllEmployees();
//     }

//     getAllEmployees(){
//         // make service call-> get data-> set data to state (employees)
//         EmployeeService.getAllEmployee().then(response=>{
//             this.setState({employees:response.data});
//         });
//        // this method should be called whenever this component is loaded
//     }
    
//     deleteEmployee(id){
//        // window.alert("Do you really want to delete employee with id "+id+" ?");
//         EmployeeService.deleteEmployee(id).then(
//         (response)=>{
//             toast.success(response.data);
//             this.getAllEmployees();
//         },
//         (error) =>{
//             toast.error("Something went wrong!")
//         }
       
//        );
//     }

//     updateEmployee(e){
        
//     }

//     render() {
//         return (
//             <div>
//                 <h3>Employee List</h3>
//                <table className='table table-hover'>
//                   <thead>
//                     <tr className='bg-secondary text-white'>
//                       <th>ID</th>
//                       <th>Name</th>
//                       <th>DOB</th>
//                       <th>Salary</th>
//                       <th>Address</th>
//                       <th>Designation</th>
//                       <th>Actions</th>
//                     </tr> 
//                   </thead>
                    
//                     <tbody>
//                         {
//                         this.state.employees.map((emp)=>(
//                             <tr key={emp.id}>
//                                 <td>{emp.id}</td>
//                                 <td>{emp.name}</td>
//                                 <td>{emp.dob}</td>
//                                 <td>{emp.salary}</td>
//                                 <td>{emp.address}</td>
//                                 <td>{emp.designation}</td>
//                                 <td><button className='btn btn-info' onClick={()=>{this.updateEmployee()}}>UPDATE</button>   <button className='btn btn-danger'onClick={()=> this.deleteEmployee(emp.id)}>DELETE</button></td>
//                             </tr>
//                         ))
//                     }
//                     </tbody>
                    
//                </table>

//                <ToastContainer/>
//             </div>
//         );
//     }
// }



// export default ListAllEmployeesComponent;


export default ListAllEmployeesComponent;
