import Link from 'next/link'

import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Box component="section" sx={{ width: '60%', p: 2, }}>
          <Stack spacing={2}>
            <Typography variant="h4" gutterBottom>
              Thank you for participating in this survey. 
              Your input is invaluable to us.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Instructions:
            </Typography>
            <Stack spacing={1}>
                <Typography variant="body2" gutterBottom>
                  We'll show you a view two Performio Dashboards, one at a time. 
                </Typography>
                <Typography variant="body2" gutterBottom>
                Once you have taken time to take in the dashboard scroll down, below there is a form with five pairs of words listed. 
                </Typography>
                <Typography variant="body2" gutterBottom>
                For each row, select the point between the two words that best describes the feel of what you have just seen.
                </Typography>
            </Stack>
            <Link href="/bertcurrent">
            <h2 className={`mb-1 text-2xl font-semibold`}>
              Let's begin{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            </Link>
          </Stack>
    
    </Box>     
    </main>
  );
}
