import { faPen } from '@fortawesome/free-solid-svg-icons'

import useAddProject from './hook';
import Input from '@common/form-inputs/Input';


const AddProject = () => {
  const { name, setName, addProject, errorMessage, addButtonText } = useAddProject();

  return (
    <div className="w-full md:w-[500px] md:mx-auto">

      <div className="shadow-md p-[20px]">
        <div className="w-full h-[40px] bg-light-gray mx-auto rounded-md mb-3">
          <Input
            type="text"
            id="add-project-name"
            name="add-project-name"
            placeholder="Project name"
            icon={faPen}
            value={name}
            onChange={e => setName(e.target.value)}
          />
          {errorMessage && (
            <span className="block text-[12px] text-red ml-1 mb-2">Project name is required</span>
          )}
        </div>
        <button
          className="bg-purple w-full h-[50px] text-[18px] text-white font-medium rounded-md mt-3"
          onClick={() => addProject()}
        >
          {addButtonText}
        </button>
      </div>
    </div>
  );
}

export default AddProject;