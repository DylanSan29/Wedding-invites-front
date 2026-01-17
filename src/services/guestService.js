import api from '../api/axiosInstance';
import { guestAdapter } from '../adapters/guestAdapter';

export const getAllGuests = async () => {
  try {
   
    const { data } = await api.get('/guests'); 
    
    return data.map(guest => guestAdapter(guest));
  } catch (error) {
    console.error("Error fetching guests:", error);
    throw error;
  }
};