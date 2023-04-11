import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


export const loadsubReddits = createAsyncThunk(
    'subReddits/getSubReddits',
    async() => {
        try{
            const response = await fetch('https://www.reddit.com/subreddits.json');
            const data = await response.json();
            console.log(`thunks: ${data}`)
            return data
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }
);

export const subredditsSlice = createSlice(
    {
        name: 'subReddits',
        initialState: {
            subReddits: [],
            isLoading: false,
            hasError: false
        },
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(loadsubReddits.pending, (state) => {
                    state.isLoading = true;
                    state.hasError = false;
                })
                .addCase(loadsubReddits.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.hasError = false;
                    state.subReddits = action.payload;
                    console.log(`extrareducer: ${action.payload}`)
                })
                .addCase(loadsubReddits.rejected, (state) => {
                    state.isLoading = false;
                    state.hasError = true;
                    state.subReddits = [];
                })
        }
    }
)

export const selectSubReddits = state => state.subReddits.subReddits;

export const subredditsReducer = subredditsSlice.reducer;

