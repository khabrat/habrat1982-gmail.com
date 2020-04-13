import React from 'react';
import Dialogs from './Dialogs';

import { addMessActionCreator, updateNewMessTextActionCreator} from '../../redux/dialogs-reduser';



const DialogsContainer = (props) => {  
 

    let state  =  props.store.getState();
   
    let addMess = () => {            
        props.store.dispatch(addMessActionCreator())
    } 
    

    let onMessChange = (text1) =>   {      
        props.store.dispatch(updateNewMessTextActionCreator(text1))

    }


    return (
     <Dialogs 
     updateNewMessText = {onMessChange} 
      addMess = {addMess} 
      dialogs =  {state} />

    );
}

export default DialogsContainer;