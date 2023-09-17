/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid, SxProps, Theme, Box } from '@mui/material';
import { PreviewCharacterCard } from './CharacterCard';
import { apiResponse } from './mock';
import { Pagination } from './Pagination';

export const CharactersList = ({ sx }: { sx: SxProps<Theme> }) => (
  <Box sx={sx}>
    <Grid container spacing={{ xs: 2, md: 3 }}>
      {apiResponse.map((character: any) => (
        <Grid item xs={12} sm={6} key={character.id}>
          <PreviewCharacterCard character={character} />
        </Grid>
      ))}
      <Grid item xs={12}>
        <Pagination />
      </Grid>
    </Grid>
  </Box>
);
