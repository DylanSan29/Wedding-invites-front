export const guestAdapter = (guest) => ({
  id: guest.id,
  fullName: guest.full_name, 
  status: guest.status,
  qrCode: guest.qr_code_token,
  createdAt: new Date(guest.created_at).toLocaleDateString() 
});