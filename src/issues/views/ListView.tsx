import { useState } from 'react';
import { LoadingIcon } from '../../shared/components/LoadingIcon';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { useIssues } from '../hooks';
import type { State } from '../interfaces';

export const ListView = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const [state, setState] = useState<State>();
  const { issuesQuery, page, nextPage, prevPage } = useIssues({
    state,
    labels: selectedLabels,
  });

  const onLabelClicked = (labelName: string) => {
    selectedLabels.includes(labelName)
      ? setSelectedLabels(selectedLabels.filter((label) => label !== labelName))
      : setSelectedLabels([...selectedLabels, labelName]);
  };

  return (
    <div className='row mt-5'>
      <div className='col-8'>
        {issuesQuery.isLoading ? (
          <LoadingIcon />
        ) : (
          <IssueList
            issues={issuesQuery.data || []}
            state={state}
            onStateChange={(newState) => setState(newState)}
          />
        )}

        <div className='d-flex mt-2 justify-content-between align-items-center'>
          <button
            className='btn btn-outline-primary'
            onClick={prevPage}
            disabled={issuesQuery.isFetching || page === 1}
          >
            Prev
          </button>
          <span>{page}</span>
          <button
            className='btn btn-outline-primary'
            onClick={nextPage}
            disabled={issuesQuery.isFetching}
          >
            Next
          </button>
        </div>
      </div>

      <div className='col-4'>
        <LabelPicker
          selectedLabels={selectedLabels}
          onClick={(labelName) => onLabelClicked(labelName)}
        />
      </div>
    </div>
  );
};
