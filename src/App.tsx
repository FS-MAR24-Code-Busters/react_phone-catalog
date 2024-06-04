import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AccessoriesPage from './modules/AccessoriesPage/PhonesPage';
import HomePage from './modules/HomePage/HomePage';
import Layout from './Layout/Layout';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import PhonesPage from './modules/PhonesPage/PhonesPage';
import { ROUTES } from './constants/ROUTES';
import TabletsPage from './modules/TabletsPage/TabletsPage';
// eslint-disable-next-line max-len
import ProductDetailsPage from './modules/ProductDetailsPage/ProductDetailsPage';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.PHONES,
        element: <PhonesPage />,
      },
      {
        path: ROUTES.TABLETS,
        element: <TabletsPage />,
      },
      {
        path: ROUTES.ACCESSORIES,
        element: <AccessoriesPage />,
      },
      {
        path: ROUTES.PRODUCT,
        element: null,
        children: [
          {
            path: ROUTES.PRODUCT_DETAIL,
            element: <ProductDetailsPage />,
          },
        ],
      },
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;
