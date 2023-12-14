import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";

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
        path: '',
        element: <HomePage />,
      },
      {
        path: 'connexion',
        element: <Connexion />,
      },
      {
        path: 'inscription',
        element: <Inscription />,
      },
      {
        path: 'list-jeux',
        element: <ListesJeuxPage />,
      },

    ],
  },
]);