import {Cars} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carsService} from "../services";
import {carsActions} from "../store";


const CarsPage = () => {
    const dispatch = useDispatch();
    const { cars } = useSelector(state => state.cars);


    useEffect(() => {
        carsService.getAll().then(({ data }) => dispatch(carsActions.setResponse(data)));
    }, []);
    return (
        <div>
            <Cars cars={cars}/>
        </div>
    );
};

export {CarsPage};