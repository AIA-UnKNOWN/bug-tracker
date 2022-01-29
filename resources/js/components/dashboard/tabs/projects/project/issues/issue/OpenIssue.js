import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

import AssigneeDropdown from './AssigneeDropdown';
import StatusDropdown from './StatusDropdown';


const OpenIssue = ({ data, statuses, onIssueNameChange, onIssueStatusChange, onSave, isSaved }) => {
  const { issueName, assigneeId, issueStatus } = data;

  return (
    <div className="w-[460px] mx-auto mb-3">

      <div className="w-full h-[40px] bg-light-gray mx-auto rounded-md mb-3">
        <div className="flex justify-between items-center w-full h-full px-4">
          <input
            className="flex flex-1 bg-light-gray outline-none custom-placeholder"
            type="text"
            value={issueName}
            onChange={onIssueNameChange}
          />
          <div className="w-[30px] h-[30px] flex justify-center items-center ml-2">
            <FontAwesomeIcon icon={faPen} color="#4F4F4F" />
          </div>
        </div>
      </div>
      <div className="w-full h-[40px] mb-3 flex justify-between">
        <AssigneeDropdown />
        <StatusDropdown
          currentStatus={issueStatus}
          statuses={statuses}
          onStatusChange={newStatus => onIssueStatusChange(newStatus)}
        />
      </div>
      <button
        className="bg-purple w-full h-[50px] text-[18px] text-white font-medium rounded-md"
        onClick={onSave}
      >
        {isSaved ? 'Saved!' : 'Save'}
      </button>

    </div>
  );
}

export default OpenIssue;