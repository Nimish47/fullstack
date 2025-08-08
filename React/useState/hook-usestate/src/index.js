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
import MemoContainer from './routes/allmemo/memocontainer/MemoContainer';
import ReactUseMemo from './routes/allmemo/react-usememo/ReactUseMemo';
import ReactCallback from './routes/allmemo/react-callback/ReactCallback';
import ReactMemo from './routes/allmemo/react-memo/ReactMemo';
import Case3A from './routes/allmemo/react-usememo/case3A/Case3A';
import Case2A from './routes/allmemo/react-memo/case2A/Case2A';
import Case1A from './routes/allmemo/react-callback/case1/Case1A';
import Case3B from './routes/allmemo/react-usememo/case3B/Case3B';
import Case3C from './routes/allmemo/react-usememo/case3C/Case3C';
import Case2B from './routes/allmemo/react-memo/case2B/Case2B';
import Case2C from './routes/allmemo/react-memo/case2C/Case2C';
import Case2D from './routes/allmemo/react-memo/case2D/Case2D';
import Case2E from './routes/allmemo/react-memo/case2E/Case2E';
import Case2F from './routes/allmemo/react-memo/case2F/Case2F';
import UseEffectContainer from './routes/alluseeffect/useeffectcontainer/UseEffectContainer';
import Case1 from './routes/alluseeffect/case1/Case1';
import Main from './routes/allusereducer/main';

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
      },
      {
        path: 'memo',
        element: <MemoContainer />
      },
      {
        path: 'memo/usememo',
        element: <ReactUseMemo />
      },
      {
        path: 'memo/usememo/case3A',
        element: <Case3A />
      },
      {
        path: 'memo/usememo/case3B',
        element: <Case3B />
      },
      {
        path: 'memo/usememo/case3C',
        element: <Case3C />
      },
      {
        path: 'memo/usecallback',
        element: <ReactCallback />
      },
      {
        path: 'memo/usecallback/case1A',
        element: <Case1A />
      },
      {
        path: 'memo/react-memo',
        element: <ReactMemo />
      },
      {
        path: 'memo/react-memo/case2A',
        element: <Case2A />
      },
      {
        path: 'memo/react-memo/case2B',
        element: <Case2B />
      },
      {
        path: 'memo/react-memo/case2C',
        element: <Case2C />
      },
      {
        path: 'memo/react-memo/case2D',
        element: <Case2D />
      },
      {
        path: 'memo/react-memo/case2E',
        element: <Case2E />
      },
      {
        path: 'memo/react-memo/case2F',
        element: <Case2F />
      },
      {
        path: 'useeffect',
        element: <UseEffectContainer />
      },
      {
        path: 'useeffect/case1',
        element: <Case1 />
      },
      {
        path: 'usereducer',
        element: <Main />
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
reportWebVitals();
