import * as React from 'react';
import { Stack, Button, Typography, Box } from '@mui/material';
import startBackGround from '../../images/homePage/startBackGround.png';
import outlineLogo from '../../images/logo/outlineLogo.png';
import forwardQuote from '../../images/homePage/forwardQuote.png';
import backwardQuote from '../../images/homePage/backwardQuote.png';

export default function HomePage() {
  const styles = {
    stackContainer: {
      backgroundImage: `url(${startBackGround})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "90vh",
    }
  };
  return (
    <>
      <Box
        sx={styles.stackContainer}
      >
        <Stack
          direction="column"
          alignItems="center"
          spacing={3}
          sx={{height: "inherit"}}
        > 
          <Box sx={{mt: 20, mb: 10, width: 200}}>
            <img
              src={outlineLogo}
              alt="logo"
            />
          </Box>
          <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            space={3}
            sx={{height: 150, mt: 20}}
          >
            <Typography variant="h3" component="div" gutterBottom>
              Send Love, Your Way.
            </Typography>
            <Button size="large" variant="outlined">Start</Button>
          </Stack>
        </Stack>
      </Box>
      <QuoteWidget />
    </>
  )
}

function QuoteWidget() {
  const styles = {
    forwardQuote: {
      position: 'absolute',
      bottom: -130,
      left: 60,
    },
    backwadQuote: {
      position: 'absolute',
      bottom: -240,
      right: 60,
    }
  };
  return (
    <Box
      sx={{
        height: 300,
        backgroundColor: '#F4F3EE',
        '&:hover': {
          backgroundColor: '#DFFF00',
          opacity: 0.2,
        },
      }}
    >
    <img src={forwardQuote} alt="Forward quote mark" style={styles.forwardQuote} />
    <img src={backwardQuote} alt="Backward quote mark" style={styles.backwadQuote} />
    </Box>
  )
}