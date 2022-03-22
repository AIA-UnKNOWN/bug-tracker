import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


const StatusInput = ({ status, onStatusChange }) => {
  const statuses = ['closed', 'open'];
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className="relative w-full h-full rounded-md bg-light-gray flex cursor-pointer"
      onClick={() => setIsCollapsed(!isCollapsed)}
    >
      <div className="w-full flex items-center px-4">
        <span
          className="w-full bg-light-gray text-[13px] capitalize"
        >{status}</span>
        <div className="w-[30px] h-[30px] flex justify-center items-center ml-2">
          <FontAwesomeIcon icon={faAngleDown} color="#4F4F4F" />
        </div>
      </div>

      {isCollapsed && (
        <div className="absolute top-[110%] w-full bg-light-gray rounded-md overflow-hidden ">
          {statuses.map((status, index) => (
            <p
              key={status}
              className="flex items-center text-[13px] h-[40px] px-4 capitalize hover:bg-gray"
              onClick={() => {
                onStatusChange(status);
                setIsCollapsed(false);
              }}
            >{status}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default StatusInput;