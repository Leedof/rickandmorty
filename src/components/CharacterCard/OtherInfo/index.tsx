import { Typography, Box, SxProps, Theme } from '@mui/material';
import { text } from '../../styles';

export const OtherInfo = ({ sx }: { sx: SxProps<Theme> }) => (
  <Box sx={sx}>
    <Typography align="left" sx={(theme) => ({ color: theme.palette.secondary.dark, ...text.overflowText })}>
      Other info:
    </Typography>
    <Typography
      align="left"
      sx={(theme) => ({
        color: theme.palette.secondary.main,
      })}
    >
      The Mosaic Rooms are a leading non-profit arts organisation and bookshop dedicated to supporting and promoting
      contemporary culture from the Arab world and beyond in London.
    </Typography>
    <Typography
      align="left"
      sx={(theme) => ({
        color: theme.palette.secondary.main,
        mt: 5.5,
      })}
    >
      Established in 2009, as a project of the A.M. Qattan Foundation, it dedicates its work to championing creative and
      critical voices that are often underrepresented.
    </Typography>
  </Box>
);
