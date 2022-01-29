import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


const AssigneeDropdown = () => {
  return (
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
  );
}

export default AssigneeDropdown;