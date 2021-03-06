import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import useProject from './hook';

import SearchIssue from './SearchIssue';
import AddIssue from './AddIssue';
import Issues from './Issues';


const Project = ({ id, onGoBack }) => {
  const { project } = useProject(id);
  
  return (
    <div className="px-2 flex flex-col flex-1 h-screen">
      <p className="text-[50px] font-medium py-5 text-center">
        {project.name}
      </p>

      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col">
          <div
            className="w-[50px] h-[50px] ml-5 bg-light-gray flex justify-center items-center text-[25px] rounded-[50%] cursor-pointer"
            onClick={() => onGoBack()}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>

          <div className="flex lg:flex-col lg:items-center justify-evenly flex-wrap">
            <SearchIssue projectId={id} />
            <AddIssue projectId={id} />
          </div>

          <div className="border border-y-gray border-x-white my-[40px] py-2">
            <span className="font-medium text-[25px] md:text-center md:block">Issues</span>
          </div>

          <Issues projectId={project.id} />

        </div>
      </div>
    </div>
  );
}

export default Project;