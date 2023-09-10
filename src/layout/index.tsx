import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout: React.FunctionComponent = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <footer>Footer</footer>
  </>
);

export default Layout;
