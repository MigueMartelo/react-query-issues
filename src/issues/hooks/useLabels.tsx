import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { sleep } from '../../helpers/sleep';
import { Label } from '../interfaces/label';

const getLabels = async (): Promise<Label[]> => {
  await sleep(2);
  const { data } = await githubApi.get<Label[]>('/labels');
  return data;
};

export const useLabels = () => {
  const labelsQuery = useQuery(['labels'], getLabels, {
    staleTime: 1000 * 60 * 60,
    // initialData: [], (data will be considerate fresh)
    // placeholderData: [], (data will be showing while the fetch finished)
    placeholderData: [
      {
        id: 739777675,
        node_id: 'MDU6TGFiZWw3Mzk3Nzc2NzU=',
        url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Component%20API',
        name: 'Component: Component API',
        color: 'd4c5f9',
        default: false,
      },
      {
        id: 69105383,
        node_id: 'MDU6TGFiZWw2OTEwNTM4Mw==',
        url: 'https://api.github.com/repos/facebook/react/labels/Browser:%20IE',
        name: 'Browser: IE',
        color: 'c7def8',
        default: false,
      },
    ],
  });

  return labelsQuery;
};
