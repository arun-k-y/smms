import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup} from 'reactstrap';


const Menu=()=>{
    return(
    <div>
        <ListGroup>
            <Link className='list-group-item list-group-item-action list-group-item-danger' tag="a" to="/" action color="danger">Home</Link>

            <Link className='list-group-item list-group-item-action list-group-item-primary' tag="a" to="/view-employees" action color="danger">Employees</Link>

            <Link className='list-group-item list-group-item-action list-group-item-primary' tag="a" to="/view-shops" action color="danger">Shops</Link>

            <Link className='list-group-item list-group-item-action list-group-item-primary' tag="a" to="/view-items" action color="danger">Items</Link>
 
            <Link className='list-group-item list-group-item-action list-group-item-primary' tag="a" to="/view-shopOwners" action color="danger">Shop Owner</Link>
            
            <Link className='list-group-item list-group-item-action list-group-item-warning' tag="a" to="#!" action color="danger">About Us</Link>

            <Link className='list-group-item list-group-item-action list-group-item-warning' tag="a" to="#!" action color="danger">Contact</Link>
        </ListGroup>

    </div>
    )
}

export default Menu;


