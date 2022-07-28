import { createSlice, } from "@reduxjs/toolkit";

const initialState=[ //authors, users
    {id:1, name:"Austin Butler"},
    {id:2, name:"Tom Cruise"},
    {id:3, name:"Tang Wei"},
];

export const usersSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        //
    }
})