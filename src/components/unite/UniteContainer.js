import { useData } from '../../contexts/appContext';
import PokemonCard from './PokemonCard';

const UniteContainer = () => {
  const { data } = useData();

  return (
    <section className='section-unite-container'>
      {data.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </section>
  );
};

export default UniteContainer;
