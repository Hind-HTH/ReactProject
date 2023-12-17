import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from './App';
import rootLoader from "./loaders/RootLoader";
import CheckAuth from "./components/ChackAuth/CheckAuth";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const FormGame = lazy(() => import('./pages/ListGamePage/FormGame'));
const ListesJeuxPage = lazy(() => import('./pages/ListesJeuxPage/ListesJeuxPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage/ProfilePage'));
// const ConnexionPage = lazy(() => import('./pages/ConnexionPage/ConnexionPage'));
// const InscriptionPage = lazy(() => import('./pages/InscriptionPage/InscriptionPage'));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: rootLoader,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'list-jeux',
        element: <ListesJeuxPage />,
      },

      {
        path: 'formGame/:id',
        element: <FormGame />
      },
      {
        path: 'profile',
        element: <CheckAuth><ProfilePage /></CheckAuth>
      }

    ],
  },
]);