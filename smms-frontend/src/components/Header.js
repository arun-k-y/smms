import React, { Component } from 'react';
import {Card, CardBody} from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <div>
                <Card className='my-1 bg-danger'>
                    <CardBody className='text-center my-1' ><h1>Shopping Mall Management System</h1></CardBody>
                </Card>
            </div>
            
        );
    }
}

export default Header;