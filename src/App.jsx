import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import PokemonSearch from './assets/components/PokemonSearch';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import PokemonInfo from './assets/components/PokemonInfo';


function App() {
  return (
    <>
      <div className='container newContent'>
        <div className='newBody'>
          <div className="App newFundo">
            <PokemonSearch />
          </div>
        </div>

      </div>
    </>
  )
}

export default App
