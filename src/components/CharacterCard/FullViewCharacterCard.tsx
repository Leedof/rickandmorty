import { Box, Grid } from '@mui/material';
import { Character } from 'types';
import { NameAndStatus } from './NameAndStatus';
import { CharacterLocation } from './CharacterLocation';
import { OtherInfo } from './OtherInfo';

export const FullViewCharacterCard = ({ character }: { character: Character }) => {
  const { name, image, status, species, location, origin } = character;
  return (
    <Grid
      container
      sx={(theme) => ({
        borderRadius: 1,
        overflow: 'hidden',
        background: theme.palette.primary.light,
      })}
    >
      <Grid item xs={12} sm={6} sx={{ height: { xs: 300, sm: 'auto' } }}>
        <Box sx={{ background: `url(${image}) center / cover no-repeat`, width: '100%', height: '100%' }} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={(theme) => ({ background: theme.palette.primary.light, p: 1.2, pl: { xs: 1.2, sm: 4.7 } })}
      >
        <NameAndStatus name={name} status={status} species={species} />
        <CharacterLocation label="Last known location:" sx={{ mt: 1 }} location={location.name} />
        <CharacterLocation label="First seen in:" sx={{ mt: 1 }} location={origin.name} />
        <OtherInfo sx={{ mt: 5, mb: { xs: 3, sm: 12.7 } }} />
      </Grid>
    </Grid>
  );
};
