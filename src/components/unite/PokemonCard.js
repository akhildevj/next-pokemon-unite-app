import Image from 'next/image';

const PokemonCard = ({ pokemon }) => {
  const image = `https://d275t8dp8rxb42.cloudfront.net/pokemon/thumbnail/${pokemon.name}.png`;

  return (
    <div className='pokemon'>
      <picture className='pokemon-picture'>
        <Image
          className='pokemon-image'
          src={image}
          alt={pokemon.name}
          width={80}
          height={80}
        />
      </picture>
      <p className='pokemon-name'>{pokemon.name}</p>
    </div>
  );
};

export default PokemonCard;
