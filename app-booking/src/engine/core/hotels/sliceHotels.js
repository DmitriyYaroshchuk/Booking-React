import { createSlice } from '@reduxjs/toolkit';

export const sliceHotels = createSlice({
  name: 'hotels',
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});
export const { setItems, setLoading } = sliceHotels.actions;
export const hotelsReducer = sliceHotels.reducer;
export const selectors = Object.freeze({
  items: (state) => state.hotels.items,
  loading: (state) => state.hotels.loading,
});
