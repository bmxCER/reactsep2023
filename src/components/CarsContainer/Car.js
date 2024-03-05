import {useDispatch} from "react-redux";

import {carsActions} from "../../store";
import {carsService} from "../../services";

const Car = ({car}) => {
    const {id, brand, price, year} = car
    const dispatch = useDispatch()

    const update = async () => {
        const updatedCar = {
            id,
            brand,
            price: parseInt(price),
            year: parseInt(year)
        };
        await carsService.updateById(id, updatedCar)
        dispatch(carsActions.updateCar(updatedCar))
    }
    const deleteCar = async () => {
        await carsService.deleteById(id)
        dispatch(carsActions.deleteCar(id))
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={update}>update</button>
            <button onClick={deleteCar}>delete</button>
        </div>
    );
};

export {Car};