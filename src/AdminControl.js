import Sidebar from "./Website/AdminDas/components/sidebar/Sidebar";

import Topbar from "./Website/AdminDas/components/topbar/Topbar";
import "./AdminControl.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React from "react";

import AdminRoute from "./Website/Auth/AdminRoute";
function App() {
    
  return (
    <Router>
      <AdminRoute path={["/hi", "/products", "/announcements","/users","/anouncements"]}>
        <Topbar/>
      </AdminRoute>
      
      <div className="container">
      <AdminRoute path={["/hi", "/products", "/announcements","/users","/anouncements","/contact-feed"]}>
      <Sidebar />
      </AdminRoute>
        
        <Switch>

          
        </Switch>
       
      </div>

    </Router>
  );
}

export default App;
