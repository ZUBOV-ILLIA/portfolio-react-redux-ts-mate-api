import { Action, User } from "../react-app-env";

export const setUsersAction = (payload: User[]): Action => ({
  type: 'SET_USERS',
  payload,
});
