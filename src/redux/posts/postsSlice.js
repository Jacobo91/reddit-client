import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'posts/loadPosts',
    async (endPoint) => {
        try{
            const response = await fetch(endPoint);
            const data = await response.json();
            return data
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }
)

export const postsSlice = createSlice(
    {
        name: 'posts',
        initialState: {
            posts: [],
            isLoading: false,
            hasError: false,
        },
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(fetchPosts.pending, (state) => {
                    state.isLoading= true;
                    state.hasError= false;
                })
                .addCase(fetchPosts.fulfilled, (state, action) => {
                    state.isLoading= false;
                    state.hasError= false;
                    state.posts= action.payload;
                })
                .addCase(fetchPosts.rejected, (state) => {
                    state.isLoading=false;
                    state.hasError=true;
                })
        }
    }
)

export const postsRedcuer = postsSlice.reducer;

export const postsSelector = state => state.posts.posts;


