import { BASE_URL } from "./api"

export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/users/`);

  if (!response.ok) {
    throw new Error('something wrong with response from server')
  }

  return response.json();
} 
