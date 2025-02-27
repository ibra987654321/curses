import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';
import authReducer from './authSlice';
import courseReducer from "./courseSlice";
import topicReducer from "./topicSlice";

const store = configureStore({
    reducer: {
        form: formReducer,
        auth: authReducer,
        courses: courseReducer,
        topics: topicReducer,
    },
});

export default store;