import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from 'layout';
import { Character, Home } from 'pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: `character`,
        element: <Character />,
      },
    ],
  },
]);

const WithRouterProvider: React.FC = () => <RouterProvider router={router} />;

export default WithRouterProvider;
