import './App.css';
import { PokemonDetails } from './components/PokemonDetails';
import useFetch from './hooks/usefetch';
import { useState } from 'react';

function App() {
  const [nom, setNom] = useState('');
  const { data } = useFetch('https://pokeapi.co/api/v2/pokemon/'+nom);

  return (
    <div className="App">
      <div className='pokedex-content'>
          {data && <PokemonDetails data={data} />}
          <div className='pokedexForm'>

            <div className='decoration'>
              <div className='markModel'>
                <p> ABENKARROUCH </p>
              </div>
              <div className='sensors'>
                <div className='Camera'></div>
                <div className='lightBtns'>
                  <span></span>
                  <span></span>
                </div>
            </div>
              </div>

            <form>
              <label>Numéro ou nom du pokémon</label>
              <div className='input-group'>
                <input onChange={(e) => setNom(e.target.value.toLowerCase())} type='text' placeholder='Chercher un pokémon' />
              </div>
            </form>
            <div className='errorHolder'>
              <p>Nom ou Numéro</p>
              <p>{nom}</p>
            </div>

          </div>
      </div>
    </div>
  );
}

export default App;