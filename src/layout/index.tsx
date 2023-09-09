import { Outlet } from 'react-router-dom';

const Layout: React.FunctionComponent<any> = () => {
  return (
    <>
      <header>'Header content'</header>
      <main>
        <Outlet />
      </main>
      <footer>'Footer</footer>
    </>
  );
};

export default Layout;
