import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle, faEllipsisH, faPen, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import useIssue from './useIssueHook';


const Issue = ({ issue }) => {
  const { issueName, setIssueName } = useIssue(issue);
  const { assigneeId, setAssigneeId } = useIssue(issue);
  const { issueStatus, setIssueStatus } = useIssue(issue);
  const { isCollapsed, setIsCollapsed } = useIssue(issue);
  const { isSaved, setIsSaved } = useIssue(issue);
  const { updateIssue } = useIssue(issue);

  return (
    <div
      className="w-[500px] min-h-[110px] bg-white border-l-[5px] border-l-purple shadow-md mb-4"
      onKeyPress={e => {
        if (e.key === 'Enter') {
          updateIssue({ id: issue.id, issueName, assigneeId, issueStatus });
          setIsSaved(true);
        } 
      }}
    >
      <div className="w-full min-h-[110px] flex justify-between items-center py-4 px-8">
        <div>
          <p className="text-[17px] font-medium pr-8">{issueName}</p>
          <span className="block text-[10px]">Date Issued: {issue.created_at || 'N/A'}</span>
        </div>
        <div className={`flex items-center h-[25px] ${issueStatus === 'open' ? 'bg-light-green' : 'bg-light-red'} px-2 rounded-full`}>
          <span className={`capitalize font-medium text-[12px] pr-2 ${issueStatus === 'open' ? 'text-dark-green' : 'text-dark-red'}`}>
            {issueStatus}
          </span>
          <FontAwesomeIcon
            icon={issueStatus === 'open' ? faCheckCircle : faExclamationCircle}
            color={issueStatus === 'open' ? "#275C2C" : "#8D2323"}
          />
        </div>
      </div>

      {issueStatus === 'open' && isCollapsed && (
        <div className="w-[460px] mx-auto mb-3">

          <div className="w-full h-[40px] bg-light-gray mx-auto rounded-md mb-3">
            <div className="flex justify-between items-center w-full h-full px-4">
              <input
                className="flex flex-1 bg-light-gray outline-none custom-placeholder"
                type="text"
                value={issueName}
                onChange={e => {
                  setIssueName(e.target.value);
                  setIsSaved(false);
                }}
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
            onClick={() => {
              updateIssue({ id: issue.id, issueName, assigneeId, issueStatus });
              setIsSaved(true);
            }}
          >
            {isSaved ? 'Saved!' : 'Save'}
          </button>

        </div>
      )}

      {issueStatus === 'closed' && isCollapsed && (
        <div className="w-[460px] mx-auto mb-3">
          <button
            className="bg-purple w-full h-[50px] text-[18px] text-white font-medium rounded-md"
            onClick={null}
          >
            Re-open
          </button>
        </div>
      )}

      <div
        className="flex justify-center items-center w-full h-[10px] cursor-pointer hover:bg-light-gray"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <FontAwesomeIcon
          icon={faEllipsisH}
          color="#6816BB"
        />
      </div>
    </div>
  );
}

export default Issue;