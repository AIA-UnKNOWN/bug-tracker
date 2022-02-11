import { faPen } from '@fortawesome/free-solid-svg-icons'

import useAddProject from './useAddProjectHook';
import Input from './project/form-inputs/Input';


const AddProject = () => {
  const { name, setName, addProject } = useAddProject();

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
        </div>
        <button
          className="bg-purple w-full h-[50px] text-[18px] text-white font-medium rounded-md mt-3"
          onClick={() => addProject()}
        >Add</button>
      </div>
    </div>
  );
}

export default AddProject;