import React, { useEffect } from 'react';
import ShopService from '../services/ShopService';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'; 
import { useState } from 'react';
import * as ReactBootStrap from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';


// const customId = "custom-id-yes";

const ListAllShopsComponent =()=> {
    const [Shops, setShops] = useState([]);
    const [loading, setLoading] = useState(false);

    

    useEffect(() => {
        document.title = 'View-Shops';
        getAllShops();
    }, []);
    
    const getAllShops = () => {
        ShopService.getAllShops()
            .then((response) => {
                setShops(response.data);
                setLoading(true); // Set loading to false after data is fetched
                console.log(response.data);
            })
            .catch((error) => {
                setLoading(true); // Set loading to false in case of error
                console.log(error);
            });
    };
    

    const deleteShop = (ShopId) => {
       ShopService.deleteShop(ShopId).then((response) =>{
       toast.success(response.data); 
       getAllShops();
       }).catch(error =>{
           console.log(error);
       })
        
    }


    return(
        <div className='container'>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3>Shop List</h3> 
                <Link  to = "/add-shop" className = "btn btn-primary mb-2 "> Add Shop </Link>
                </div>
                
                <table className='table table-hover table-bordered table-striped'>
                   <thead>
                     <tr className='bg-secondary text-white'>
                       <th>ID</th>
                       <th>Name</th>
                       <th>Category</th>
                       <th>Status</th>
                       <th>Lease Status</th>
                       {/* <th>Employees</th>
                       <th>Items</th> */}
                       <th>Shop Owner</th>
                       <th>Actions</th>
                     </tr> 
                   </thead>
                   <tbody>
                         {loading ?
                        Shops.map((shop)=>(
                            
                            <tr key={shop.shopId}>
                                <td>{shop.shopId}</td>
                                <td>{shop.shopName}</td>
                                <td>{shop.shopCategory}</td>
                                <td>{shop.shopStatus}</td>
                                <td>{shop.leaseStatus}</td>
                                {/* <td>{shop.shopEmployee.map((employee)=> employee.name + ",")}</td>
                                <td>{shop.items.map((item => item.name + ","))}</td>   */}
<td>{shop && shop.shopOwner ? shop.shopOwner['name'] : ''}</td>                                <td><Link className="btn btn-outline-primary" to={`/update-shop/${shop.shopId}`}> UPDATE</Link>  
                                    <button style={{marginLeft:"10px"}} className='btn btn-danger'onClick={()=> deleteShop(shop.shopId)}>DELETE</button></td>
                            </tr>
                        )) : 
                        <><ReactBootStrap.Spinner animation="grow" variant="primary" style={{position: "fixed", top: "50%", left: "50%"}}/> 
                        <Spinner animation="grow" variant="success" style={{position: "fixed", top: "50%", left: "56%"}}/>
                        <Spinner animation="grow" variant="danger"style={{position: "fixed", top: "50%", left: "52%"}} />
                        <Spinner animation="grow" variant="warning" style={{position: "fixed", top: "50%", left: "54%"}}/></>
               

                      

                    
                    }
                    </tbody>
                </table>
        </div>
    );
}

export default ListAllShopsComponent;