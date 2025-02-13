import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Input , Form} from "reactstrap";
import ItemService from "../services/ItemService";
import { useNavigate , useParams , Link} from "react-router-dom";


const AddItemComponent = () => {

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [manufacturing, setManufacturing] = useState('')
    const [price, setPrice] = useState('')
 
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        return () => {
            if(id){
                document.title="Update-Item";
            }else{
                document.title="Add-Item";
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const saveOrUpdateItem = (i) => {
        i.preventDefault();

        const item = {
                         name,
                         category,
                         manufacturing,
                         price,
                         
        }

        

        if(id){
            ItemService.updateItem(id, item).then((response) => {
                toast.success(response.data);
                console.log(response.data)
                navigate('/view-items');
            }).catch(response => {
                toast.error(response.message);
                console.log(response);
            })

        }else{
            ItemService.createItem(item).then((response) =>{
                toast.success(response.data);
                console.log(response.data)
                navigate('/view-items');
                
                
    
            }).catch(response => {
                toast.error(response.message);
                console.log(response);
            })
        }
        
    }

    useEffect(() => {
        ItemService.getItemById(id).then((response) =>{
            setName(response.data.name)
            setCategory(response.data.category)
            setManufacturing(response.data.manufacturing)
            setPrice(response.data.price)
            
        })
        .catch(error => {
            console.log(error)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Item</h2>
        }else{
            return <h2 className = "text-center">Add Item</h2>
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
                                        onChange = {(i) => setName(i.target.value)}
                                    >
                                    </Input>
                                </div>

                                

                                <div className = "form-group mb-3">
                                    <label className = "form-label"> Category :</label>
                                    <Input
                                        type = "text"
                                        placeholder = "Enter category"
                                        name = "category"
                                        className = "form-control"
                                        value = {category}
                                        onChange = {(i) => setCategory(i.target.value)}
                                    >
                                    </Input>
                                </div>

                                <div className = "form-group mb-3">
                                    <label className = "form-label"> MFD :</label>
                                    <Input
                                        type = "date"
                                        placeholder = "Enter MFD"
                                        name = "manufacturing"
                                        className = "form-control"
                                        value = {manufacturing}
                                        onChange = {(i) => setManufacturing(i.target.value)}
                                    >
                                    </Input>
                                </div>

                                <div className = "form-group mb-3">
                                    <label className = "form-label">  Price :</label>
                                    <Input
                                        type = "text"
                                        placeholder = "Enter price"
                                        name = "price"
                                        className = "form-control"
                                        value = {price}
                                        onChange = {(i) => setPrice(i.target.value)}
                                    >
                                    </Input>
                                </div>

                                
                                
                                <div className="text-center">
                                <button style={{marginLeft:"10px", marginBottom:"30px"}} className = "btn btn-success" onClick = {(i) => saveOrUpdateItem(i)} >Submit </button>
                                <Link to="/view-items" className="btn btn-danger" style={{marginLeft:"10px", marginBottom:"30px"}}> Cancel </Link>
                                </div>
                            </Form>

                        </div >
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddItemComponent;


