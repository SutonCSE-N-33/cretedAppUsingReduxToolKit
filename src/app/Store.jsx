import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../featurese/Counter/CounterSlice';
import PostReducer from '../featurese/Post/PostSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: PostReducer,
  },
})

export default store;