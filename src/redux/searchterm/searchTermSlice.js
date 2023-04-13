import { createSlice } from '@reduxjs/toolkit';

export const searchbarSlice = createSlice(
    {
        name: 'searchTerm',
        initialState: '',
        reducers: {
            setSearchTerm: (state, action) => {
                return action.payload;
            },
            clearSearchTerm: (state, action) => {
                return "";
            }
        }
    }
);

export const selectSearchTerm = state => state.searchTerm;

export const searchTermReducer = searchbarSlice.reducer;

export const { setSearchTerm, clearSearchTerm } = searchbarSlice.actions;

