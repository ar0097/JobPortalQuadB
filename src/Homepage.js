import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function Homepage() {
  const [language, setLanguage] = useState('');
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (language) {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `https://jobs-xm1n.onrender.com/jobs?language=${language}`
        );
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching job listings:', error);
        setJobs([]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Container maxWidth="md">
      <div className='search'>
        <Typography style={{ marginTop: '20px' }} variant="h4">Job Search</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Programming Language"
            variant="outlined"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            placeholder="Enter a language (e.g., JavaScript)"
            fullWidth
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '20px' }}
          >
            Search
          </Button>
        </form>

        {isLoading && <CircularProgress />}

        {!isLoading && jobs.length > 0 && (
          <div>
            <Typography variant="h5" style={{ marginTop: '20px' }}>Job Listings for {language}</Typography>
            <Grid container spacing={2}>
              {jobs.map((job) => (
                <Grid item xs={12} sm={6} md={4} key={job.id}>
                  <Link to={`/job/${job.id}`} className='job-card'>
                    <Card variant="outlined">
                      <CardContent>
                        <img style={{width: '50%'}} src={job.logo} alt={`${job.name} Logo`} />
                        <Typography variant="h6">{job.name}</Typography>
                        <Typography variant="body2">Language: {job.language}</Typography>
                        <Typography variant="body2">Salary: {job.salary}</Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </div>
        )}

        {!isLoading && jobs.length === 0 && (
          <div>
            <Typography variant="body1" style={{ marginTop: '20px' }}>No job listings found for {language}.</Typography>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Homepage;
