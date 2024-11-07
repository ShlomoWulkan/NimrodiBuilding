import { configureStore } from "@reduxjs/toolkit";
import floorreducer from "./floorreducer";
import Rolereducer from "./rolereducer";

const store = configureStore({
    reducer: {
        floorAccess: floorreducer,
        role: Rolereducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

