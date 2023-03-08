import axios from 'axios';

export const githubApi = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    Authorization:
      'Bearer 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',
  },
});
