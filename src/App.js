import HomePage from './Website/Webpages/Homepage/App'
import SignUp from './Website/Auth/Signup'
import Navbar from './Website/Nbar/Navbar'
import Home from './Website/Webpages/home'
import Login  from './Website/Auth/Login';
import { AuthProvider } from './Website/Auth/AuthContext';
import PrivateRoute from './Website/Auth/PrivateRoute';
import PublicRoute from './Website/Auth/PublicRoute';
import { BrowserRouter, Router,Route } from 'react-router-dom';
import Catalog from './Website/Webpages/Catalog';
import viewOrder from './Website/Webpages/viewOrders';
import { BrowserRouter as Rooter, Switch } from 'react-router-dom';
import Customers from "./Student";
import AdminControl from "./AdminControl";
import Sigma from './Website/Webpages/Sigma';
import Aboutus from './Website/Webpages/Homepage/Aboutus';
import OldLogin from './Website/Webpages/OldLogin'
import Contact from './Website/Webpages/Contact';
import AdminRoute from './Website/Auth/AdminRoute';
import AnnounceMobile from './Website/Admin/Mobile/mannounce';
import MOrderList from './Website/Admin/Mobile/morders';
import MProductList from './Website/Admin/Mobile/mitems';
import MobileHome from './Website/Admin/Mobile/mhome';
import ErrorBoundary from './Website/Components/ErrorBoundary';
// import account from './Front-End/Post-Auth/Student-Side/Account-Information/account'
import { Announcement, MoreHoriz } from '@material-ui/icons';
import Account from './Front-End/Post-Auth/Student-Side/Account-Information/Account';
import AdminRedir from './adminhome';
import Homes from "./Website/AdminDas/pages/home/home";

import UserList from "./Website/AdminDas/pages/userList/UserList";
import ProductList from "./Website/AdminDas/pages/productList/ProductList";
import NewAnnou from "./Website/AdminDas/pages/Announcement/NewAnnou";
import Topbar from './Website/AdminDas/components/topbar/Topbar';
import Sidebar from './Website/AdminDas/components/sidebar/Sidebar';
import ContactFeed from "./Website/AdminDas/components/contact/ContactFeed";
export default function App() {
  
  return (
    <div>
      
    
    <AuthProvider>
      <ErrorBoundary>
    <BrowserRouter>
    <switch>
    
      <Navbar/>
      <Route exact path="/signin" component={OldLogin}/>
      <Route exact path="/signup" component={SignUp}/>
      <PublicRoute component={Home} exact path='/'/>
      <PublicRoute component={HomePage} exact path='/'/>
      <PrivateRoute component={Catalog} exact path="/catalog"/>
      <PrivateRoute component={viewOrder} exact path="/current-orders"/>
      <PublicRoute component={Aboutus} exact path="/about"/>
      <PrivateRoute component={Contact} exact path="/contact"/>
      <AdminRoute path={["/hi", "/products", "/announcements","/users","/anouncements"]}>
        <Topbar/>
      </AdminRoute>
      
      <div className="container">
      <AdminRoute path={["/hi", "/products", "/announcements","/users","/anouncements","/contact-feed"]}>
      <Sidebar />
      </AdminRoute>
      <AdminRoute component={UserList} exact path="/products"></AdminRoute>
      <AdminRoute component={AdminRedir} exact path="/admin"></AdminRoute>
      <AdminRoute component={ProductList} exact path="/users"></AdminRoute>
      <AdminRoute component={NewAnnou} exact path="/anouncements"></AdminRoute>
      <AdminRoute component={ContactFeed} exact path="/anouncements"></AdminRoute>
      <AdminRoute component={Homes} exact path="/hi"></AdminRoute>
      <AdminRoute component={ContactFeed} exact path="/contact-feed"></AdminRoute>
      </div>
      <AdminRoute component={AnnounceMobile} exact path="/mannounce"></AdminRoute>
      <AdminRoute component={MProductList} exact path="/mproduct"></AdminRoute>
      <AdminRoute component={MOrderList} exact path="/morder"></AdminRoute>
      <AdminRoute component={MobileHome} exact path="/mhome"></AdminRoute>
      
    <PrivateRoute component={Account} exact path="/account"></PrivateRoute>
    
      {/* <Route component={account} exact path="/account"></Route> */}
    
    

     


    
     
     </switch>
     </BrowserRouter>
     </ErrorBoundary>
     </AuthProvider>
     </div>
  );
}

