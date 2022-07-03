/// <reference types="react-scripts" />

export interface User {
  id: number,
  name: string,
  email: string,
  phone: string,
  username: string,
  website: string,
  createdAt: string,
  updatedAt: string,
}

export interface State {
  users: User[],
}

export interface Action {
  type: string,
  payload: any,
}