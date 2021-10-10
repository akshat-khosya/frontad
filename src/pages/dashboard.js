import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Popup from '../components/Popup';
function Dashboard(props){
    function logout(){
            props.currentLogin();
    }
    return(
       
        <>
      
        
        <h1 onClick={logout}>Logout</h1>
       

        </>
    )
}


export default Dashboard;
