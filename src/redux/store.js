// import dialogsReducer from  './dialogs-reduser';
// import profileReducer from  './profile-reducer';


// let store = {
//     _state: { 
//         profilePage: {
//             posts: [
//                 { id: 1, message: 'Hi, how are you', likesCount: 7 },
//                 { id: 2, message: 'Ok thanks', likesCount: 12 },
//             ],
//             newPostText: 'it-camasutra.com'

//         },

//         dialogsPages: {

//             messages: [
//                 { id: 1, message: "Hi" },
//                 { id: 2, message: "How are you" },
//                 { id: 3, message: "Yo" },
//                 { id: 4, message: "Ok thanks" }
//             ],
//             dialogs: [
//                 { id: 1, name: "Vasya" },
//                 { id: 2, name: "Petia" },
//                 { id: 3, name: "Masha" },
//                 { id: 4, name: "Dasha" }
//             ],
//             newMessText: 'YoYoYo'
//         },
//     },
    
//     _callSubscriber()  {
//         console.log('hihi')
//     },    
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {  
//         this._callSubscriber = observer;
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPages = dialogsReducer(this._state.dialogsPages, action);
//         this._callSubscriber(this._state); 
//    }
// }

 
 


// export default store;