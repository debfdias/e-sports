import './styles/main.css';

import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; 

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
  const [gameSelected, setGameSelected] = useState<Game>();
  const [games, setGames ] = useState<Game[]>([]);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
        loop: true,
        mode: "free",
        slides: { origin: "center", perView: 6.25, spacing: 10 },
    }
  );

  useEffect(() => {
    api.get('/games').then(response => setGames(response.data));

  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg}></img>

      <h1 className="text-6xl text-white font-black mt-20">
        Your <span className='bg-nlw-gradient text-transparent bg-clip-text'>duo</span> is here.
      </h1>

      <div ref={sliderRef} className="keen-slider grid grid-cols-6 mt-16">
        {games.map(game => {
          {return (
            <div key={game.id} className="keen-slider__slide ">
              <GameCard 
                key={game.id}
                bannerUrl={game.banner_url}
                title={game.title}
                adsCount={game._count.ads}
              />
            </div>
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
