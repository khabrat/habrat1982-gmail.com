import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';


const MyPosts = (props) => {

    let postsElements = props.posts.map((p) =><Post message={p.message} like={p.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {        
        props.dispatch(addPostActionCreator())
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
        }

       

    return (
        <div className={s.postsBlock}>
           <h3>My Post</h3>
            <div>
                <div><textarea ref={newPostElement} onChange={onPostChange} 
                     value={props.newPostText} /></div>
                <div><button onClick={addPost}>Add Post</button></div>
            </div>
            
            <div className={s.post}>
                {postsElements}                
            </div>
        </div>       
    );
}

export default MyPosts;