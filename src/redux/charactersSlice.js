import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let limit = 12;

export const getCharacters = createAsyncThunk('characters/getCharacters', async (page) => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?limit=${limit}&offset=${page * limit}`)
    return res.data
})

export const charactersSlice = createSlice({
    name: "characters",
    initialState: {
        items: [],
        status: "idle",
        error: null,
        page: 0,
        hasNextPage: true
    },
    reducers: {},
    extraReducers: {
        [getCharacters.pending]: (state) => {
            state.status = 'loading'

        },
        [getCharacters.fulfilled]: (state, action) => {
            if (state.page === 1) {

                state.items = [...action.payload]
            } else {

                state.items = [...state.items, ...action.payload]
            }
            state.page += 1
            state.status = 'succeeded'

            if (action.payload.length < 12) {
                state.hasNextPage = false
            }
        },
        [getCharacters.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export default charactersSlice.reducer;