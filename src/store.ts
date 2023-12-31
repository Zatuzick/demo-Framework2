import { configureStore } from '@reduxjs/toolkit'
import productAPI from './api/product'

export const store = configureStore({
  reducer: {
    "products": productAPI.reducer
  },
  middleware: defaultMiddleware => defaultMiddleware().concat(productAPI.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
