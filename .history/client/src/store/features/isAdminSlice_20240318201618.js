
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState = {
  isAdmin: false,
  isTeamMember: false,
};

export const isAdminSlice = createSlice({
  name: 'isAdmin',
  initialState,
  reducers: {
    setAdminStatus: (state, action) => {
      state.isAdmin = action.payload;
      state.isTeamMember = !action.payload; 
    },
    setTeamMemberStatus: (state, action) => {
      state.isTeamMember = action.payload;
      state.isAdmin = !action.payload; 
    },
  },
});

export const {setAdminStatus, setTeamMemberStatus } = isAdminSlice.actions;

export default isAdminSlice.reducer;
