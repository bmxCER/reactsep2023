import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { carsActions } from "../store";

import { carsService } from "../services";

const Header = () => {
    const dispatch = useDispatch();
    const {cars} = useSelector(state => state.cars);
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");
    const [year, setYear] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        setBrand("");
        setPrice("");
        setYear("");

    };

    const save = () => {
        const newCar = {
            brand,
            price: parseInt(price),
            year: parseInt(year)
        };

        const response = carsService.create(newCar);
        dispatch(carsActions.setResponse([...cars ,response.data]));

        dispatch(carsActions.updateCar([response.data]));
    }

    const update = async (updatedCar) => {
        await dispatch(carsActions.updateCar(updatedCar))
    }


    return (
        <div>
            <form onSubmit={handleSubmit? save : update}>
                <input
                    type="text"
                    placeholder="brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />
                <button type="submit">create</button>
            </form>
        </div>
    );
};

export { Header };