import axios from 'axios';

export const isAuthenticated = async () => {
  try {
    await axios.get('/dogs/breeds');
    return true;
  } catch {
    return false;
  }
};
