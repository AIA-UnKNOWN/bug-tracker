import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import IssueForm from './project/IssueForm';
import Issues from './project/Issues';


const Project = ({ id, onGoBack }) => {
  return (
    <div className="px-[50px] py-[30px] flex flex-col flex-1 h-screen overflow-x-auto">
      <p className="text-[50px] font-medium mb-10">
        Project Name {id}
      </p>

      <div>
        <div>
          <div
            className="w-[50px] h-[50px] bg-light-gray flex justify-center items-center text-[25px] rounded-[50%] cursor-pointer"
            onClick={() => onGoBack()}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>

          <IssueForm />

          <div className="border border-y-gray border-x-white my-[40px] py-2">
            <span className="font-medium text-[25px]">Issues</span>
          </div>

          <Issues />
        </div>
      </div>
    </div>
  );
}

export default Project;