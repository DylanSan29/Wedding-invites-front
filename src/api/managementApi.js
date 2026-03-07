import managementApi from '../api/managementApi';
import { guestListAdapter } from '../adapters/guestAdapter';

export const getInviteList = async (eventId) => {
  const { data } = await managementApi.get(`/event/${eventId}/guests`);
  return guestListAdapter(data);
};

export const addGuest = async (eventId, guestData) => {
  const { data } = await managementApi.post(`/event/${eventId}/guests`, guestData);
  return data;
};