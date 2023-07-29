import { createSlice } from '@reduxjs/toolkit';

export const sliceHotels = createSlice({
  name: 'hotels',
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
export const {
  setItems,
  setLoading,
  setPopup,
} = sliceHotels.actions;
export const hotelsReducer = sliceHotels.reducer;
export const selectors = Object.freeze({
  items: (state) => state.hotels.items,
  loading: (state) => state.hotels.loading,
  popup: (state) => state.hotels.popup,
});
