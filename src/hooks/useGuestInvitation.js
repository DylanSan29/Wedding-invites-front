import { useState, useEffect } from 'react';
import { getPersonalInvitation, registerDecision } from '../services/guestService';

export const useGuestInvitation = (guestId) => {
  const [invitation, setInvitation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getPersonalInvitation(guestId);
        setInvitation(data);
      } finally {
        setLoading(false);
      }
    };
    if (guestId) load();
  }, [guestId]);

  const confirm = async (rsvpData) => {
    // rsvpData mapea a rsvp_details: dietary_restrictions, will_attend, etc.
    return await registerDecision(guestId, rsvpData);
  };

  return { invitation, loading, confirm };
};