import { Container, Typography } from '@mui/material';
import { flex } from '../styles/flex';

export const HeroBlock = () => (
  <Container
    maxWidth="xl"
    sx={{ height: { xs: '250px', sm: '345px' }, ...flex.rowBase, ...flex.alignCenter, ...flex.justifyCenter }}
    style={{ background: 'url(./src/assets/hero-background.svg) center/cover no-repeat' }}
  >
    <Typography variant="h1" component="div" align="center">
      The Rick and Morty API
    </Typography>
  </Container>
);
