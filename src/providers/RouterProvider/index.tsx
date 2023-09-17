import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from 'layout';
import { CharacterInfo, Home } from 'pages';

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
        path: `character/:id`,
        element: <CharacterInfo />,
      },
    ],
  },
]);

const WithRouterProvider: React.FC = () => <RouterProvider router={router} />;

export default WithRouterProvider;
