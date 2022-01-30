import useIssues from './useIssuesHook';
import Issue from './issues/Issue';


const Issues = ({ projectId }) => {
  const { issues, setIssues, getIssues } = useIssues(projectId);

  if (issues.length === 0) return (
    <div className="bg-light-gray flex flex-1 flex-col justify-center items-center px-[50px] py-[30px]">
      <span className="font-medium">This project doesn't have any issue</span>
    </div>
  );

  return (
    <div>
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