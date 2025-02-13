import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Input , Form} from "reactstrap";
import EmployeeService from "../services/EmployeeService";
import { useNavigate , useParams , Link} from "react-router-dom";

// const AddEmployeeComponent = ()=> {
//     useEffect(()=>{
//         document.title='Add-Employee';
//     }, []);

//     const [employee, setEmployee]=useState({});
    
//     //form handler function 
//     const handleForm = (e) => {
//         postDatatoServer(employee);
//         e.preventDefault();
//     };

//     //function to post data to server
//     const postDatatoServer = (data) => {
//         EmployeeService.createEmployee(data).then(
//             (response) => {
//                 toast.success(response.data);
//             },
//             (error) =>{
//                 toast.error("Something went wrong!")
//             }
//         );
//     };


//     return(
//         <Fragment>
//             <h1 className="text-center my3">Fill Employee Details</h1>
//             <Form onSubmit={handleForm}>
//                 <FormGroup>
//                     <label for="name">Name</label>
//                     <Input
//                     type="text"
//                     placeholder="Enter name"
//                     name="name"
//                     id="name"
//                     onChange={(e)=>{
//                         setEmployee({...employee, name:e.target.value})
//                     }}
//                     ></Input>

//                     <label for="dob">Date of Birth</label>
//                     <Input
//                     type="date"
//                     placeholder="Enter dob"
//                     name="dob"
//                     id="dob"
//                     onChange={(e)=>{
//                         setEmployee({...employee, dob:e.target.value})
//                     }}
//                     ></Input>

//                     <label for="address">Address</label>
//                     <Input
//                     type="text"
//                     placeholder="Enter address"
//                     name="address"
//                     id="address"
//                     onChange={(e)=>{
//                         setEmployee({...employee, address:e.target.value})
//                     }}
//                     ></Input>

//                    <label for="salary">Salary</label>
//                     <Input
//                     type="text"
//                     placeholder="Enter Salary"
//                     name="salary"
//                     id="salary"
//                     onChange={(e)=>{
//                         setEmployee({...employee, salary:e.target.value})
//                     }}
//                     ></Input>

//                     <label for="designation">Designation</label>
//                     <Input
//                     type="text"
//                     placeholder="Enter designation"
//                     name="designation"
//                     id="designation"
//                     onChange={(e)=>{
//                         setEmployee({...employee, designation:e.target.value})
//                     }}
//                     ></Input>
//                 </FormGroup>
//                 <Container className="text-center">
//                     <Button type="submit" color="success ">Add Employee </Button>
//                     &nbsp;&nbsp;
//                     <Button type="reset" color="warning ml-1"> Clear</Button>
//                 </Container>
//             </Form>
//         </Fragment>


//     )

// }


const AddEmployeeComponent = () => {

    const [name, setName] = useState('')
    const [dob, setDob] = useState('')
    const [salary, setSalary] = useState('')
    const [address, setAddress] = useState('')
    const [designation, setDesignation] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        return () => {
            if(id){
                document.title="Update-Employee";
            }else{
                document.title="Add-Employee";
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const employee = {
                         name,
                         dob,
                         salary,
                         address,
                         designation
        }

        

        if(id){
            EmployeeService.updateEmployee(id, employee).then((response) => {
                toast.success(response.data);
                console.log(response.data)
                navigate('/view-employees');
            }).catch(response => {
                toast.error(response.message);
                console.log(response);
            })

        }else{
            EmployeeService.createEmployee(employee).then((response) =>{
                toast.success(response.data);
                console.log(response.data);
                navigate('/view-employees');
               
    
            }).catch(response => {
                toast.error(response.message);
                console.log(response);
            })
        }
        
    }

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response) =>{
            setName(response.data.name)
            setDob(response.data.dob)
            setSalary(response.data.salary)
            setAddress(response.data.address)
            setDesignation(response.data.designation)
        })
        .catch(error => {
            console.log(error)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Employee</h2>
        }else{
            return <h2 className = "text-center">Add Employee</h2>
        }
    }

    return (
        <div>
           <div className = "container">
                <div className = "row">
                    <div className = "card shadow-1g col-md-5  offset-md-3 mb-1" style={{maxWidth:"30rem"}}>
                       
                       <div className="card-header ">
                        {
                           title()
                        }
                       </div>
                        <div className = "form">
                            <Form>
                                <div className = "form-group mb-3">
                                    <label className = "form-label"> Name :</label>
                                    <Input
                                        type = "text"
                                        placeholder = "Enter name"
                                        name = "name"
                                        className = "form-control"
                                        value = {name}
                                        onChange = {(e) => setName(e.target.value)}
                                    >
                                    </Input>
                                </div>

                                <div className = "form-group mb-3">
                                    <label className = "form-label"> DOB :</label>
                                    <Input
                                        type = "date"
                                        placeholder = "Enter DOB"
                                        name = "dob"
                                        className = "form-control"
                                        value = {dob}
                                        onChange = {(e) => setDob(e.target.value)}
                                    >
                                    </Input>
                                </div>

                                <div className = "form-group mb-3">
                                    <label className = "form-label"> Salary :</label>
                                    <Input
                                        type = "text"
                                        placeholder = "Enter salary"
                                        name = "salary"
                                        className = "form-control"
                                        value = {salary}
                                        onChange = {(e) => setSalary(e.target.value)}
                                    >
                                    </Input>
                                </div>

                                <div className = "form-group mb-3">
                                    <label className = "form-label">  Address :</label>
                                    <Input
                                        type = "text"
                                        placeholder = "Enter address"
                                        name = "address"
                                        className = "form-control"
                                        value = {address}
                                        onChange = {(e) => setAddress(e.target.value)}
                                    >
                                    </Input>
                                </div>

                                <div className = "form-group mb-4">
                                    <label className = "form-label"> Designation :</label>
                                    <Input
                                        type = "text"
                                        placeholder = "Enter designation"
                                        name = "designation"
                                        className = "form-control"
                                        value = {designation}
                                        onChange = {(e) => setDesignation(e.target.value)}
                                    >
                                    </Input>
                                </div>
                                
                                <div className="text-center">
                                <button style={{marginLeft:"10px", marginBottom:"30px"}} className = "btn btn-success" onClick = {(e) => saveOrUpdateEmployee(e)} >Submit </button>
                                <Link to="/view-employees" className="btn btn-danger" style={{marginLeft:"10px", marginBottom:"30px"}}> Cancel </Link>
                                </div>
                            </Form>

                        </div >
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddEmployeeComponent;