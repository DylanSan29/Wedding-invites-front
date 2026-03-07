// src/api/invitationContentApi.js
import axios from 'axios';
import { API_URLS } from '../Config';

const invitationContentApi = axios.create({
  baseURL: API_URLS.INVITATION_CONTENT,
  headers: {
    'Content-Type': 'application/json',
  },
});

invitationContentApi.defaults.timeout = 10000; 

export default invitationContentApi;