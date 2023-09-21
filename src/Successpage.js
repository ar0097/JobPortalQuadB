import React from 'react';
import { useSelector } from 'react-redux';
import { Document, Page, pdfjs } from 'react-pdf';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Successpage() {
  const data = useSelector((state)=>{return state.app.appData })
  const pdfUrl = data?.resume;
  const desiredWidth = 600;
  const desiredHeight = 0;
  const scale = desiredWidth / 8.5 / 72;

  return (
    <Paper elevation={3}  style={{
      padding: '20px', maxWidth: '800px', margin: '100px auto' 
    }}>
      <Typography variant="h4" gutterBottom>
        Form Submitted Successfully
      </Typography>
      <Typography variant="body1">
        Here is a preview of your application:
      </Typography>
      <Typography variant="body1">
        <strong>Name:</strong> {data?.name}
      </Typography>
      <Typography variant="body1">
        <strong>Email:</strong> {data?.email}
      </Typography>
      <Typography variant="body1">
        <strong>Cover Letter Note:</strong> {data?.coverLetter}
      </Typography>
      <Typography variant="body1">
        <strong>Resume Preview</strong>
      </Typography>
      <Document file={pdfUrl} onLoadSuccess={console.log}>
        <Page pageNumber={1} scale={scale} width={desiredWidth} height={desiredHeight} />
      </Document>
    </Paper>
  );
}

export default Successpage;
