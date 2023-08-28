import axios from 'axios';

const BASE_URL = 'https://xandemon-backend-server.netlify.app/api/bard-ai';

export const getPromptResponse = ({prompt}: {prompt: string}) => {
  const response = axios.get(BASE_URL + '?prompt=' + prompt);
  return response;
};
