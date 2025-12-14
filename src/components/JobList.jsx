import JobItem from './JobItem';

const JobList = ({ jobs, deleteJob, updateStatus }) => {
  if (jobs.length === 0) {
    return <div className="empty-state">No job applications yet. Start adding!</div>;
  }

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobItem 
          key={job.id} 
          job={job} 
          deleteJob={deleteJob}
          updateStatus={updateStatus} 
        />
      ))}
    </div>
  );
};

export default JobList;