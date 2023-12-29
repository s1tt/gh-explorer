import { createSlice } from '@reduxjs/toolkit';

interface IAppState {
  theme: 'dark' | 'light';
}

const initialState: IAppState = {
  theme: 'dark'
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeTheme(state) {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    }
  }
});

export default appSlice.reducer;
