import React from "react";
import './Popup.css';

function Popup(props){
  function closePopup(){
    props.handleClose();
  }
  return (
    <div className="popup-box">
        <div className="box">
          <div className="box-heading">
          <h1 className="box-hea">{props.heading}</h1>
          </div>
           <div className="box-content">
           <p className="box-para">{props.content}</p>
           </div>
           <div className="box-close">
             <a onClick={closePopup} className="box-btn-close">Close</a>
           </div>
           
        </div>
       
    </div>
  );
};

export default Popup;