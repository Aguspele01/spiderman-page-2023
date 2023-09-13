import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className={`hero flex justify-center items-center w-full h-[600px] bg-[url('/assets/spiderman-wallpaper.png')] bg-cover bg-top mb-12`}>
      <div className='bg-[rgba(0,0,0,.6)] w-full h-full flex justify-center items-center'>
      <div>
        <Image src={`/assets/Spider-Man-Logo.png`} width={400} height={64} alt={`Logo`}/>
      </div>
        </div>
      </div>
  )
}

export default Hero
