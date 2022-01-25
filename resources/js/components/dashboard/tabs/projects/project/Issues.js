import Issue from './issues/Issue';


const Issues = () => {
  const issues = [
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
  ];

  return (
    <div>
      {issues.map(issue => (
        <Issue issue={issue} />
      ))}
    </div>
  );
}

export default Issues;