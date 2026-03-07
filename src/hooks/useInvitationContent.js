import { useState, useEffect } from 'react';
import { getEventSections } from '../services/invitationContentService';

export const useInvitationContent = (eventName) => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await getEventSections(eventName);
        setSections(data);
      } catch (err) {
        setError("Error al cargar el contenido del evento");
      } finally {
        setLoading(false);
      }
    };
    if (eventName) fetchContent();
  }, [eventName]);

  return { sections, loading, error };
};