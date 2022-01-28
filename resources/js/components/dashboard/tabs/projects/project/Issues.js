import useIssues from './useIssuesHook';
import Issue from './issues/Issue';


const Issues = ({ projectId }) => {
  const { issues, setIssues, getIssues } = useIssues(projectId);

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