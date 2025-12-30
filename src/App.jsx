import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './assets/pages/LoginPage'
import SignUpPage from './assets/pages/SignUpPage'
import CustomerDashboard from './assets/pages/CustomerDashBoard'
import CarOwnerDashBoard from './assets/pages/CarOwnerDashBoard'  
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HomePage from './assets/pages/HomePage'
import VehiclePage from './assets/pages/VehiclesPage'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import CustomerProfile from './assets/pages/CustomerProfile'
import CarOwnerProfile from './assets/pages/CarOwnerProfile'
import CarOwnerProducts from './assets/pages/CarOwnerProducts'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     
     <Routes>
  <Route path='' element={ <HomePage/>}></Route>
  <Route path='/signup' element={<SignUpPage/>}></Route>
  <Route path='/login' element={<LoginPage/>}></Route>
  <Route path='/customer-dashboard' element={<CustomerDashboard/>}></Route>
  <Route path='/customer-dashboard/vehicles' element={<VehiclePage/>}></Route>
  <Route path='/carowner-dashboard' element={<CarOwnerDashBoard/>}></Route> 
  <Route path='/customer-profile' element={<CustomerProfile/>}></Route>
  <Route path='/carowner-profile' element={<CarOwnerProfile/>}></Route>
  <Route path='/carowner-dashboard/vehicles' element={<CarOwnerProducts/>}></Route>
   </Routes>
    </>
  )
}

export default App;


// <AuthProvider>
    //   <BrowserRouter>
    //     <Routes>
          
    //       <Route path="/login" element={<LoginPage />} />
    //       <Route path="/unauthorized" element={<h1>Access Denied</h1>} />

      
    //       <Route element={<ProtectedRoute allowedRoles={["customer"]} />}>
    //         <Route path="/user-dashboard" element={<CustomerDashboard />} />
    //       </Route>
    //       <Route element={<ProtectedRoute allowedRoles={["carOwner"]} />}>
    //         <Route path="/owner-dashboard" element={<OwnerDashboard />} />
    //       </Route>
    //       <Route element={<ProtectedRoute allowedRoles={["customer"]} />}>
    //         <Route path="/customer-dashboard" element={<CustomerDashboard />} />
    //       </Route>

    //       <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
    //         <Route path="/admin-dashboard" element={<AdminDashboard />} />
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    // </AuthProvider>