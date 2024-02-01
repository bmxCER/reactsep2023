import {Character} from "./components/Character";

const App= () => {
    const characters = [
        {"id":91,"name":"David Letterman","status":"Alive","species":"Human","type":"","gender":"Male", "image":"https://rickandmortyapi.com/api/character/avatar/91.jpeg"},
        {"id":352,"name":"Tinkles","status":"Dead","species":"Alien","type":"Parasite","gender":"Female", "image":"https://rickandmortyapi.com/api/character/avatar/352.jpeg"},
        {"id":437,"name":"Michael","status":"Alive","species":"Human","type":"","gender":"Male", "image":"https://rickandmortyapi.com/api/character/avatar/437.jpeg"},
        {"id":487,"name":"Visor Rick","status":"Dead","species":"Human","type":"","gender":"Male", "image":"https://rickandmortyapi.com/api/character/avatar/487.jpeg"},
        {"id":582,"name":"Anchosnake","status":"Alive","species":"Animal","type":"Snake","gender":"Female", "image":"https://rickandmortyapi.com/api/character/avatar/582.jpeg"},
        {"id":607,"name":"Hairspray Fan","status":"Alive","species":"Alien","type":"Soulless Puppet","gender":"Female", "image":"https://rickandmortyapi.com/api/character/avatar/607.jpeg"}

    ]
    return (
        <div>
            {characters.map(character=><Character character={character}/>)}
        </div>
    );
};



export {App};