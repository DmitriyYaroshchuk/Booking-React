import { createSlice } from '@reduxjs/toolkit';

const sliceDestinations = createSlice({
  name: 'destinations',
  initialState: {
    items: [],
    loading: false,
    popup: false,
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setPopup: (state, action) => {
      state.popup = action.payload;
    },
  },
});
export const { setItems, setLoading, setPopup } = sliceDestinations.actions;
export const destinationsReducer = sliceDestinations.reducer;
export const selectors = Object.freeze({
  items: (state) => state.destinations.items,
  loading: (state) => state.destinations.loading,
  popup: (state) => state.destinations.popup,
});
