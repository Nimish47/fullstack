import { createBrowserRouter } from "react-router-dom";
import App from './App'
import Home from "./routes/home/Home";
import { Suspense } from "react";
import { lazy } from "react";
// import Bali from "./routes/bali/Bali";
// import Kumbh from "./routes/kumbh/Kumbh";
const BaliLazy = lazy(() => import(/* webpackChunkName: "Balii" */ './routes/bali/Bali.jsx'))
const KumbhLazy = lazy(() => import(/* webpackChunkName: "Kumbhh" */ './routes/kumbh/Kumbh.jsx'))


export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children: [
                {
                    index: true,
                    element: <Home />
                }
            ]
        },
        {
            path: '/bali',
            element: <Suspense fallback={<h1> Loading buddy...</h1>}>
                <BaliLazy />
            </Suspense>
        },
        {
            path: '/kumbh',
            element: <Suspense fallback={<h1> Loading buddy...</h1>}>
                <KumbhLazy />
            </Suspense>
        }
    ]
)