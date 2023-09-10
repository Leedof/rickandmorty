import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from 'layout';

const Test = () => <div>MAIN</div>;
const Test2 = () => <div>CHILD</div>;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Test />,
      },
      {
        path: '/id',
        element: <Test2 />,
      },
    ],
  },
]);

const WithRouterProvider: React.FC = () => <RouterProvider router={router} />;

export default WithRouterProvider;
