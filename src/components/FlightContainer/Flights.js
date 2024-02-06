import axios from "axios";
import { useEffect, useState } from "react";
import {Flight} from "./Flight";


const Flights = () => {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/launches/')
            .then(value => {
                const filteredFlights = value.data.filter(flight => parseInt(flight.launch_year) !== 2020);
                setFlights(filteredFlights);
            })
    }, []);

    return (
        <div>
            {flights.map(flight => (
                <Flight key={flight.mission_name} flight={flight} />
            ))}
        </div>
    );
};

export { Flights };