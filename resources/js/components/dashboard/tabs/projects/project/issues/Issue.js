import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle, faEllipsisH, faPen, faAngleDown } from '@fortawesome/free-solid-svg-icons';


const Issue = ({ issue, onChangeIssueName }) => {
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
        <div className={`flex items-center h-[25px] ${issue.status === 'open' ? 'bg-light-green' : 'bg-light-red'} px-2 rounded-full`}>
          <span className={`capitalize font-medium text-[12px] pr-2 ${issue.status === 'open' ? 'text-dark-green' : 'text-dark-red'}`}>
            {issue.status}
          </span>
          <FontAwesomeIcon
            icon={issue.status === 'open' ? faCheckCircle : faExclamationCircle}
            color={issue.status === 'open' ? "#275C2C" : "#8D2323"}
          />
        </div>
      </div>

      {issue.status === 'open' && isCollapsed && (
        <div className="w-[460px] mx-auto mb-3">

          <div className="w-full h-[40px] bg-light-gray mx-auto rounded-md mb-3">
            <div className="flex justify-between items-center w-full h-full px-4">
              <input
                className="flex flex-1 bg-light-gray outline-none custom-placeholder"
                type="text"
                value={issue.name}
                onChange={e => onChangeIssueName(issue.id, e.target.value)}
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
            onClick={null}
          >
            Save
          </button>

        </div>
      )}

      {issue.status === 'closed' && isCollapsed && (
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