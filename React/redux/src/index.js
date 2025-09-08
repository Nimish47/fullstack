import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Home from './components/home/Home';
import Counter from './components/counter/Counter';
import Example2 from './components/object/Example2';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/1-counter",
    element: <Counter />
  },
  {
    path: "2-object",
    element: <Example2 />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);


reportWebVitals();
