
interface GameCardProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameCard(props: GameCardProps) {
  return (
    <div className='relative rounded-lg overflow-hidden' >
      <img src={props.bannerUrl} />

      <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
        <strong className='font-bold block text-white'>{props.title}</strong>
        <span className='text-zinc-300 text-sm mt-1 block'>{props.adsCount} ad(s)</span>
      </div>
    </div>
  )
}