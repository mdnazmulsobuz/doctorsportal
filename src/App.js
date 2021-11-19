import { Routes } from 'react-router';
import { BrowserRouter, Route,  } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import Payment from './Pages/Dashboard/Payment/Payment';
import Home from './Pages/Home/Home/Home';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path ='/' element={<Home />}>
          </Route>
          <Route path ='/home' element={<Home />}>
          </Route>
          <Route path ='/appointment' element={<PrivateRoute><Appointment /></PrivateRoute>}>
          </Route>
          <Route path ='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}>
            <Route path='/dashboard' element={<DashboardHome />}>
                  </Route>
                  <Route path={`/dashboard/payment/:appointmentId`} 
                  element={<Payment></Payment>}>
                  </Route>
                  <Route path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>}>
                  </Route>
                  <Route path={`/dashboard/addDoctor`} element={<AdminRoute><AddDoctor></AddDoctor></AdminRoute>}>
                  </Route>
            </Route>
          <Route path ='/login' element={<Login />}>
          </Route>
          <Route path ='/register' element={<Register />}>
          </Route>
        </Routes>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
