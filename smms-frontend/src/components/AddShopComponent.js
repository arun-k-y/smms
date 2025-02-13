import { IconButton } from "@mui/material";       
import AddIcon from '@mui/icons-material/Add';    
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";    
import { Form, Input } from "reactstrap";         
import { toast } from "react-toastify";
import ShopService from "../services/ShopService";


const AddShopComponent = () => {

    const [shopName, setShopName] = useState('');
    const [shopStatus, setShopStatus] = useState('');
    const [shopCategory, setShopCategory] = useState('');
    const [leaseStatus, setLeaseStatus] = useState('');
    const [shopOwner, setShopOwner] = useState({name:' ',dob:' ',address:' '});
    const [shopEmployee, setShopEmployee] = useState([{name:'',dob:'',salary:'',address:'', designation:''}]);
    const [items,setItems] = useState([{name:'',manufacturing:'',expiry:'',price:'',category:''},])

    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        return () => {
            if(id){
                document.title="Update-Shop";
            }else{
                document.title="Add-Shop";
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    // const handleAddFields = () => {
    //     setInputFields([...inputFields, { id: uuidv4(),  firstName: '', lastName: '' }])
    // }
    
    const saveOrUpdateShop = (e) => {
        e.preventDefault();

        const shop = {
             shopName,
             shopCategory,
             shopStatus,
             leaseStatus,
             shopOwner,
             shopEmployee,
             items
        }

        

        if(id){
            ShopService.updateShop(id, shop).then((response) => {
                toast.success(response.data);
                console.log(response.data)
                navigate('/view-shops');
            }).catch(response => {
                toast.error(response.message);
                console.log(response);
            })

        }else{
            ShopService.createShop(shop).then((response) =>{
                toast.success(response.data);
                console.log(response.data);
                navigate('/view-shops');
    
            }).catch(response => {
                toast.error(response.message);
                console.log(response);
            })
        }
        
    }

    useEffect(() => {
        ShopService.getShopById(id).then((response) =>{
            setShopName(response.data.shopName);
            setShopCategory(response.data.shopCategory);
            setShopOwner(response.data.shopOwner);
            setShopEmployee(response.data.shopEmployee);
            //console.log(response.data.shopEmployee[0]);
            // console.log(shop.shopEmployee[0].name)
            setShopStatus(response.data.shopStatus);
            setLeaseStatus(response.data.leaseStatus);
            setItems(response.data.items);
        })
        .catch(error => {
            console.log(error)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Shop</h2>
        }else{
            return <h2 className = "text-center">Add Shop</h2>
        }
    }


    return(
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
                                <br></br>
                                <div className = "form-group mb-3">
                                    <label className = "form-label"> Name :</label>
                                    <Input
                                        type = "text"
                                        placeholder = "Enter name"
                                        name = "shopName"
                                        className = "form-control"
                                        value = {shopName}
                                        onChange = {(e) => setShopName(e.target.value)}
                                    >
                                    </Input>
                                </div>
                                
                                <div className = "form-group mb-3">
                                    <label className = "form-label"> Category :</label>
                                    <Input
                                        type = "text"
                                        placeholder = "Enter category"
                                        name = "shopCategory"
                                        className = "form-control"
                                        value = {shopCategory}
                                        onChange = {(e) => setShopCategory(e.target.value)}
                                    >
                                    </Input>
                                </div>

                                <div className = "form-group mb-3">
                                    <label className = "form-label"> Status :</label>
                                    <Input
                                        type = "text"
                                        placeholder = "Enter status"
                                        name = "shopStatus"
                                        className = "form-control"
                                        value = {shopStatus}
                                        onChange = {(e) => setShopStatus(e.target.value)}
                                    >
                                    </Input>
                                </div>

                                <div className = "form-group mb-3">
                                    <label className = "form-label">  Lease Status :</label>
                                    <Input
                                        type = "text"
                                        placeholder = "Enter lease status"
                                        name = "leaseStatus"
                                        className = "form-control"
                                        value = {leaseStatus}
                                        onChange = {(e) => setLeaseStatus(e.target.value)}
                                    >
                                    </Input>
                                </div>
                               

                                <br></br>
                                <hr/>
                                <h3>Shop Owner Details</h3>
                                <div className = "form-group mb-4">
                                    <label className = "form-label"> Name :</label>
                                    <Input
                                        type = "text"
                                        placeholder = "Enter name of the Shop Owner"
                                        name = "name"
                                        className = "form-control"
                                        value = {shopOwner?.name||''}
                                        onChange = {(e) => {
                                            const newOwner = {name:e.target.value, dob:shopOwner.dob,address:shopOwner.address};
                                            setShopOwner(newOwner);              
                                    }}
                                    >
                                    </Input>

                                    <label className = "form-label"> DOB :</label>
                                    <Input
                                        type = "date"
                                        placeholder = "Enter DOB"
                                        name = "dob"
                                        className = "form-control"
                                        value = {shopOwner?.dob||''}
                                        onChange = {(e) => {
                                            const newOwner = {dob:e.target.value, name:shopOwner.name, address:shopOwner.address};
                                            setShopOwner(newOwner);              
                                    }}
                                    >
                                    </Input>

                                    <label className = "form-label"> Address :</label>
                                    <Input
                                        type = "text"
                                        placeholder = "Enter address"
                                        name = "address"
                                        className = "form-control"
                                        value = {shopOwner?.address||''}
                                        onChange = {(e) => {
                                            const newOwner = {address:e.target.value, name:shopOwner.name, dob:shopOwner.dob};
                                            setShopOwner(newOwner);              
                                    }}
                                    >
                                    </Input>
                                </div>

                                <hr/>
                                <br/>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}><h3>Add Employees</h3><IconButton>
                                        <AddIcon />
                                </IconButton></div>
                                <div className = "form-group mb-4">
                                    <label className = "form-label"> Employees :</label>
                                    {/* <Input
                                        type = "text"
                                        placeholder = "Enter designation"
                                        name = "designation"
                                        className = "form-control"
                                        // value = {designation}
                                        // onChange = {(e) => setDesignation(e.target.value)}
                                    >
                                    </Input> */}
                                    <div className = "form-group mb-3">
                                    <label className = "form-label"> Name :</label>
                                    <Input
                                        type = "text"
                                        placeholder = "Enter name"
                                        name = "name"
                                        className = "form-control"
                                        value = {shopEmployee[0]?.name || ' '}
                                        //name:'',dob:'',salary:'',address:'', designation:''
                                        // onChange = {(e) => setName(e.target.value)}
                                        onChange = {(e) => {
                                            const newEmployee = {...shopEmployee[0], name: e.target.value};
                                            setShopEmployee([newEmployee]);              
                                    }}
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
                                        value = {shopEmployee[0]?.dob || ' '}
                                        // onChange = {(e) => setDob(e.target.value)}
                                        onChange = {(e) => {
                                            const newEmployee = {...shopEmployee[0], dob: e.target.value};
                                            setShopEmployee([newEmployee]);              
                                    }}

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
                                        value = {shopEmployee[0]?.salary || ' '}
                                        // onChange = {(e) => setSalary(e.target.value)}
                                        onChange = {(e) => {
                                            const newEmployee = {...shopEmployee[0], salary: e.target.value};
                                            setShopEmployee([newEmployee]);              
                                    }}
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
                                        value = {shopEmployee[0]?.address || ' '}
                                        // onChange = {(e) => setAddress(e.target.value)}
                                        onChange = {(e) => {
                                            const newEmployee = {...shopEmployee[0], address: e.target.value};
                                            setShopEmployee([newEmployee]);              
                                    }}
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
                                        value = {shopEmployee[0]?.designation || ' '}
                                        // onChange = {(e) => setDesignation(e.target.value)}
                                        onChange = {(e) => {
                                            const newEmployee = {...shopEmployee[0], designation: e.target.value};
                                            setShopEmployee([newEmployee]);              
                                    }}
                                    >
                                    </Input>
                                </div>
                                </div>

                                <hr/>
                                <br/>

 
                                <div className="text-center">
                                <button style={{marginLeft:"10px", marginBottom:"30px"}} className = "btn btn-success" onClick={(e)=>saveOrUpdateShop(e)}> Submit </button>
                                <Link to="/view-shops" className="btn btn-danger" style={{marginLeft:"10px", marginBottom:"30px"}}> Cancel </Link>
                                </div>
                            </Form>

                        </div >
                    </div>
                </div>

           </div>


        </div>
    )
}

export default AddShopComponent;



