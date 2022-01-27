import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug, faUser, faAngleDown, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';


const IssueForm = () => {
  const [form, setForm] = useState({
    issue: '',
    developer: '',
    min: null, max: null,
    status: ''
  });

  const searchIssue = () => {
    alert(form.issue);
  }

  return (
    <div className="w-[500px] shadow-md p-[20px] mt-[40px]">

      <div className="w-full h-[40px] bg-light-gray mx-auto rounded-md mb-3">
        <div className="flex justify-between items-center w-full h-full px-4">
          <input
            className="flex flex-1 bg-light-gray outline-none custom-placeholder"
            type="text"
            name="issue-name"
            id="issue-name"
            placeholder="Search issue"
            value={form.issue}
            onChange={e => setForm(data => ({ ...data, issue: e.target.value }))}
          />
          <div className="w-[30px] h-[30px] flex justify-center items-center ml-2">
            <FontAwesomeIcon icon={faBug} color="#4F4F4F" />
          </div>
        </div>
      </div>
      <div className="w-full h-[40px] bg-light-gray mx-auto rounded-md mb-3">
        <div className="flex justify-between items-center w-full h-full px-4">
          <input
            className="flex flex-1 bg-light-gray outline-none custom-placeholder"
            type="text"
            name="developer"
            id="developer"
            placeholder="Developer"
            value={form.developer}
            onChange={e => setForm(data => ({ ...data, developer: e.target.value }))}
          />
          <div className="w-[30px] h-[30px] flex justify-center items-center ml-2">
            <FontAwesomeIcon icon={faUser} color="#4F4F4F" />
          </div>
        </div>
      </div>
      <div className="w-full h-[40px] mb-3 flex justify-between">
        <div className="w-1/2 bg-light-gray flex rounded-md">
          <div className="w-full flex items-center px-4">
            <input
              className="w-full bg-light-gray outline-none custom-placeholder"
              type="text"
              name="min"
              id="min"
              placeholder="Min"
            />
            <div className="w-[30px] h-[30px] flex justify-center items-center">
              <FontAwesomeIcon icon={faCalendarAlt} color="#4F4F4F" />
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-light-gray flex rounded-md ml-3">
          <div className="w-full flex items-center px-4">
            <input
              className="w-full bg-light-gray outline-none custom-placeholder"
              type="text"
              name="max"
              id="max"
              placeholder="Max"
            />
            <div className="w-[30px] h-[30px] flex justify-center items-center">
              <FontAwesomeIcon icon={faCalendarAlt} color="#4F4F4F" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[40px] bg-light-gray mx-auto rounded-md mb-3">
        <div className="flex justify-between items-center w-full h-full px-4">
          <input
            className="flex flex-1 bg-light-gray outline-none custom-placeholder"
            type="text"
            name="status"
            id="status"
            placeholder="Status"
            value={form.status}
            onChange={e => setForm(data => ({ ...data, status: e.target.value }))}
          />
          <div className="w-[30px] h-[30px] flex justify-center items-center ml-2">
            <FontAwesomeIcon icon={faAngleDown} color="#4F4F4F" />
          </div>
        </div>
      </div>

      <button
        className="bg-purple w-full h-[50px] text-[18px] text-white font-medium rounded-md mt-3"
        onClick={() => searchIssue()}
      >
        Search
      </button>
    </div>
  );
}

export default IssueForm;