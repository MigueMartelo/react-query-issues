import { FC } from 'react';
import { LoadingIcon } from '../../shared/components/LoadingIcon';
import { useLabels } from '../hooks/useLabels';

interface Props {
  selectedLabels: string[];
  onClick: (labelName: string) => void;
}

export const LabelPicker: FC<Props> = ({ selectedLabels, onClick }) => {
  const labelsQuery = useLabels();

  if (labelsQuery.isLoading)
    //! why isLoading and not isFetching (isLoading is just for the first time of the fetch, and isFetching is always that is getting Data)
    return <LoadingIcon />;

  return (
    <>
      {labelsQuery.data?.map((label) => (
        <span
          key={label.id}
          className={`badge rounded-pill m-1 label-picker ${
            selectedLabels.includes(label.name) ? 'label-active' : ''
          }`}
          style={{
            border: `1px solid #${label.color}`,
            color: `#${label.color}`,
          }}
          onClick={() => onClick(label.name)}
        >
          {label.name}
        </span>
      ))}
    </>
  );
};
