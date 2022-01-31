import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Input = ({ type, name, id, placeholder, value, onChange, icon }) => {
  return (
    <div className="flex justify-between items-center w-full h-full px-4">
      <input
        className="flex flex-1 bg-light-gray outline-none custom-placeholder"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div className="w-[30px] h-[30px] flex justify-center items-center ml-2">
        <FontAwesomeIcon icon={icon} color="#4F4F4F" />
      </div>
    </div>
  );
}

export default Input;