import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Fibre from './routes/fibre/Fibre';
import Key from './routes/key/Key';
import Workers from './routes/workers/Workers';
import Freeze from './routes/freeze/Freeze';
import Events from './routes/events/Events';
import Storage from './routes/storage/Storage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "fibre",
    element: <Fibre />
  },
  {
    path: "key",
    element: <Key />
  },
  {
    path: "freeze",
    element: <Freeze />
  },  
  {
    path: "workers",
    element: <Workers />
  },
  {
    path: "events",
    element: <Events />
  },
  {
    path: 'storage',
    element: <Storage />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
reportWebVitals();
