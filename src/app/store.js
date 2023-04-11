import { configureStore } from "@reduxjs/toolkit";
import { subredditsReducer } from "../redux/subreddits/subredditsSlice";


export const store = configureStore({
    reducer: {
        subReddits: subredditsReducer,
    }
})