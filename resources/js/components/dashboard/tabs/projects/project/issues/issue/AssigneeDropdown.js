import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import useAssignee from './useAssigneeHook';


const AssigneeDropdown = ({ issueId, currentAssigneeId, onAssigneeIdChange }) => {
  const {
    isCollapsed,     setIsCollapsed,
    setAssigneeId,
    assignees,
    assignee,        setAssignee,
    getAssignees
  } = useAssignee(issueId, currentAssigneeId);

  return (
    <div
      className="relative w-1/2 bg-light-gray flex rounded-md cursor-pointer"
      onClick={() => setIsCollapsed(!isCollapsed)}
    >
      <div className="w-full flex items-center px-4">
        <span
          className="w-full bg-light-gray text-[13px] capitalize"
        >
          {Object.keys(assignee).length > 0 ? `${assignee.first_name} ${assignee.last_name}` : 'N/A'}
        </span>
        <div className="w-[30px] h-[30px] flex justify-center items-center ml-2">
          <FontAwesomeIcon icon={faAngleDown} color="#4F4F4F" />
        </div>
      </div>

      {isCollapsed && (
        <div className="absolute top-[110%] w-full bg-light-gray rounded-md overflow-hidden ">
          {assignees.map((assignee, index) => (
            <p
              key={assignee.id}
              className="flex items-center text-[13px] h-[40px] px-4 capitalize hover:bg-gray"
              onClick={() => {
                onAssigneeIdChange(assignee.id);
                setAssigneeId(assignee.id);
                setAssignee(assignee);
              }}
            >{`${assignee.first_name} ${assignee.last_name}`}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default AssigneeDropdown;