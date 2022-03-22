const ProjectItem = ({ projectData, onViewProject }) => {
  return (
    <div
      className="flex justify-between items-center h-[100px] border-l-[5px] border-l-purple px-[25px] shadow-md mb-5 cursor-pointer"
      onClick={() => onViewProject(projectData.id)}
    >
      <span className="font-medium text-[25px]">{projectData.name}</span>
      <div className="flex items-center w-20">
        <span className="text-[13px] font-semibold mr-2">Issues</span>
        <div className="flex justify-center items-center w-[30px] h-[30px] bg-gray rounded-[50%]">
          <span className="text-[13px] font-semibold text-white">{projectData.issues}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;