import { createSlice } from '@reduxjs/toolkit';

const eventSlice = createSlice({
  name: 'event',
  initialState: {
    sections: [],
    eventName: null,
    loading: false,
  },
  reducers: {
    setEventData: (state, action) => {
      state.sections = action.payload.sections;
      state.eventName = action.payload.eventName;
    },
    clearEventData: (state) => {
      state.sections = [];
      state.eventName = null;
    },
  },
});

export const { setEventData, clearEventData } = eventSlice.actions;
export default eventSlice.reducer;