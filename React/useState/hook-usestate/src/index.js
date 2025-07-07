import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/home/Home';
import OldCounter from './routes/oldcounter/OldCounter';
import LazyState from './routes/lazystate/LazyState';

const users = [
  { id: 1, country: 'India' },
  { id: 2, country: 'China' },
  { id: 3, country: 'USA' },
  { id: 4, country: 'France' },
  { id: 5, country: 'China' }
]

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'old-counter',
        element: <OldCounter />
      },
      {
        path: 'lazy-usestate',
        element: <LazyState users={users}/>
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
reportWebVitals();
