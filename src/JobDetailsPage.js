import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

function JobDetailsPage() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`https://jobs-xm1n.onrender.com/jobs?id=${id}`);
        console.log('API response:', response.data[0]);
        setJob(response.data[0]);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching job details:', error);
        setIsLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (isLoading) {
    return (
      <Container maxWidth="md">
        <CircularProgress />
      </Container>
    );
  }

  if (!job) {
    return (
      <Container maxWidth="md">
        <Typography variant="body1">Job not found.</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '10px', margin: '10px 0' }}>
        <img width={400} src={job.logo} alt={`${job.company} Logo`} />
        <div className="job-details" style={{marginTop: '0px'}}>
          <Typography variant="h5">{job.name}</Typography>
          <Typography variant="body1"><b>Salary:</b> {job.salary}</Typography>
          <Typography variant="body1"><b>City:</b> {job.city}</Typography>
          <Typography variant="body1"><b>Country:</b> {job.country}</Typography>
          <Typography variant="body1"><b>Language:</b> {job.language}</Typography>
          <Typography variant="body1"><b>Author:</b> {job.author}</Typography>
          <Link to="/apply">
            <Button style={{marginTop: '20px'}} variant="contained" color="primary" className="apply-btn">
              Apply
            </Button>
          </Link>
        </div>
      </Paper>
    </Container>
  );
}

export default JobDetailsPage;
