import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle, faEllipsisH } from '@fortawesome/free-solid-svg-icons';


const Issue = ({ issue }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      key={issue.id}
      className="w-[500px] min-h-[110px] bg-white border-l-[5px] border-l-purple shadow-md mb-4"
    >
      <div className="w-full min-h-[110px] flex justify-between items-center py-4 px-8">
        <div>
          <p className="text-[17px] font-medium pr-8">{issue.name}</p>
          <span className="block text-[10px]">Date Issued: {issue.createdAt}</span>
        </div>
        <div className={`flex items-center h-[25px] bg-${issue.status === 'open' ? 'light-green' : 'light-red'} px-2 rounded-full`}>
          <span className={`capitalize font-medium text-[12px] pr-2 text-${issue.status === 'open' ? 'dark-green' : 'dark-red'}`}>
            {issue.status}
          </span>
          <FontAwesomeIcon
            icon={issue.status === 'open' ? faCheckCircle : faExclamationCircle}
            color={issue.status === 'open' ? "#275C2C" : "#8D2323"}
          />
        </div>
      </div>

      {isCollapsed && (
        <div>
          Issue information here
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