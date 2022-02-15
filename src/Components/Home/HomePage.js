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
          <Box sx={{mt: "10vh", mb: "10vh"}}>
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
            sx={{height: "20vh", mt: "10vh"}}
          >
            <Typography variant="h2" component="div" gutterBottom>
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
      bottom: -270,
      right: 60,
    },
    quoteStyles: {
      textAlign: 'center',
      margin: 'auto',
      width: '70%',
      position: 'relative',
      top: '40%',
    }
  };
  return (
    <Box
      sx={{
        height: 300,
        backgroundColor: '#F4F3EE',
      }}
    >
    <img src={forwardQuote} alt="Forward quote mark" style={styles.forwardQuote} />
    <img src={backwardQuote} alt="Backward quote mark" style={styles.backwadQuote} />
    <Typography variant="h4" component="div" gutterBottom style={styles.quoteStyles}>
      Green apply AI power to pick creative, unique 
      gifts and experiences for you & your loved ones.
    </Typography>
    </Box>
  )
}