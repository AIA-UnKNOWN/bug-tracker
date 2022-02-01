import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const MinMaxDateInput = ({ min, max }) => {
  return (
    <>
      <div className="w-1/2 bg-light-gray flex rounded-md">
        <div className="w-full flex items-center px-4">
          <input
            className="w-full font-medium custom-date bg-light-gray text-light-black outline-none text-[13px]"
            type={min.type}
            name={min.name}
            id={min.id}
            placeholder={min.placeholder}
            onChange={min.onChange}
          />
        </div>
      </div>
      <div className="w-1/2 bg-light-gray flex rounded-md ml-3">
        <div className="w-full flex items-center px-4">
          <input
            className="w-full font-medium custom-date bg-light-gray text-light-black outline-none text-[13px]"
            type={max.type}
            name={max.name}
            id={max.id}
            placeholder={max.placeholder}
            onChange={max.onChange}
          />
        </div>
      </div>
    </>
  );
}

export default MinMaxDateInput;