import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getQuotes = createAsyncThunk("quotes/getQuotes", async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/quotes`)
    return res.data
})

export const quotesSlice = createSlice({
    name: "quotes",
    initialState: {
        items: [],
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: {
        [getQuotes.pending]: (state, action) => {
            state.status = "loading"
        },
        [getQuotes.fulfilled]: (state, action) => {
            state.status = "succeeded"
            state.items = action.payload
        },
        [getQuotes.rejected]: (state, action) => {
            state.status = "failed"
            state.error = action.error.message
        }
    }
})

export default quotesSlice.reducer