import { useState, useEffect } from 'react';
import { getAllGuests } from '../services/guestService';

export const useGuests = () => {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGuests = async () => {
    try {
      setLoading(true);
      const data = await getAllGuests();
      setGuests(data);
    } catch (err) {
      setError("No se pudieron cargar los invitados");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGuests();
  }, []);

  return { guests, loading, error, refresh: fetchGuests };
};