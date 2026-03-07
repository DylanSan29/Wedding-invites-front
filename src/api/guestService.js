import guestApi from './guestService';
import { personalInvitationAdapter } from '../adapters/guestAdapter';

export const getPersonalInvitation = async (guestId) => {
  const { data } = await guestApi.get(`/guests/${guestId}/invitation`);
  return personalInvitationAdapter(data);
};

export const registerDecision = async (guestId, rsvpData) => {
  // rsvpData debe coincidir con rsvp_details: will_attend, dietary_restrictions, etc.
  return await guestApi.post(`/guests/${guestId}/invitation`, rsvpData);
};