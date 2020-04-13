const  ADD_MESSAGES = 'ADD_MESSAGES';
const  UPDATE_NEW_MESS_TEXT = 'UPDATE_NEW_MESS_TEXT';


let initialState = {
    messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Ok thanks" }
    ],
    dialogs: [
        { id: 1, name: "Vasya" },
        { id: 2, name: "Petia" },
        { id: 3, name: "Masha" },
        { id: 4, name: "Dasha" }
    ],
    newMessText: 'YoYoYo'
}


const dialogsReducer = (state = initialState, action) => {

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