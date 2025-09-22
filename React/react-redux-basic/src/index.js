import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './routes/home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Swiggy from './routes/swiggy/Swiggy';
import Zomato from './routes/zomato/Zomato';
import Analytics from './routes/analytics/Analytics';
import { Provider } from 'react-redux';
import store from './redux/store';

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
        path: 'zomato',
        element: <Zomato />
      },
      {
        path: 'swiggy',
        element: <Swiggy />
      },
      {
        path: 'analytics',
        element: <Analytics />
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
reportWebVitals();
