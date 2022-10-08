import { configureStore } from "@reduxjs/toolkit";

import charactersSliceReducer from "./charactersSlice";
import quotesSliceReducer from "./quotesSlice";

export const store = configureStore({
    reducer: {
        characters: charactersSliceReducer,
        quotes: quotesSliceReducer
    }
});
