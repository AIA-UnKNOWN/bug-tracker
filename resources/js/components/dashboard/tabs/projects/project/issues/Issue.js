import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle, faEllipsisH, faPen, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import useIssue from './useIssueHook';
import OpenIssue from './issue/OpenIssue';
import ClosedIssue from './issue/ClosedIssue';


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

      {isCollapsed && (
        issueStatus === 'open' ? (
          <OpenIssue
            data={{ issueName, assigneeId, issueStatus }}
            onIssueNameChange={e => {
              setIssueName(e.target.value);
              setIsSaved(false);
            }}
            onSave={() => {
              updateIssue({ id: issue.id, issueName, assigneeId, issueStatus });
              setIsSaved(true);
            }}
            isSaved={isSaved}
          />
        ) : (
          <ClosedIssue
            onReOpenIssue={null}
          />
        )
      )}

      <div
        className="flex justify-center items-center w-full h-[10px] cursor-pointer hover:bg-light-gray"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <FontAwesomeIcon icon={faEllipsisH} color="#6816BB" />
      </div>
    </div>
  );
}

export default Issue;