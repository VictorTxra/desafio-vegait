import React, { useState } from 'react';
import { fetchPokemonData } from './PokemonService';
import PokemonInfo from './PokemonInfo';
import toast, { Toaster } from 'react-hot-toast';
import { FaSearch } from "react-icons/fa";

const PokemonSearch = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonData, setPokemonData] = useState({ name: "", abilities: [], types: "", img: "" });

    const handleSearch = async () => {

        if (pokemonName !== "") {
            await fetchPokemonData(pokemonName).then((data) => {
                const formatedData = {
                    name: data.name,
                    abilities: data.abilities,
                    types: concatTypeNames(data.types),
                    img: data.sprites.front_default
                }
                setPokemonData(formatedData);
            }).catch(() => toast.error('Não existe esse pokémon'));

        } else {
            toast.error('Digite o nome de um pokémon')
        }

    };

    const concatTypeNames = (typesArray) => {
        const typeNames = typesArray.map(item => item.type.name);
        return typeNames.join(' / ');
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div className='container row'>
            <div className='col-md-12 d-flex justify-content-center'>
                <FaSearch className='lupaIcon'/>
                <input
                
                    className='inputSearch'
                    type="text"
                    placeholder="Digite aki o nome do Pokémon"
                    value={pokemonName}
                    onChange={(e) => setPokemonName(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
            </div>

            <PokemonInfo pokemonData={pokemonData} />
            <Toaster />
        </div>
    );
};

export default PokemonSearch;