import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars:[]
}

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers:{
        setResponse: (state, action) => {

            action.payload.forEach(car => {
                state.cars.push({
                    id: car.id,
                    brand: car.brand,
                    price: car.price,
                    year: car.year
                });
            });
        },
        updateCar: (state, action) => {
            const updatedCar = action.payload
        },
        deleteCar: (state, action) => {
            const carId = action.payload;

            state.cars = state.cars.filter(car => car.id !== carId)
        }
    }

})

const {reducer: carsReducer, actions} = carsSlice

const carsActions = {
    ...actions
}

export {
    carsReducer,
    carsActions
}