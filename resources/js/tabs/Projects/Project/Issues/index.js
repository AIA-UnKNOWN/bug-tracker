import useIssues from './hook';
import Issue from './Issue';


const Issues = ({ projectId }) => {
  const { issues } = useIssues(projectId);

  if (issues.length === 0) return (
    <div className="bg-light-gray flex flex-1 flex-col justify-center items-center px-[50px] py-[30px] mb-2">
      <span className="font-medium">This project doesn't have any issue</span>
    </div>
  );

  return (
    <div className="md:w-[500px] md:mx-auto">
      {issues.map(issue => (
        <Issue
          key={issue.id}
          issue={issue}
        />
      ))}
    </div>
  );
}

export default Issues;