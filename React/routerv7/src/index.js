import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './components/home/Home';
import { CustomComponent } from './components/customComponent/CustomComponent';
import { Locker } from './components/locker/Locker.jsx';
import { Key } from './components/key/Key.jsx';
import AuthComponent from './components/auth/AuthComponent.jsx';
import { AuthLoader } from './components/auth/AuthLoader.js';
import { Login } from './components/login/Login.jsx';
import { LoginLoader } from './components/login/LoginLoader.js';
import { LogoutLoader } from './components/logout/LogoutLoader.js';
import Courier from './components/courier/Courier.jsx';
import { fetchData } from './components/courier/CourierLoader.js';


const router = createBrowserRouter([
  {
    path: "/",
    loader: AuthLoader,
    element: <AuthComponent />,
    children: [
      {
        path: "/",
        element: <App />,
        children: [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "about",
            element: <CustomComponent title="Hi, I am Aaron Ramsey!" />
          },
          {
            path: "contact",
            element: <CustomComponent title="123,Wall Street,London" />
          },
          {
            path: "locker",
            element: <Locker />,
            children: [
              {
                path: "key",
                element: <Key />
              }
            ]
          },
          {
            path: "courier",
            loader: fetchData,
            element: <Courier />
          }
        ]
      },
      {
        path: "/logout",
        loader: LogoutLoader,
        element:
          <div
            style={{
              backgroundColor: 'black',
              color: 'whitesmoke',
              height: '100vh',
              fontWeight: '900',
              fontSize: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>You've been logged out!
          </div>
      }
    ]
  },
  {
    path: "/login",
    loader: LoginLoader,
    element: <Login />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />);


reportWebVitals();
