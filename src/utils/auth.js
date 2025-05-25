import axios from 'axios';
import { getBreeds } from '../api/fetchAPI';

export const isAuthenticated = async () => {
  try {
    await getBreeds();
    return true;
  } catch {
    return false;
  }
};
