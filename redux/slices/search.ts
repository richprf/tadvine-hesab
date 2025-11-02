import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialstate = {
    search: "",
    region: ""
}

const searchSlice = createSlice({
    name: "search",
    initialState: initialstate,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload
        },
        setRegion: (state, action: PayloadAction<string>) => {
      state.region = action.payload;
    },
    }
})

export const { setSearch , setRegion } = searchSlice.actions
export default searchSlice

