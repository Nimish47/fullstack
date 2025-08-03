import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/home/Home';
import PageNotFound from './component/pagenotfound/PageNotFound';
import ThemeContextComponent from './context/themecontext/ThemeContextComponent';
import Basic from './component/base/Basic';
import Case1 from './component/basic/Case1';
import Complex1 from './component/complex1/Complex1';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      }
    ]
  },
  {
    path: '/issue',
    element: <Case1 />
  },
  {
    path: '/basic',
    element: <ThemeContextComponent><Basic /></ThemeContextComponent>
  },
  {
    path: '/complex1',
    element: <Complex1 />
  },
  {
    path: "*",
    element: <PageNotFound />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
reportWebVitals();
