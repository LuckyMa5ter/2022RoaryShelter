
import SignUp from './Website/Auth/Signup'
import Navbar from './Website/Nbar/Navbar'

import Home from './Website/Webpages/home'

import Login  from './Website/Auth/Login';
import { AuthProvider } from './Website/Auth/AuthContext';
import PrivateRoute from './Website/Auth/PrivateRoute';
import { BrowserRouter, Router,Route } from 'react-router-dom';
import Catalog from './Website/Webpages/Catalog';
import Announcements from './Website/Components/Announcements';
import Students from './Website/Admin/Students';
import Postprod from './Website/Admin/Postprod';
import Upload from './Website/Admin/Upload';
import AdminLogin from './Website/Admin/AdminLogin';
import AddTime from './Website/Admin/AddTime';
import viewOrder from './Website/Webpages/viewOrders';

export default function Customers() {
  
  return (
    <div>
      
    
    <AuthProvider>
    <BrowserRouter>
   <switch>
    <div>
      {/* <Navbar/> */}
      <Route exact path="/signup" component={SignUp}/>

      <Route exact path="/signin" component={Login}/>
      {/* <Route component={Loading} exact path="/yay"/> */}
      <Route component={Home} exact path='/'/>
      <PrivateRoute component={Catalog} exact path="/catalog"/>
      <Route component={Students} exact path="/students"></Route>
      <Route component={Postprod} exact path="/manage-posts"></Route>
      <Route component={Upload} exact path="/post"></Route>
      <Route component={AdminLogin} exact path="/admin"></Route>
      <Route component={AddTime} exact path="/timing"></Route>
      <Route component={viewOrder} exact path="/current-orders"></Route>

      




    
     </div>
     </switch>
     </BrowserRouter>
     
     </AuthProvider>
    
     </div>
  );
}

