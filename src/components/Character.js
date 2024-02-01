const Character = ({character}) => {
    const {id,name,status,species,gender,image} = character
    return (
        <div>
            <h1>{id}</h1>
            <h1>{name}</h1>
            <h2>Gender: {gender}</h2>
            <h2>Status: {status}</h2>
            <h2>Species: {species}</h2>
            <img
            src={image}
            alt={name}/>
        </div>
    );
};

export {Character};