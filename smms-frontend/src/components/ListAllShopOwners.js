import React, { useEffect } from 'react';
import ShopOwnerService from '../services/ShopOwnerService';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'; 
import { useState } from 'react';
import * as ReactBootStrap from 'react-bootstrap'


// const customId = "custom-id-yes";

const ListAllShopOwnersComponent =()=> {
    const [shopOwners, setShopOwners] = useState([]);
    const [loading, setLoading] = useState(false)


    useEffect(()=>{

            document.title = `View-ShopOwners`;
            getAllShopOwners();
        
    }, [])


    const getAllShopOwners = () => {
        ShopOwnerService.getAllShopOwners()
            .then((response) => {
                setShopOwners(response.data);
                setLoading(true); 
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    

    const deleteShopOwner = (shopOwnerId) => {
       ShopOwnerService.deleteShopOwner(shopOwnerId).then((response) =>{
       toast.success(response.data); 
       getAllShopOwners();
       }).catch(error =>{
           console.log(error);
       })
        
    }
    return(
        <div className='container'>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3>ShopOwner List</h3> 
                <Link  to = "/add-shopOwner" className = "btn btn-primary mb-2 "> Add Shop Owner </Link>
                </div>
                
                <table className='table table-hover table-bordered table-striped'>
                  
                   <tbody>
                         {loading ?
                        shopOwners.map((so)=>(
                            <tr key={so.id}>
                                <td>{so.id}</td>
                                <td>{so.name}</td>
                                <td>{so.dob}</td>
                                <td>{so.address}</td>
                                <td><Link className="btn btn-outline-primary" to={`/update-shopOwner/${so.id}`}> UPDATE</Link>  
                                    <button style={{marginLeft:"10px"}} className='btn btn-danger'onClick={()=> deleteShopOwner(so.id)}>DELETE</button></td>
                            </tr>
                        )) : <ReactBootStrap.Spinner animation="grow" variant="primary" style={{position: "fixed", top: "50%", left: "50%"}}/>
                    }
                    </tbody>

                    <thead>
                     <tr className='bg-secondary text-white'>
                       <th>ID</th>
                       <th>Name</th>
                       <th>DOB</th>
                       <th>Address</th>
                       <th>Actions</th>
                     </tr> 
                   </thead>
                </table>
        </div>
    );
}



export default ListAllShopOwnersComponent;



