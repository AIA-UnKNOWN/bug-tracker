import { useState } from 'react';
import { useSelector } from 'react-redux';

import Project from './projects/Project';


const Projects = () =>  {
  const projects = useSelector(state => state.projects.projects);

  const [viewMode, setViewMode] = useState(true); // default false
  const [projectId, setProjectId] = useState(0);

  const viewProject = id => {
    setProjectId(id);
    setViewMode(true);
  }

  if (viewMode) {
    return (
      <Project
        id={projectId}
        onGoBack={() => setViewMode(false)}
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
              <div
                key={project.id}
                className="flex justify-between items-center w-[400px] h-[100px] border-l-[5px] border-l-purple px-[25px] shadow-md mb-5 cursor-pointer"
                onClick={() => viewProject(project.id)}
              >
                <span className="font-medium text-[25px]">{project.name}</span>
                <div className="flex items-center w-20">
                  <span className="text-[13px] font-semibold mr-2">Issues</span>
                  <div className="flex justify-center items-center w-[30px] h-[30px] bg-gray rounded-[50%]">
                    <span className="text-[13px] font-semibold text-white">{project.issues}</span>
                  </div>
                </div>
              </div>
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