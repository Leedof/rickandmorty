import { Outlet } from 'react-router-dom';
import { HeroBlock } from 'components';
import Header from './Header';

const Layout: React.FunctionComponent = () => (
  <>
    <Header />
    <HeroBlock />
    <main>
      <Outlet />
    </main>
    <footer>Footer</footer>
  </>
);

export default Layout;
