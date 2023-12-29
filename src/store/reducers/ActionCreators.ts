import { AppDispatch } from 'store';
import { GithubError } from './../../types/user';
import { appSlice } from './appReducer';
import { userSlice } from './userReducer';

export const fetchUser =
  (username: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.userFetching());
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();

      if (
        (data as GithubError).message &&
        (data as GithubError).documentation_url
      ) {
        const githubError = data as GithubError;
        dispatch(userSlice.actions.userFetchingError(githubError.message));
      } else {
        dispatch(userSlice.actions.userFetchingSuccess(data));
      }
    } catch (error) {
      console.log(error);
    }
  };

export const changeTheme = () => (dispatch: AppDispatch) => {
  dispatch(appSlice.actions.changeTheme());
};
