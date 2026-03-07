import managementApi from '../api/managementApi';

export const getInviteList = async (eventId) => {
    const { data } = await managementApi.get(`/event/${eventId}/guests`);
    return data;
};

export const addGuest = async (eventId, guestData) => {
    return await managementApi.post(`/event/${eventId}/guests`, guestData);
};