import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './assets/pages/LoginPage'
import CustomerDashboard from './assets/pages/CustomerDashBoard'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CustomerDashboard/>
    </>
  )
}

export default App
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