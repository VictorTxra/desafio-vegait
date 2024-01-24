import PokemonSearch from "./PokemonSearch";

const PokemonInfo = ({pokemonData}) => {

    return (
        <div className='box row'>
            <div className='left col-md-6'>
                <p className='pokemonTitulo'>Foto do pokémon</p>
                <div className='pokemonImg'>
                    {pokemonData.img ? <img src={pokemonData.img} alt="pokémon" /> : null}
                </div>
            </div>
            <div className='right col-md-6'>

                <div>
                    <p className='pokemonTitulo'>Nome do Pokémon</p>
                    <input className='pokemonInput' type="text" disabled value={pokemonData.name} />
                </div>
                <div>
                    <p className='pokemonTitulo'>Habilidades</p>
                    <div className='habilidades'>
                        <input className={pokemonData.abilities.length > 0 ? ('pokemonInputDesaparece') : ('pokemonInput mb-2')} disabled type="text" placeholder=' Habilidade 1' />
                        <input className={pokemonData.abilities.length > 0 ? ('pokemonInputDesaparece') : ('pokemonInput mb-2')} disabled type="text" placeholder=' Habilidade 2' />
                        {pokemonData.abilities.length > 0 ? pokemonData.abilities.map(( habilidade ) => {
                            return <input className='pokemonInput pokemonInputHabilidade' type="text" disabled value={habilidade.ability.name} />
                        }) : null}
                    </div>
                </div>
                <div>
                    <p className='pokemonTitulo'>Tipo</p>
                    <input className='pokemonInput' type="text" disabled value={pokemonData.types} />
                </div>
            </div>
        </div>
    );
};

export default PokemonInfo;