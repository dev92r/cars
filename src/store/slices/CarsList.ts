import { createSlice } from "@reduxjs/toolkit";
import { Car } from "../../model/CarForm";

interface CarsFormState {
    searchTerm:string,
    cars: Car[]
  }
  
  const initialState: CarsFormState = {
    searchTerm:"",
    cars:[]
  };

const CarsList = createSlice({
    name:"carsList",
    initialState:initialState,
    reducers: {
        addCar: (state,action) => {
            state.cars.push(action.payload)
        },
        removeCar: (state,action) => {
            const updatedCars = state.cars.filter((car) => {
                return car.id !== action.payload;
            })
            state.cars = updatedCars;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        }
    }
})

export const { addCar, removeCar, setSearchTerm } = CarsList.actions
export const cardsReducer =  CarsList.reducer