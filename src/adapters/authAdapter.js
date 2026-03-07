export const userAdapter = (data) => ({
  token: data.token,
  user: {
    id: data.user_id,
    email: data.email,
    role: data.role
  }
});