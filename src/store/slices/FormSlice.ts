import { createSlice, nanoid } from "@reduxjs/toolkit";
import { Car } from "../../model/CarForm";
import { addCar } from "./CarsList";

  const initialState: Car = {
    id: nanoid(),
    name: "",
    cost: 0,
  };


const FormSlice = createSlice({
    name:"carsForm",
    initialState:initialState,
    reducers: {
        setName: (state,action) => {
            state.name = action.payload;
        },
        setCost: (state,action) => {
            state.cost = action.payload;
        },
    },
    extraReducers(builder) {
      builder.addCase(addCar, (state, action) => {
        state.name = ""
        state.cost = 0
      })
    }
})

export const { setName, setCost } = FormSlice.actions
export const formReducer =  FormSlice.reducer 