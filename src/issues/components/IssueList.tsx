import { FC } from 'react';
import { Issue, State } from '../interfaces';
import { IssueItem } from './IssueItem';

interface Props {
  issues: Issue[];
  state?: State;
  onStateChange: (state?: State) => void;
}

export const IssueList: FC<Props> = ({ issues, state, onStateChange }) => (
  <div className='card border-white'>
    <div className='card-header bg-dark'>
      <ul className='nav nav-pills card-header-pills'>
        <li className='nav-item' onClick={() => onStateChange()}>
          <a className={`nav-link ${!state ? 'active' : ''}`}>All</a>
        </li>
        <li className='nav-item' onClick={() => onStateChange(State.Open)}>
          <a className={`nav-link ${state === State.Open ? 'active' : ''}`}>
            Open
          </a>
        </li>
        <li className='nav-item' onClick={() => onStateChange(State.Closed)}>
          <a className={`nav-link ${state === State.Closed ? 'active' : ''}`}>
            Closed
          </a>
        </li>
      </ul>
    </div>
    <div className='card-body text-dark'>
      {issues.map((issue) => (
        <IssueItem key={issue.id} issue={issue} />
      ))}
    </div>
  </div>
);
