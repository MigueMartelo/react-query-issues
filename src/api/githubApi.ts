import axios from 'axios';

export const githubApi = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    Authorization:
      'Bearer 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',
  },
});
