import { configureStore } from "@reduxjs/toolkit";
import { subredditsReducer } from "../redux/subreddits/subredditsSlice";
import { postsRedcuer } from "../redux/posts/postsSlice";
import { searchTermReducer } from "../redux/searchterm/searchTermSlice";


export const store = configureStore({
    reducer: {
        subReddits: subredditsReducer,
        posts: postsRedcuer,
        searchTerm: searchTermReducer
    }
})