import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { collectAppData } from './actions';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

function ApplicationFormPage() { 
  const [formData, setFormData] = useState({ 
    name: '',
    email: '',
    coverLetter: '',
    resume: null,
  });
  

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      resume: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(collectAppData(formData));
    console.log("Data submitted to Redux store:", formData);
    navigate('/success');
  };

  return (
    <Container maxWidth="md" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', 
    }}>
      <div className="application-form">
        <Typography variant="h5">Job Application Form</Typography>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <TextField
              type="text"
              id="name"
              name="name"
              label="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </div>
          <div className="form-group">
            <TextField
              type="email"
              id="email"
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </div>
          <div className="form-group"  style={{marginTop: '20px'}}>
            <TextField
              id="coverLetter"
              name="coverLetter"
              label="Cover Letter Note"
              value={formData.coverLetter}
              onChange={handleInputChange}
              multiline
              minRows={4}
              required
              fullWidth
            />
          </div>
          <div className="form-group"  style={{marginTop: '20px'}}>
            <label htmlFor="resume"  style={{marginRight: '20px'}}>Resume (PDF)</label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf"
              onChange={handleFileChange}
              required
              fullWidth
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{marginTop: '20px'}}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default ApplicationFormPage;
