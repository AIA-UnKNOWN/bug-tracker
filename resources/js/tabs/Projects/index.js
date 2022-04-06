import useProjects from './hook';
import AddProject from './AddProject';
import Project from './Project';
import ProjectItem from './ProjectItem';
import FetchLoading from '@animations/FetchLoading';

const Projects = () =>  {
  const { projects, isLoading, viewMode, setViewMode, projectId, viewProject, getProjects } = useProjects();

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
      <div className="flex flex-col flex-1 mt-[40px] md:w-[500px] md:mx-auto">
        {isLoading ? (
          <FetchLoading />
        ) : projects.length !== 0 ? (
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