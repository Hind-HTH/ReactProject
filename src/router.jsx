import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from './App';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ListesJeuxPage = lazy(() => import('./pages/ListesJeuxPage/ListesJeuxPage'));
const ConnexionPage = lazy(() => import('./pages/ConnexionPage/ConnexionPage'));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'connexion',
        element: <ConnexionPage />,
      },
      {
        path: 'list-jeux',
        element: <ListesJeuxPage />,
      },

    ],
  },
]);