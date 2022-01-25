import { useState } from 'react';

import Issue from './issues/Issue';


const Issues = () => {
  const [issues, setIssues] = useState([
    {
      id: 1,
      name: 'Navigation not working',
      createdAt: '11/17/2021',
      status: 'open',
      assignee: [
        'John Doe'
      ]
    },
    {
      id: 2,
      name: 'Navigation not workingasdfasfdsfas asdfhjaklsdhfjadjkshfklasd fkladjshfljksd fldshjfjkladshf kljsadhf asdjkfh asdjklfdjklsfhdjkls',
      createdAt: '11/17/2021',
      status: 'closed',
      assignee: [
        'John Doe'
      ]
    },
    {
      id: 3,
      name: 'Navigation not working',
      createdAt: '11/17/2021',
      status: 'open',
      assignee: [
        'John Doe'
      ]
    },
  ]);

  const onChangeIssueName = (id, newIssueName) => {
    const updateIssues = issues.map(issue => {
      if (issue.id === id) {
        issue.name = newIssueName;
      }
      return issue;
    });
    console.log(updateIssues)
    setIssues(updateIssues);
  }

  return (
    <div>
      {issues.map(issue => (
        <Issue
          key={issue.id}
          issue={issue}
          onChangeIssueName={(id, issueName) => onChangeIssueName(id, issueName)}
        />
      ))}
    </div>
  );
}

export default Issues;