import './style.css';

const FetchLoading = () => {
  return (
    <div className="flex flex-col flex-1 justify-center items-center mb-4">
      <div className="fetch-loading border-[7px] border-purple border-t-8
      border-t-white h-[40px] w-[40px] rounded-full shadow-md"></div>
    </div>
  );
}

export default FetchLoading;