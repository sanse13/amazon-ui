import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserDTO {
  user: string;
  email: string;
}

interface UserState {
  user: UserDTO | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<UserDTO>) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
