import React, {useState} from 'react';
import Popup from './Popup';
function Instruction(){
    const [popupShow, setPopupShow] =useState(false);
    return (
        <>
    <h1 onClick={() => setPopupShow(true)}>Instruction</h1>
    <Popup
        show={popupShow} heading={"Instruction"} message={"There are many"}
        onHide={() => setPopupShow(false)}
      />
    </>
);
}
export default Instruction;

