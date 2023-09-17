/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { Character } from 'types';
import { NameAndStatus } from './NameAndStatus';
import { CharacterLocation } from './CharacterLocation';

export const PreviewCharacterCard = ({ character }: { character: Character }) => {
  const { id, name, image, status, species, location, origin } = character;
  return (
    <Grid
      container
      columns={12}
      sx={{
        borderRadius: 1,
        overflow: 'hidden',
        background: 'transparent',
        textDecoration: 'none',
        '&:hover': {
          boxShadow: 5,
        },
      }}
      component={Link}
      to={`/character/${id}`}
    >
      <Grid item xs={4.6}>
        <Box sx={{ background: `url(${image}) center / cover no-repeat`, width: '100%', height: '100%' }} />
      </Grid>
      <Grid item xs={7.4} sx={(theme) => ({ p: 1.5, background: theme.palette.primary.light })}>
        <NameAndStatus name={name} status={status} species={species} />
        <CharacterLocation label="Last known location:" sx={{ mt: 1 }} location={location.name} />
        <CharacterLocation label="First seen in:" sx={{ mt: 1 }} location={origin.name} />
      </Grid>
    </Grid>
  );
};
