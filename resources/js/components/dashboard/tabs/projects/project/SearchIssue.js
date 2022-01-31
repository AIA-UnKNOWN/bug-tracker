import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug, faUser, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import Input from './form-inputs/Input';
import MinMaxDateInput from './form-inputs/MinMaxDateInput';


const SearchIssue = () => {
  const [form, setForm] = useState({
    issue: '',
    developer: '',
    min: null, max: null,
    status: ''
  });

  const searchIssue = () => {
    console.log(form);
  }

  return (
    <div className="w-[500px] shadow-md p-[20px] mt-[40px]">

      <div className="w-full h-[40px] bg-light-gray mx-auto rounded-md mb-3">
        <Input
          type="text"
          id="issue-name"
          name="issue-name"
          placeholder="Search issue"
          value={form.issue}
          onChange={e => setForm(data => ({ ...data, issue: e.target.value }))}
          icon={faBug}
        />
      </div>
      <div className="w-full h-[40px] bg-light-gray mx-auto rounded-md mb-3">
        <Input
          type="text"
          name="developer"
          id="developer"
          placeholder="Developer"
          value={form.developer}
          onChange={e => setForm(data => ({ ...data, developer: e.target.value }))}
          icon={faUser}
        />
      </div>
      <div className="w-full h-[40px] mb-3 flex justify-between">
        <MinMaxDateInput
          min={{
            type: 'date',
            name: 'search-issue-min',
            id: 'search-issue-min',
            placeholder: 'Min',
            onChange: e => setForm(data => ({ ...data, min: e.target.value }))
          }}
          max={{
            type: 'date',
            name: 'search-issue-max',
            id: 'search-issue-max',
            placeholder: 'Max',
            onChange: e => setForm(data => ({ ...data, max: e.target.value }))
          }}
        />
      </div>
      <div className="w-full h-[40px] bg-light-gray mx-auto rounded-md mb-3">
        <Input
          type="text"
          name="status"
          id="status"
          placeholder="Status"
          value={form.status}
          onChange={e => setForm(data => ({ ...data, status: e.target.value }))}
          icon={faAngleDown}
        />
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

export default SearchIssue;