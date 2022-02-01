import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug, faUser, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import useSearchIssue from './useSearchIssue';

import Input from './form-inputs/Input';
import MinMaxDateInput from './form-inputs/MinMaxDateInput';
import StatusInput from './form-inputs/StatusInput';


const SearchIssue = ({ projectId, onResultsFound }) => {
  const { form, setForm, formErrors, runSearch } = useSearchIssue(projectId, onResultsFound);

  return (
    <div className="w-[500px] mt-[40px]">
      {Object.keys(formErrors).length > 0 && (
        <div className="bg-light-red p-[20px] rounded-md mb-3">
          <ul>
            {Object.keys(formErrors).map((error, index) => (
              <li
                className="text-[13px] text-dark-red font-semibold"
                key={index}
              >{"- " + formErrors[error]}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="shadow-md p-[20px]">
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
          <StatusInput
            status={form.status}
            onStatusChange={newStatus => setForm(data => ({ ...data, status: newStatus }))}
          />
        </div>

        <button
          className="bg-purple w-full h-[50px] text-[18px] text-white font-medium rounded-md mt-3"
          onClick={() => runSearch(projectId)}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchIssue;