import { useState } from 'react';
import { getInviteList, addGuest } from '../services/managementService';

export const useManagement = (eventId) => {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchGuests = async () => {
    setLoading(true);
    try {
      const data = await getInviteList(eventId);
      setGuests(data);
    } finally {
      setLoading(false);
    }
  };

  const createGuest = async (guestData) => {
    await addGuest(eventId, guestData);
    await fetchGuests(); // Refrescar lista
  };

  return { guests, loading, fetchGuests, createGuest };
};