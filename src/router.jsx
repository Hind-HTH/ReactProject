import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from './App';
import FormGame from "./pages/ListGamePage/FormGame";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ListesJeuxPage = lazy(() => import('./pages/ListesJeuxPage/ListesJeuxPage'));
const ConnexionPage = lazy(() => import('./pages/ConnexionPage/ConnexionPage'));
const CreerUnComptePage = lazy(() => import('./pages/CreerUnComptePage/CreerUnComptePage'));

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
        path: 'create-account',
        element: <CreerUnComptePage />,
      },
      {
        path: 'list-jeux',
        element: <ListesJeuxPage />,
      },

      {
        path: 'formGame/:id',
        element: <FormGame />
      }

    ],
  },
]);