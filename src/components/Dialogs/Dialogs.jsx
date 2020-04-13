import React from 'react';
import s from './Dialogs.module.css';
import { addMessActionCreator, updateNewMessTextActionCreator} from '../../redux/dialogs-reduser';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {  
    
    let state  =  props.dialogs.dialogsPage;
    let dialogsElements  =  state.dialogs
    .map( d =>  <DialogItem name={d.name} id={d.id} />);
    // console.log(props.state.newMessText)
    let messagesElements  =  state.messages.map( m => <Message  message={m.message} />);
    

  

    // let newPostElement = React.createRef();

 
    let addMess = () => {            
        props.addMess()
    } 
    

    let onMessChange = (e) => {
        let text1 = e.target.value;
        props.updateNewMessText(text1)

    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
           {dialogsElements}
            </div>
            <div className={s.messages}>         
                 {messagesElements}  
             
            </div>

            <div>
                <div><textarea cols="60" rows="10" 
                value={state.newMessText}
                onChange={onMessChange} 
                
               /></div>
                    <div><button onClick={addMess}>Add Post</button></div>
            </div>
        </div>

    );
}

export default Dialogs;