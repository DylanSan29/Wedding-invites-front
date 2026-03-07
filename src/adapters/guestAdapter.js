export const personalInvitationAdapter = (data) => ({
  id: data.Id,
  eventName: data.EventName,
  title: data.Title,
  description: data.Description,
  location: data.Location,
  date: new Date(data.Date).toLocaleDateString(),
  question: data.Question
});

export const guestListAdapter = (guests) => 
  guests.map(guest => ({
    id: guest.Id || guest.id,
    name: guest.Invitee || guest.full_name,
    status: guest.Status || guest.status,
    qrCode: guest.qr_code_token || null
  }));