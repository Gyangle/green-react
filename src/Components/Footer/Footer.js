import * as React from 'react';
import { Box, Typography, Container, Link, Stack, Divider } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YardIcon from '@mui/icons-material/Yard';
import GoogleIcon from '@mui/icons-material/Google';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Cele
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        pt: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container
        sx={{
          height: '170px',
        }}  
      >
        <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="flex-start"
            spacing={0}
        >
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1}
          >
            <Typography
              variant="h5"
              sx={{textTransform: "uppercase"}}
            >
              Menu
            </Typography>
            <Link
              variant="body1"
              underline="hover"
            >
              Find Gift
            </Link>
            <Link
              variant="body1"
              underline="hover"
            >
              Calendar
            </Link>
            <Link
              variant="body1"
              underline="hover"
            >
              About Us
            </Link>
          </Stack>

          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1}
          >
            <Typography
              variant="h5"
              sx={{textTransform: "uppercase"}}
            >
              Contacts
            </Typography>
            <Typography>
              hello@cele.com
            </Typography>
            <Typography>
              +1 900 750 858
            </Typography>
            <Typography>
              Every day: 9:00 AM - 9.00 PM
            </Typography>
          </Stack>

          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1}
          >
            <Typography
              variant="h5"
              sx={{textTransform: "uppercase"}}
            >
              Stay Social
            </Typography>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={1}
            >
              <FacebookOutlinedIcon />
              <YardIcon />
              <GoogleIcon />
              <PlayCircleOutlineIcon />
            </Stack>
            
          </Stack>
        </Stack>
      </Container>
      <Divider />
      <Container maxWidth="sm" sx={{py: 3}}>
        <Copyright />
      </Container>
    </Box>

  );
}