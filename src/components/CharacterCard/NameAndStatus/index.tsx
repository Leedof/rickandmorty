import { Box, Typography, Theme } from '@mui/material';
import { Character } from 'types';
import { flex, text } from '../../styles';

const getColorPerStatus = (status: string, theme: Theme) => {
  switch (status.toLowerCase()) {
    case 'alive':
      return theme.palette.success.main;

    case 'dead':
      return theme.palette.error.main;

    default:
      return theme.palette.secondary.dark;
  }
};

export const NameAndStatus = ({ name, status, species }: Pick<Character, 'name' | 'status' | 'species'>) => (
  <Box>
    <Typography variant="h3" component="h3" color="secondary" sx={text.overflowText}>
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
          ...text.overflowText,
        })}
      >
        {status} - {species}
      </Typography>
    </Box>
  </Box>
);
