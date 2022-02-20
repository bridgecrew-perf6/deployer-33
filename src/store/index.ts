import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/example';

// https://redux-toolkit.js.org/tutorials/quick-start
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

/**
 * Use cases
  * import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
    import type { RootState, AppDispatch } from './store'

    // Use throughout your app instead of plain `useDispatch` and `useSelector`
    export const useAppDispatch = () => useDispatch<AppDispatch>()
    export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
 */

export default store;