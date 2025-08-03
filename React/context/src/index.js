import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/home/Home';
import PageNotFound from './component/pagenotfound/PageNotFound';
import Complex1 from './component/complex1/Complex1';
import Basic from './component/basic/Basic';
import Case1 from './component/base/Case1';
import ThemeContextComponent from './context/themecontext/ThemeContextComponent';
import BeautifierContextComponent from './context/beautifierContext/BeautifierContextComponent';


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
    element:
      <ThemeContextComponent>
        <BeautifierContextComponent>
          <Complex1 />
        </BeautifierContextComponent>
      </ThemeContextComponent>
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
