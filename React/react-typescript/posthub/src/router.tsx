import { createBrowserRouter } from "react-router-dom";
import App from "./routes/app/App";
import Home from "./routes/home/Home";
import Login from "./routes/login/Login";
import Logout from "./routes/logout/Logout";
import ViewPost from "./routes/viewpost/ViewPost";
// import Posts from "./routes/posts/Posts";
import CreatePost from "./routes/createpost/CreatePost";
import User from "./routes/user/User";
import { lazy, Suspense } from "react";
import Post from "./routes/post/Post";
import { fetchPost } from "./routes/post/PostLoader";

const PostsLazy = lazy(() => import(/* webpackChunkName: "PostsLazy" */  "./routes/posts/Posts"))

export const router = createBrowserRouter([
    {
        path: "/",
        element: < App />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: "viewpost",
                element: <ViewPost />
                
            },
            {
                path: "posts",
                element: (
                    <Suspense fallback={<h1>Suspense loader...</h1>}>
                        <PostsLazy />
                    </Suspense>
                )
            },
            {
                path: "posts/:id",
                element: <Post />,
                loader: fetchPost
            },
            {
                path: "createpost",
                element: <CreatePost />
            },
            {
                path: "user",
                element: <User />
            }
        ]
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'logout',
        element: <Logout />
    }
]
)