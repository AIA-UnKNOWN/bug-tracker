import ProjectInfoField from './ProjectInfoField';

const ProjectItem = ({ projectData, onViewProject }) => {
  return (
    <div className="border-l-[5px] border-l-purple shadow-md mb-5 cursor-pointer">
      <div
        className="flex justify-between items-center h-[100px] px-[25px]"
        onClick={() => onViewProject(projectData.id)}
      >
        <span className="font-medium text-[25px]">
          {projectData.name}
        </span>
        <div className="flex items-center w-20">
          <span className="text-[13px] font-semibold mr-2">
            Issues
          </span>
          <div className="flex justify-center items-center w-[30px] h-[30px] bg-gray rounded-[50%]">
            <span className="text-[13px] font-semibold text-white">
              {projectData.issues}
            </span>
          </div>
        </div>
      </div>
      <ProjectInfoField
        project={projectData}
      />
    </div>
  );
}

export default ProjectItem;