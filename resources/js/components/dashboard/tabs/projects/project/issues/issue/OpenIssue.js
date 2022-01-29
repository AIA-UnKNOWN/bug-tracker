import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faAngleDown } from '@fortawesome/free-solid-svg-icons';


const OpenIssue = ({ data, onIssueNameChange, onSave, isSaved }) => {
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
        <div className="w-1/2 bg-light-gray flex rounded-md">
          <div className="w-full flex items-center px-4">
            <input
              className="w-full bg-light-gray outline-none custom-placeholder"
              type="text"
              name="assignee"
              id="assignee"
              placeholder="Assignee"
            />
            <div className="w-[30px] h-[30px] flex justify-center items-center ml-2">
              <FontAwesomeIcon icon={faAngleDown} color="#4F4F4F" />
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-light-gray flex rounded-md ml-3">
          <div className="w-full flex items-center px-4">
            <input
              className="w-full bg-light-gray outline-none custom-placeholder"
              type="text"
              name="status"
              id="status"
              placeholder="Status"
            />
            <div className="w-[30px] h-[30px] flex justify-center items-center ml-2">
              <FontAwesomeIcon icon={faAngleDown} color="#4F4F4F" />
            </div>
          </div>
        </div>
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