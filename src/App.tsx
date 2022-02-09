import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import FormTest from './components/FormTestMUI';

/**
 *
 * @return {JSX.Element}
 */
export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{my: 4}}>
        <FormTest />
      </Box>
    </Container>
  );
}
