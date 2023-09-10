import { Outlet } from 'react-router-dom';
import { HeroBlock } from 'components';
import { Box, Container } from '@mui/material';
import Header from './Header';

const Layout: React.FunctionComponent = () => (
  <>
    <Header />
    <HeroBlock />
    <Box component="main" sx={(theme) => ({ background: theme.palette.primary.main })}>
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </Box>
    <footer>Footer</footer>
  </>
);

export default Layout;
