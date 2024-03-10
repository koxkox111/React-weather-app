import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  location: '',
}

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setCurrentLocation: (state, action) => {
      if(action.payload !== '')
        state.location = action.payload
    },
  },
})

export const { setCurrentLocation } = locationSlice.actions

export default locationSlice.reducer