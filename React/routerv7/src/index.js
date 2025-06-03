import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './components/home/Home';
import { CustomComponent } from './components/customComponent/CustomComponent';
import { Locker } from './components/locker/Locker.jsx';
import { Key } from './components/key/Key.jsx';
import AuthComponent from './components/auth/AuthComponent.jsx';
import { AuthLoader } from './components/auth/AuthLoader.js';
import { Login } from './components/login/Login.jsx';
import { LoginLoader } from './components/login/LoginLoader.js';
import { LogoutLoader } from './components/logout/LogoutLoader.js';
import Courier from './components/courier/Courier.jsx';
import { fetchData } from './components/courier/CourierLoader.js';
import { fetchUser } from './components/user/UserLoader.js';
import User from './components/user/User.jsx';
import SpecialUser from './components/specialUser/SpecialUser.jsx';
import MultiParams from './components/multiParams/MultiParams.jsx';
import Users from './components/users/Users.jsx';
import { fetchAllUsers } from './components/users/AllUsersLoader.js';
import { QueryHandler } from './components/query/QueryHandler.jsx';
import { checkForHitman } from './components/query/QueryLoader.js';
import { checkForHitmanv2 } from './components/queryv2/QueryLoaderv2.js';
import { QueryHandlerv2 } from './components/queryv2/QueryHandlerv2.jsx';
import { RootErrorElement } from './components/errorRouteHandler/root/RootErrorElement.jsx';
import { PageNotFound } from './components/pageNotFound/PageNotFound.jsx';
import { TrafficPolice } from './components/pageNotFound/PageNotFoundLoader.js';
import { QueryErrorElement } from './components/errorRouteHandler/query/QueryErrorElement.jsx';
import { About } from './components/about/About.jsx';
import { Error } from './components/error/Error.jsx';
import Lazy from './components/lazy/Lazy.jsx';
import Todos from './components/todos/Todos.jsx';
import Pictures from './components/pictures/Pictures.jsx';
import Comments from './components/comments/Comments.jsx';
import Posts from './components/posts/Posts.jsx';
import { fetchAllPictures } from './components/pictures/PicturesLoader.js';
import { fetchAllComments } from './components/comments/CommentsLoader.js';
import { fetchAllPosts } from './components/posts/PostsLoader.js';

const router = createBrowserRouter([
  {
    path: "/",
    loader: AuthLoader,
    element: <AuthComponent />,
    errorElement: <RootErrorElement />,
    children: [
      {
        path: "/",
        element: <App />,
        children: [
          {
            path: "",
            element: <Home />
          },
          {
            path: "about",
            element: <About />
          },
          {
            path: "contact",
            element: <CustomComponent title="123,Wall Street,London" />
          },
          {
            path: "locker",
            element: <Locker />,
            children: [
              {
                path: "key",
                element: <Key />
              }
            ]
          },
          {
            path: "courier",
            loader: fetchData,
            element: <Courier />
          },
          {
            // has its own errorElement
            path: "question",
            loader: checkForHitman,
            element: <QueryHandler />,
            errorElement: <QueryErrorElement />,
          },
          {
            path: "questionv2",
            loader: checkForHitmanv2,
            element: <QueryHandlerv2 />
          },
          {
            path: "users",
            loader: fetchAllUsers,
            element: <Users />
          },
          {
            // rootErrorElement handles error
            path: "users/:userId",
            loader: fetchUser,
            element: <User />
          },
          {
            path: "users/47",
            element: <SpecialUser />
          },
          {
            path: "/:nationality/user/:age",
            element: <MultiParams />
          },
          {
            path: "lazy",
            element: <Lazy />
          },
          {
            path: "todos",
            element: <Todos />
          },
          {
            path: "pictures",
            element: <Pictures />,
            loader: fetchAllPictures
          },
          {
            path: "comments",
            element: <Comments />,
            loader: fetchAllComments
          },
          {
            path: "posts",
            element: <Posts />,
            loader: fetchAllPosts
          },
          {
            path: "/error",
            element: <Error />
          }
        ]
      },
      {
        path: "/logout",
        loader: LogoutLoader,
        element:
          <div
            style={{
              backgroundColor: 'black',
              color: 'whitesmoke',
              height: '100vh',
              fontWeight: '900',
              fontSize: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>You've been logged out!
          </div>
      }
    ]
  },
  {
    path: "/login",
    loader: LoginLoader,
    element: <Login />
  },
  { /** need to be placed at the very end! */
    path: "*",
    loader: TrafficPolice,
    element: <PageNotFound />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
reportWebVitals();
