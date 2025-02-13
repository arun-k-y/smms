import React, { useEffect } from 'react';
import ItemService from '../services/ItemService';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'; 
import { useState } from 'react';
import * as ReactBootStrap from 'react-bootstrap'


// const customId = "custom-id-yes";

const ListAllItemsComponent =()=> {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.title = 'View-Items';
        getAllItems();
    }, []);
    
    const getAllItems = () => {
        ItemService.getAllItems()
            .then((response) => {
                setItems(response.data);
                setLoading(true); 
                console.log(response.data);
            })
            .catch((error) => {
                setLoading(true); 
                console.log(error);
            });
    };
    

    const deleteItem = (itemId) => {
       ItemService.deleteItem(itemId).then((response) =>{
       toast.success(response.data); 
       getAllItems();
       }).catch(error =>{
           console.log(error);
       })
        
    }
    return(
        <div className='container'>
                
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3>Item List</h3> 
                <Link  to = "/add-item" className = "btn btn-primary mb-2 "> Add Item </Link>
                </div>
                
                <table className='table table-hover table-bordered table-striped'>
                   
                   <tbody>
                         {loading ? 
                        items.map((item)=>(
                            <tr key={item.id}>
                                <td>{item.id }</td>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td>{item.manufacturing}</td>
                                <td>{item.price}</td>
                               
                                <td><Link className="btn btn-outline-primary" to={`/update-item/${item.id}`}> UPDATE</Link>  
                                    <button style={{marginLeft:"10px"}} className='btn btn-danger'onClick={()=> deleteItem(item.id)}>DELETE</button></td>
                            </tr>
                        )) : <span style={{position: "fixed", top: "50%", left: "50%"}}><h3>Loading...</h3></span>
                    }
                    </tbody>
                    
                    <thead>
                     <tr className='bg-secondary text-white'>
                       <th>ID</th>
                       <th>Name</th>
                       <th>Category</th>
                       <th>MFD</th>
                       <th>Price</th>
                       <th>Actions</th>
                     </tr> 
                   </thead>
                </table>
    
        </div>
        
    );
}



export default ListAllItemsComponent;
