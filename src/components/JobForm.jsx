import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const JobForm = ({ addJob }) => {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState('Applied');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!company || !position) return;

    const newJob = {
      id: uuidv4(),
      company,
      position,
      status,
      date: new Date().toLocaleDateString()
    };

    addJob(newJob);
    setCompany('');
    setPosition('');
    setStatus('Applied');
  };

  return (
    <form onSubmit={handleSubmit} className="job-form">
      <input
        type="text"
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Applied">Applied</option>
        <option value="Interviewing">Interviewing</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
      <button type="submit">Add Job</button>
    </form>
  );
};

export default JobForm;