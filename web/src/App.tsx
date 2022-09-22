import './styles/main.css';

import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import logoImg from './assets/logo.svg';
import { GameCard } from './components/GameCard';
import { AdBanner } from './components/AdBanner';
import api from './services/api';
import { AdModal } from './components/Form/AdModal';

interface Game {
  id: string;
  banner_url: string;
  title: string;
  _count: {
    ads: number
  }
}

function App() {
  const [games, setGames ] = useState<Game[]>([]);

  useEffect(() => {
    api.get('/games').then(response => setGames(response.data));

  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg}></img>

      <h1 className="text-6xl text-white font-black mt-20">
        Your <span className='bg-nlw-gradient text-transparent bg-clip-text'>duo</span> is here.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => {
          {return (
            <GameCard 
              key={game.id}
              bannerUrl={game.banner_url}
              title={game.title}
              adsCount={game._count.ads}
            />
          )}
        })}
      </div>

      <Dialog.Root>
        <AdBanner />
        <AdModal />
      </Dialog.Root>
    </div>
  )
}

export default App
