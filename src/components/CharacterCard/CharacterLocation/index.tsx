import { Typography, Box, SxProps, Theme } from '@mui/material';
import { text } from '../../styles';

export const CharacterLocation = ({ label, location, sx }: { label: string; location: string; sx: SxProps<Theme> }) => (
  <Box sx={sx}>
    <Typography align="left" sx={(theme) => ({ color: theme.palette.secondary.dark, ...text.overflowText })}>
      {label}
    </Typography>
    <Typography
      align="left"
      sx={(theme) => ({
        color: theme.palette.secondary.main,
        ...text.overflowText,
      })}
    >
      {location}
    </Typography>
  </Box>
);
