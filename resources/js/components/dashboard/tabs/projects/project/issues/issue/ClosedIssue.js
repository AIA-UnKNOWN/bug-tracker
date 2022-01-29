const ClosedIssue = ({ onReOpenIssue }) => {
  return (
    <div className="w-[460px] mx-auto mb-3">
      <button
        className="bg-purple w-full h-[50px] text-[18px] text-white font-medium rounded-md"
        onClick={onReOpenIssue}
      >
        Re-open
      </button>
    </div>
  );
}

export default ClosedIssue;