import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from 'layout';

const Test = () => {
  return <div>MAIN</div>;
};
const Test2 = () => {
  return <div>CHILD</div>;
};

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

const WithRouterProvider: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default WithRouterProvider;
