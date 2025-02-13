import React, { Suspense } from 'react';
import './App.css';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import { Container, Row, Col} from 'reactstrap';
import Menu from './components/Menu'
import Home from './components/Home';
import { Routes, Route} from 'react-router-dom';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import AddShopComponent from './components/AddShopComponent';
import AddItemComponenet from './components/AddItemComponent';
import ListAllEmployeesComponent from './components/ListAllEmployeesComponent';
import ListAllShopsComponent from './components/ListAllShopsComponent';
import ListAllItemsComponent from './components/ListAllItemsComponent';
import ListAllShopOwnersComponent from './components/ListAllShopOwners';
import AddShopOwnerComponent from './components/AddShopOwnerComponent';
import './index.css';

//const ListEmployees = lazy(() => import("./components/ListAllEmployeesComponent"));


function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} className="flex-container">
     
      <ToastContainer/>
      <Container fluid style={{ flex: 1 }}>
        <Header/>
        <Row>
          <Col md="2">
            <Menu/>
          </Col>

          <Col md="10">
            
            <Suspense fallback={<Loading/>}>
            <Routes>     
              <Route path="/" element={<Home/>} />
              <Route path="/view-employees" element={<ListAllEmployeesComponent/>}/>
              <Route path="/add-employee" element={<AddEmployeeComponent/>}/>
              <Route path="/update-employee/:id" element={<AddEmployeeComponent/>}/>    

              <Route path="/view-shops" element={<ListAllShopsComponent/>}/>
              <Route path="/add-shop" element={<AddShopComponent/>}/>
              <Route path="/update-shop/:id" element={<AddShopComponent/>}/>    


              <Route path="/view-items" element={<ListAllItemsComponent/>}/>
              <Route path="/add-item" element={<AddItemComponenet/>}/> 
              <Route path="/update-item/:id" element={<AddItemComponenet/>}/>

              <Route path="/view-shopOwners" element={<ListAllShopOwnersComponent/>}/>
              <Route path="/add-shopOwner" element={<AddShopOwnerComponent/>}/> 
              <Route path="/update-shopOwner/:id" element={<AddShopOwnerComponent/>}/>

              
            </Routes>
            </Suspense>
            
            
          </Col>

        </Row>
        <Row>
          <Col>
        
        {/* <StickyFooter/> */}
        {/* <div style={{ backgroundColor: '#f5f5f5', padding: '10px', textAlign: 'center' }}>
              © {new Date().getFullYear()} Your Shopping Mall. All rights reserved.
            </div> */}
        </Col>
        </Row>
      </Container>
      <div style={{ backgroundColor: '#f5f5f5', padding: '10px', textAlign: 'center' }}>
              © {new Date().getFullYear()} Your Shopping Mall. All rights reserved.
      </div>
      
    </div>

    
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
export default App;
