/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Grid, Typography, Theme, SxProps } from '@mui/material';
import { flex } from 'components';
import { Link } from 'react-router-dom';

const getColorPerStatus = (status: 'alive' | 'dead' | 'unknown', theme: Theme) => {
  switch (status.toLowerCase()) {
    case 'alive':
      return theme.palette.success.main;

    case 'dead':
      return theme.palette.error.main;

    default:
      return theme.palette.secondary.dark;
  }
};

const overflowText = {
  textOverflow: 'ellipsis',
  textWrap: 'nowrap',
  overflow: 'hidden',
};
const NameAndStatus = ({
  name,
  status,
  species,
}: {
  name: string;
  status: 'alive' | 'dead' | 'unknown';
  species: string;
}) => (
  <Box>
    <Typography variant="h3" component="h3" color="secondary" sx={overflowText}>
      {name}
    </Typography>
    <Box sx={{ ...flex.rowBase, ...flex.justifyStart, ...flex.alignCenter, gap: 1 }}>
      <Box
        sx={(theme) => ({
          width: 9,
          height: 9,
          borderRadius: '100%',
          background: getColorPerStatus(status, theme),
        })}
      />
      <Typography
        variant="body2"
        component="span"
        sx={(theme) => ({
          color: theme.palette.common.white,
          ...overflowText,
        })}
      >
        {status} - {species}
      </Typography>
    </Box>
  </Box>
);

const CharacterLocation = ({ label, location, sx }: { label: string; location: string; sx: SxProps<Theme> }) => (
  <Box sx={sx}>
    <Typography align="left" sx={(theme) => ({ color: theme.palette.secondary.dark, ...overflowText })}>
      {label}
    </Typography>
    <Typography
      align="left"
      sx={(theme) => ({
        color: theme.palette.common.white,
        ...overflowText,
      })}
    >
      {location}
    </Typography>
  </Box>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PreviewCharacterCard = ({ character }: any) => {
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
