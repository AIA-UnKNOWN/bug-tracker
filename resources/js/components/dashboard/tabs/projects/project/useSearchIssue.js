import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setIssues } from '@reducers/issuesSlice';


const useSearchIssue = projectId => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    issue: '',
    developer: '',
    min: null, max: null,
    status: 'open'
  });
  const [formErrors, setFormErrors] = useState({});

  const runSearch = projectId => {
    validate(errors => {
      if (errors) return;

      searchIssue(projectId);
    });
  }

  const searchIssue = async (projectId) => {
    const { issue, developer, status } = form;
    const response = await fetch(`/api/issues/${projectId}/search?issueName=${issue}&issueStatus=${status}&developer=${developer}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    });
    const results = await response.json();
    dispatch(setIssues({ issues: results }));
  }

  const validate = callback => {
    const errors = {};
    const SUFFIX_MESSAGE = 'field is required';

    if (form.issue.length === 0) errors.issue = `Issue ${SUFFIX_MESSAGE}`;
    if (form.developer.length === 0) errors.developer = `Developer ${SUFFIX_MESSAGE}`;

    setFormErrors(errors);
    callback(Object.keys(errors).length > 0);
  }

  return { form, setForm, formErrors, runSearch };
}

export default useSearchIssue;