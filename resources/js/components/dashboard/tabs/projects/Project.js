import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import useProject from './useProjectHook';

import SearchIssue from './project/SearchIssue';
import AddIssue from './project/AddIssue';
import Issues from './project/Issues';


const Project = ({ id, onGoBack }) => {
  const { project } = useProject(id);
  
  return (
    <div className="px-[50px] py-[30px] flex flex-col flex-1 h-screen">
      <p className="text-[50px] font-medium mb-10">
        {project.name}
      </p>

      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col">
          <div
            className="w-[50px] h-[50px] bg-light-gray flex justify-center items-center text-[25px] rounded-[50%] cursor-pointer"
            onClick={() => onGoBack()}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>

          <div className="flex justify-evenly flex-wrap">
            <SearchIssue projectId={id} />
            <AddIssue projectId={id} />
          </div>

          <div className="border border-y-gray border-x-white my-[40px] py-2">
            <span className="font-medium text-[25px]">Issues</span>
          </div>

          <Issues projectId={project.id} />

        </div>
      </div>
    </div>
  );
}

export default Project;