const  ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {    
        posts: [
            { id: 1, message: 'Hi, how are you', likesCount: 7 },
            { id: 2, message: 'Ok thanks', likesCount: 12 },
        ],
        newPostText: 'it-camasutra.com'
    }


const profileReducer = (state = initialState, action) => {    

    switch (action.type ) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';  
            return state;
        case  UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default :
        return state;  
    }
}
 
export let addPostActionCreator = () => {
    return {
        type : ADD_POST,
    }
}
export let updateNewPostTextActionCreator = (text) => {
    return {
        type : UPDATE_NEW_POST_TEXT,
        newText : text 
    }
}  


export default profileReducer;