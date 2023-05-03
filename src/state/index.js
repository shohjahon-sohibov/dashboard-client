import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: 'dark'
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "ligth" ? "dark" : "light"
        }
    }
})

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer