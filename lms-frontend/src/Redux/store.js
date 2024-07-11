import { configureStore } from "@reduxjs/toolkit";

import authslicereducer from './Slices/Authslice';

const store = configureStore({
reducer:{
    auth: authslicereducer
},
devTools: true
});

export default store;