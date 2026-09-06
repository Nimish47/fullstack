import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Provider } from 'react-redux';
import store from './redux/store';
import ThemeContextComponent from './context/ThemeContext';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeContextComponent>
      <RouterProvider router={router} />
    </ThemeContextComponent>
  </Provider>
)
