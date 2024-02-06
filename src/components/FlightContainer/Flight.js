const Flight = ({flight}) => {
    const {mission_name, launch_year, mission_patch_small} = flight;
    return (
        <div>
            <div>Mission name: {mission_name}</div>
            <div>Mission year: {launch_year}</div>
            <img
                src={mission_patch_small}
                alt={mission_name}
            />
        </div>
    );
};

export {Flight};