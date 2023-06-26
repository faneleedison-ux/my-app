import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: '#e6e6fa', // Light purple background color
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          Giving A Voice To The Silenced.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<FacebookIcon />}
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener"
          >
            Facebook
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<GitHubIcon />}
            href="https://github.com/"
            target="_blank"
            rel="noopener"
            sx={{ mx: 1 }}
          >
            GitHub
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<TwitterIcon />}
            href="https://twitter.com/"
            target="_blank"
            rel="noopener"
          >
            Twitter
          </Button>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
          {'Copyright © '}
          <Link color="inherit" href="https://seeherwireframe.my.canva.site/">
            seeher.com
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
