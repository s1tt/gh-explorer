import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GithubUser } from 'types';

interface IUserState {
  user: GithubUser | null;
  isLoading: boolean;
  error: string;
}

const initialState: IUserState = {
  user: null,
  isLoading: false,
  error: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    userFetching(state) {
      state.isLoading = true;
      state.user = null;
    },
    userFetchingSuccess(state, action: PayloadAction<GithubUser>) {
      state.isLoading = false;
      state.user = action.payload;
      state.error = '';
    },
    userFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export default userSlice.reducer;
