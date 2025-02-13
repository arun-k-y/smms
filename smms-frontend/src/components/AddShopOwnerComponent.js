import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Input , Form} from "reactstrap";
import ShopOwnerService from "../services/ShopOwnerService";
import { useNavigate , useParams , Link} from "react-router-dom";


const AddShopOwnerComponent = () => {

    const [name, setName] = useState('')
    const [dob, setDob] = useState('')
    const [address, setAddress] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        return () => {
            if(id){
                document.title="Update-ShopOwner";
            }else{
                document.title="Add-ShopOwner";
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const saveOrUpdateShopOwner = (e) => {
        e.preventDefault();

        const shopOwner = {
                         name,
                         dob,
                         
                         address
                         
        }

        

        if(id){
            ShopOwnerService.updateShopOwner(id, shopOwner).then((response) => {
                toast.success(response.data);
                console.log(response.data)
                navigate('/view-shopOwners');
            }).catch(response => {
                toast.error(response.message);
                console.log(response);
            })

        }else{
            ShopOwnerService.createShopOwner(shopOwner).then((response) =>{
                toast.success(response.data);
                console.log(response.data);
                navigate('/view-shopOwners');
               
    
            }).catch(response => {
                toast.error(response.message);
                console.log(response);
            })
        }
        
    }

    useEffect(() => {
        ShopOwnerService.getShopOwnerById(id).then((response) =>{
            setName(response.data.name)
            setDob(response.data.dob)
            setAddress(response.data.address)
        })
        .catch(error => {
            console.log(error)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update ShopOwner</h2>
        }else{
            return <h2 className = "text-center">Add ShopOwner</h2>
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

                              
                                
                                <div className="text-center">
                                <button style={{marginLeft:"10px", marginBottom:"30px"}} className = "btn btn-success" onClick = {(e) => saveOrUpdateShopOwner(e)} >Submit </button>
                                <Link to="/view-shopOwners" className="btn btn-danger" style={{marginLeft:"10px", marginBottom:"30px"}}> Cancel </Link>
                                </div>
                            </Form>

                        </div >
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddShopOwnerComponent;