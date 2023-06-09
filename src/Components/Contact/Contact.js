import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Form from './Form';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://seeherwireframe.my.canva.site/">
        seeher.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Contact() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
        Contact Us
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Address: Wits Art Museum Cnr Jorissen and, Bertha St, Johannesburg, 2001.'}
          
        </Typography>
        <Typography variant="body1"><br/>Phone: +27 11 717 1365
        <br/>
        Email : 1345397@students.wits.ac.za
        <br/>
        <br/>
        <br/>


        <section>
        <Form/>
        </section>
        
          </Typography>
      </Container>
      
    </Box>
  );
}