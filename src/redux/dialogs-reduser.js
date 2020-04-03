const  ADD_MESSAGES = 'ADD_MESSAGES';
const  UPDATE_NEW_MESS_TEXT = 'UPDATE_NEW_MESS_TEXT';


const dialogsReducer = (state, action) => {

    switch (action.type ) {
        case  ADD_MESSAGES:
            let newMessages = {
                id: 5,
                message: state.newMessText
            };
            state.messages.push(newMessages);
            state.newMessText = ''; 
            return state;
        case  UPDATE_NEW_MESS_TEXT:
            state.newMessText = action.newText;
            return state;
        default :
        return state;  
    }
}


export let addMessActionCreator = () => {
    return {
        type : ADD_MESSAGES,
    }
}
export let updateNewMessTextActionCreator = (text1) => {
    return {
        type : UPDATE_NEW_MESS_TEXT, 
        newText : text1
    }
}   


export default dialogsReducer;