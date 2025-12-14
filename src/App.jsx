import useLocalStorage from './hooks/useLocalStorage';
import JobForm from './components/JobForm';
import JobList from './components/JobList';
import './App.css';

function App() {
  const [jobs, setJobs] = useLocalStorage('job-tracker-data', []);

  const addJob = (job) => {
    setJobs([job, ...jobs]);
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const updateStatus = (id, newStatus) => {
    setJobs(jobs.map((job) => 
      job.id === id ? { ...job, status: newStatus } : job
    ));
  };

  return (
    <div className="container">
      <header>
        <h1>🚀 Job Application Tracker</h1>
      </header>
      <main>
        <JobForm addJob={addJob} />
        <JobList 
          jobs={jobs} 
          deleteJob={deleteJob} 
          updateStatus={updateStatus} 
        />
      </main>
    </div>
  );
};

export default App;