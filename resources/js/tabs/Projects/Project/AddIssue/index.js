import { faBug } from '@fortawesome/free-solid-svg-icons';

import useAddIssue from './hook';

import Input from '../form-inputs/Input';


const AddIssue = ({ projectId }) => {
  const { name, setName, addIssue } = useAddIssue(projectId);

  return (
    <div className="w-[500px] mt-[40px]">

      <div className="shadow-md p-[20px]">
        <div className="w-full h-[40px] bg-light-gray mx-auto rounded-md mb-3">
          <Input
            type="text"
            id="add-issue"
            name="add-issue"
            placeholder="Issue name"
            icon={faBug}
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <button
          className="bg-purple w-full h-[50px] text-[18px] text-white font-medium rounded-md mt-3"
          onClick={() => addIssue()}
        >Add</button>
      </div>
    </div>
  );
}

export default AddIssue;