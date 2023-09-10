import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from 'layout';
import { Home } from 'pages';

const Test2 = () => <div>CHILD</div>;

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
        element: <Test2 />,
      },
    ],
  },
]);

const WithRouterProvider: React.FC = () => <RouterProvider router={router} />;

export default WithRouterProvider;
