import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import useAssignee from './useAssigneeHook';


const AssigneeDropdown = ({ issueId }) => {
  const {
    isCollapsed, setIsCollapsed,
    assignees, nonAssignees,
    assign, unAssign
  } = useAssignee(issueId);
  
  return (
    <div
      className="relative w-1/2 bg-light-gray flex rounded-md cursor-pointer"
      onClick={() => setIsCollapsed(!isCollapsed)}
    >
      <div className="w-full flex items-center px-4">
        <span
          className="w-full bg-light-gray text-[13px] capitalize"
        >Assignees</span>
        <div className="w-[30px] h-[30px] flex justify-center items-center ml-2">
          <FontAwesomeIcon icon={faAngleDown} color="#4F4F4F" />
        </div>
      </div>

      {isCollapsed && (
        <div className="absolute top-[110%] w-full bg-light-gray rounded-md overflow-hidden ">
          {assignees.map(assignee => (
            <label
              key={assignee.id}
              htmlFor={`assignee-${assignee.id}`}
              className="flex items-center text-[13px] h-[40px] px-4 capitalize cursor-pointer hover:bg-gray"
              onClick={e => e.stopPropagation()}
            >
              <input
                className="mr-2"
                type="checkbox"
                name={`assignee-${assignee.id}`}
                id={`assignee-${assignee.id}`}
                checked={assignee.isAssigned}
                onChange={() => unAssign(assignee.id)}
              />
              <span>{assignee.name}</span>
            </label>
          ))}
          {nonAssignees.map(nonAssignee => (
            <label
              key={nonAssignee.id}
              htmlFor={`non-assignee-${nonAssignee.id}`}
              className="flex items-center text-[13px] h-[40px] px-4 capitalize cursor-pointer hover:bg-gray"
              onClick={e => e.stopPropagation()}
            >
              <input
                className="mr-2"
                type="checkbox"
                name={`non-assignee-${nonAssignee.id}`}
                id={`non-assignee-${nonAssignee.id}`}
                checked={nonAssignee.isAssigned}
                onChange={() => assign(nonAssignee.id)}
              />
              <span>{nonAssignee.name}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default AssigneeDropdown;