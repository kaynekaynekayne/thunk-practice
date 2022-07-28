import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sub from "date-fns/sub";
import axios from "axios";

const initialState={
    posts:[],
    status:'idle', //'idle' 'loading' 'succeeded' 'failed'
    error:null
}

export const postsSlice=createSlice({
    name:"post",
    initialState,
    reducers:{
        addPost:(state,action)=>{
            state.posts.push(action.payload);
        },
        addReactions:(state,action)=>{
            const {postId, reaction}=action.payload;
            const existingPost=state.posts.find(post=>post.id===postId)
            if(existingPost){
                existingPost.reactions[reaction]++
                //reaction: thumbsUp, wow, heart, rocket, coffee
            }
        }
    },
})

export const {addPost, addReactions}=postsSlice.actions;