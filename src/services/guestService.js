import guestApi from '../api/guestApi';

export const getPersonalInvitation = async (guestId) => {
    const { data } = await guestApi.get(`/guests/${guestId}/invitation`);
    return data;
};

export const registerDecision = async (guestId, rsvpData) => {
    // Este reemplaza la lógica que tenías en rsvpService
    return await guestApi.post(`/guests/${guestId}/invitation`, rsvpData);
};