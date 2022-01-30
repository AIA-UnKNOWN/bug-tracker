import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import useIssue from './useIssueHook';
import OpenIssue from './issue/OpenIssue';
import ClosedIssue from './issue/ClosedIssue';


const Issue = ({ issue }) => {
  const {
    statuses,
    issueName,     setIssueName,
    assigneeId,    setAssigneeId,
    issueStatus,   setIssueStatus,
    isCollapsed,   setIsCollapsed,
    isSaved,       setIsSaved,
    updateIssue,   setNewIssueStatus,   newIssueStatus
  } = useIssue(issue);

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
            statuses={statuses}
            onIssueNameChange={e => {
              setIssueName(e.target.value);
              setIsSaved(false);
            }}
            onIssueStatusChange={newStatus => {
              setNewIssueStatus(newStatus);
              setIsSaved(false);
            }}
            onSave={() => {
              updateIssue({ id: issue.id, issueName, assigneeId, issueStatus: newIssueStatus });
              setIssueStatus(newIssueStatus);
              setIsSaved(true);
              setIsCollapsed(false);
            }}
            isSaved={isSaved}
          />

        ) : (

          <ClosedIssue
            onReOpenIssue={() => {
              updateIssue({ id: issue.id, issueName, assigneeId, issueStatus: statuses[1] });
              setIssueStatus(statuses[1]);
              setIsCollapsed(false);
            }}
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