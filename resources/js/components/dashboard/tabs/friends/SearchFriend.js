import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import useSearchFriend from './useSearchFriend';


const SearchFriend = () => {
  const { searchKey, setSearchKey, search } = useSearchFriend();

  return (
    <div className="w-[500px] shadow-md p-[20px]">

      <div className="w-full h-[40px] bg-light-gray mx-auto rounded-md mb-3">
        <div className="flex justify-between items-center w-full h-full px-4">
          <input
            className="flex flex-1 bg-light-gray outline-none custom-placeholder"
            type="text"
            name="developer"
            id="developer"
            placeholder="Search developer"
            value={searchKey}
            onChange={e => setSearchKey(e.target.value)}
          />
          <div className="w-[30px] h-[30px] flex justify-center items-center ml-2">
            <FontAwesomeIcon icon={faUser} color="#4F4F4F" />
          </div>
        </div>
      </div>

      <button
        className="bg-purple w-full h-[50px] text-[18px] text-white font-medium rounded-md mt-3"
        onClick={() => search()}
      >Search</button>
    </div>
  );
}

export default SearchFriend;