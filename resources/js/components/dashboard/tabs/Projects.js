import useProjects from './useProjectsHook';
import AddProject from './projects/AddProject';
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
    <div className="flex flex-col h-screen px-2 pb-2">
      <p className="text-[50px] font-medium mx-auto my-5">
        Projects
      </p>

      <AddProject />

      <div className="flex flex-col flex-1 mt-[40px]">

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