import { useState } from 'react';
import { Button, Box } from '@mui/material';

export const FiltersPanel = () => {
  const [isActive, setActive] = useState(false);
  return (
    <Box pt={3}>
      <Button
        variant="contained"
        color="secondary"
        sx={{ minWidth: '140px', py: 2 }}
        onClick={() => setActive(!isActive)}
      >
        {isActive ? 'remove filter' : 'filter'}
      </Button>
    </Box>
  );
};
