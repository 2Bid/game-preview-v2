import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  inputValue: "",
  currentFilters: [],
  currentResults : []
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateInputValue: (state, action) => {
     state.inputValue = action.payload
    },
    updateCurrentFilters: (state, action) => {
      state.currentFilters = [...state.currentFilters, action.payload]
    },
    updateCurrentResults: (state, action) => {
      state.currentFilters = [action.payload]
    }
  },
})

export const { updateInputValue, updateCurrentFilters, updateCurrentResults } = searchSlice.actions

export default searchSlice.reducer