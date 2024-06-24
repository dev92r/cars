import { configureStore } from "@reduxjs/toolkit";
import { formReducer, setCost, setName } from "./slices/FormSlice";
import { setSearchTerm, cardsReducer, addCar, removeCar } from "./slices/CarsList";

 const store = configureStore({
    reducer: {
        carsForm: formReducer,
        carsList: cardsReducer
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export {store, setName, setCost, addCar, removeCar, setSearchTerm };