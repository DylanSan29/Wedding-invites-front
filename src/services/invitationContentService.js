import invitationContentApi from '../api/invitationContentApi';
import { eventContentListAdapter } from '../adapters/invitationContentAdapter';

export const getEventSections = async (eventName) => {
  const { data } = await invitationContentApi.get(`/invite/${eventName}`);
  return eventContentListAdapter(data);
};