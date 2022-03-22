import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


const StatusDropdown = ({ currentStatus, statuses, onStatusChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    setStatus(currentStatus);
  }, []);

  return (
    <div
      className="relative w-1/2 bg-light-gray flex rounded-md ml-3 cursor-pointer"
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
                setStatus(status);
              }}
            >{status}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default StatusDropdown;