import { createSlice } from "@reduxjs/toolkit";

export const dressSlice = createSlice({
    name: 'dresses',
    initialState:{
        list:[
            { id: 1, title: 'Coat' },
            { id: 2, title: 'Pants' },
            { id: 3, title: 'Shirt' },
        ]
    },
    reducers:{},
})

export default dressSlice.reducer