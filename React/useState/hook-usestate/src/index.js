import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HooksContainer from './routes/hookscontainer/HooksContainer';
import UseState from './routes/state/usestate/UseState';
import OldCounter from './routes/state/oldcounter/OldCounter';
import LazyState from './routes/state/lazystate/LazyState';
import SetTimeout from './routes/alltimeouts/settimeout/SetTimeout';
import ClearTimeout from './routes/alltimeouts/cleartimeout/ClearTimeout';
import Timeout from './routes/alltimeouts/timeout/Timeout';
import TimeoutContainer from './routes/alltimeouts/timeoutcontainer/TimeoutContainer';
import Batching from './routes/state/batching/Batching';
import IntervalContainer from './routes/allintervals/intervalcontainer/IntervalContainer';
import GoodInterval from './routes/allintervals/goodinterval/GoodInterval';
import BadInterval from './routes/allintervals/badinterval/BadInterval';
import AdvancedBatching from './routes/state/batching-advanced/AdvancedBatching';

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
        element: <HooksContainer />
      },
      {
        path: 'state',
        element: <UseState />
      },
      {
        path: 'state/old-counter',
        element: <OldCounter />
      },
      {
        path: 'state/lazy-usestate',
        element: <LazyState users={users} />
      },
      {
        path: 'state/batching',
        element: <Batching />
      },
      {
        path: 'state/advanced-batching',
        element: <AdvancedBatching />
      },
      {
        path: 'timeout',
        element: <TimeoutContainer />
      },
      {
        path: 'timeout/settimeout',
        element: <SetTimeout />
      },
      {
        path: 'timeout/cleartimeout',
        element: <ClearTimeout />
      },
      {
        path: 'timeout/timeout',
        element: <Timeout />
      },
      {
        path: 'interval',
        element: <IntervalContainer />
      },
      {
        path: 'interval/goodinterval',
        element: <GoodInterval />
      },
      {
        path: 'interval/badinterval',
        element: <BadInterval />
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
reportWebVitals();
