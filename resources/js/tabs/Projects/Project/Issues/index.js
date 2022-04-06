import useIssues from './hook';
import Issue from './Issue';
import FetchLoading from '@animations/FetchLoading';

const Issues = ({ projectId }) => {
  const { issues, isLoading } = useIssues(projectId);

  return (
    <div className="md:w-[500px] md:mx-auto">
      {isLoading ? (
        <FetchLoading />
      ) : issues.length !== 0 ? issues.map(issue => (
        <Issue
          key={issue.id}
          issue={issue}
        />
      )) : (
        <div className="bg-light-gray flex flex-1 flex-col justify-center items-center px-[50px] py-[30px] mb-2">
          <span className="font-medium">This project doesn't have any issue</span>
        </div>
      )}
    </div>
  );
}

export default Issues;