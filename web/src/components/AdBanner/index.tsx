import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';

export function AdBanner() {
  return (
    <div className='mt-8 pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden'>
      <div className='bg-[#2A2634] px-8 py-6 justify-between flex items-center'>
        <div>
          <strong className='text-white text-2xl font-black block'>Didn't find a DUO?</strong>
          <span className='text-zinc-400 text-sm mt-1 block'>Publish a new ad and find more players!</span>
        </div>

        <Dialog.Trigger className='px-4 py-3 bg-violet-500 text-white rounded hover:bg-violet-600 items-center flex gap-3'>
          <MagnifyingGlassPlus size={24}/>
          Publish ad
        </Dialog.Trigger>
        
      </div>
    </div>
  )
}