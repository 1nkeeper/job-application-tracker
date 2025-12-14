import { FaTrash, FaEdit } from 'react-icons/fa';

const JobItem = ({ job, deleteJob, updateStatus }) => {
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'Interviewing': return '#f39c12';
      case 'Offer': return '#27ae60';
      case 'Rejected': return '#c0392b';
      default: return '#7f8c8d';
    }
  };

  return (
    <div className="job-item" style={{ borderLeft: `5px solid ${getStatusColor(job.status)}` }}>
      <div className="job-info">
        <h3>{job.company}</h3>
        <p>{job.position}</p>
        <small>{job.date}</small>
      </div>
      
      <div className="job-actions">
        <select 
          value={job.status} 
          onChange={(e) => updateStatus(job.id, e.target.value)}
          className="status-select"
        >
          <option value="Applied">Applied</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
        
        <button className="delete-btn" onClick={() => deleteJob(job.id)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default JobItem;