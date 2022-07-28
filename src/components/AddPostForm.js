import React,{useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { addPost } from '../features/postsSlice';

const AddPostForm = (props) => {
    
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    const [authorId,setAuthorId]=useState("");

    const posts=useSelector(state=>state.posts);
    const authors=useSelector(state=>state.users);

    const dispatch=useDispatch();

    const onSubmit=(e)=>{
        e.preventDefault();
        dispatch(addPost({
            id:Date.now(), 
            title, 
            content,
            authorId:parseInt(authorId),
            date:new Date().toISOString(),
            reactions:{
                thumbsUp:0,
                wow:0,
                heart:0,
                rocket:0,
                coffee:0
            }
        }))
        setTitle("");
        setContent("");
    }

    return(
        <form>
            <label htmlFor='title'>title </label>
            <input 
                id="title" 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}/>
            &nbsp;
            <label htmlFor="content">content </label>
            <input 
                id="content"
                value={content}
                onChange={(e)=>setContent(e.target.value)}    
            />
            <br/>
            
            <select onChange={(e)=>setAuthorId(e.target.value)}>
                <option value=""></option>
                {authors.map(aut=>
                    <option value={aut.id} key={aut.id}>
                        {aut.id} {aut.name}
                    </option>
                )}
            </select>

            <button 
                type="submit" 
                onClick={onSubmit}
                disabled={!(Boolean(title) && Boolean(content) && Boolean(authorId))}
            >add</button>
        </form>
    )
};

export default AddPostForm;