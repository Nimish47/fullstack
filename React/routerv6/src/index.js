import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import Contact from './components/Contact';
import Admin from './components/Admin';
import About from './components/About';
import Error from './components/Error';
import User from './components/User';
import AdminInfo from './components/AdminInfo';
import Logout from './components/Logout';
import OutletComponent from './components/OutletComponent';
import Alone from './components/Alone';
import Group from './components/Group';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/logout",
        element: <Logout />
      },
      {
        path: "/contact",
        element: <Contact />,
        children: [
          {
            path: "/contact/admin",
            element: <AdminInfo />
          }
        ]
      }
    ]
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "/admin/:userid",
        element: <User />
      }
    ]
  },
  {
    path: "/about",
    element: <About />,
    children: [
      {
        path: "/about/address",
        element: <h1>243, MaryLand Streeet</h1>
      },
      {
        path: "/about/email",
        element: <h1>popsicle.123@yahoo.com</h1>
      }
    ]
  },
  {
    path: "/travel",
    element: <OutletComponent />,
    children: [
      {
        path: "/travel",
        element: <>Select desired route please!</>
      },
      {
        path: "/travel/alone",
        element: <Alone />,
        children: [
          {
            path: "/travel/alone/men",
            element: <>Alone men</>
          },
          {
            path: "/travel/alone/women",
            element: <>Alone women</>
          }
        ]
      },
      {
        path: "/travel/group",
        element: <Group />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
