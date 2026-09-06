import { configureStore, isAnyOf, type Middleware } from '@reduxjs/toolkit'
import UserReducer, { updatePassword } from './slice/UserSlice'
import PostReducer, { deletePost } from './slice/PostSlice'


const beerRiskTracker: Middleware = store => next => action => {
    if (isAnyOf(updatePassword, deletePost)(action)) {
        console.log(store.getState())
        alert(`User: ${store.getState().userdetails.username} - tried to perform a update password/delete post operation`)
    }
    return next(action)
}

export const store = configureStore({
    reducer: {
        userdetails: UserReducer,
        posts: PostReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(beerRiskTracker)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store