
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
      state.isTeamMember = !action.payload; // Set team member status opposite of admin status
    },
    setTeamMemberStatus: (state, action) => {
      state.isTeamMember = action.payload;
      state.isAdmin = !action.payload; // Set admin status opposite of team member status
    },
  },
});

export const {setAdminStatus, setTeamMemberStatus } = isAdminSlice.actions;

export default isAdminSlice.reducer;
