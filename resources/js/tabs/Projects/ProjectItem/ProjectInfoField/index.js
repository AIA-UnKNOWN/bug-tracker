import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import useProjectInfoField from './hook';

const ProjectInfoField = ({ project }) => {
  const {
    saveButton, removeButton,
    isCollapsed, setIsCollapsed,
    projectName, handleProjectNameChanges,
    update, remove
  } = useProjectInfoField(project);

  return (
    <div>
      {isCollapsed && (
        <div className="px-2 mb-3">
          <div className="w-full h-[40px] bg-light-gray mx-auto rounded-md mb-3">
            <div className="flex justify-between items-center w-full h-full px-4">
              <input
                className="flex flex-1 bg-light-gray outline-none custom-placeholder"
                type="text"
                value={projectName}
                onChange={handleProjectNameChanges}
              />
              <div className="w-[30px] h-[30px] flex justify-center items-center ml-2">
                <FontAwesomeIcon icon={faPen} color="#4F4F4F" />
              </div>
            </div>
          </div>
          <button
            className="bg-purple w-full h-[50px] text-[18px] text-white font-medium rounded-md"
            onClick={update}
          >
            {saveButton}
          </button>
          <button
            className="bg-dark-red w-full h-[50px] text-[18px] text-white font-medium rounded-md mt-1"
            onClick={remove}
          >
            {removeButton}
          </button>
        </div>
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

export default ProjectInfoField;