import useProjects from './useProjectsHook';
import Project from './projects/Project';
import ProjectItem from './projects/ProjectItem';


const Projects = () =>  {
  const { projects, viewMode, setViewMode, projectId, viewProject, getProjects } = useProjects();

  if (viewMode) {
    return (
      <Project
        id={projectId}
        onGoBack={() => {
          setViewMode(false);
          getProjects();
        }}
      />
    );
  }

  return (
    <div className="px-[50px] py-[30px] flex flex-col flex-1 h-screen overflow-x-auto">
      <p className="text-[50px] font-medium mb-10">
        Projects
      </p>

      <div className="flex flex-col flex-1">

        {projects.length !== 0 ? (

          <div className="h-full">
            {projects.map(project => (
              <ProjectItem
                key={project.id}
                projectData={project}
                onViewProject={projectId => viewProject(projectId)}
              />
            ))}
          </div>

        ) : (

          <div className="bg-light-gray w-full h-full flex justify-center items-center">
            <span className="font-medium">No projects available</span>
          </div>

        )}

      </div>
    </div>
  );
}

export default Projects;