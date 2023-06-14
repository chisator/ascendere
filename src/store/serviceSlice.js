import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    addService: (state, actions) => {
      
      state.value= actions.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { addService } = serviceSlice.actions;

export default serviceSlice.reducer;
