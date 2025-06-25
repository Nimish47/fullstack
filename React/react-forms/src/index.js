import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageNotFound from './routes/pagenotfound/PageNotFound';
import Home from './routes/home/Home';
import FormData from './components/formdata/FormData';
import BasicForm from './components/basicform/BasicForm';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "inputs",
        element: <BasicForm />
      },
      {
        path: "formdata",
        element: <FormData />
      }
    ]
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
