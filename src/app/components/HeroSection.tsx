
import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'
const HeroSection = () => {
    return (
        <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-suto py-10 md:py-0'>
            <Spotlight  className='-top-40 left-0 md:left-60 md:-top-20' fill='blue'/>
            
            <div className = 'p-4 relative z-10 w-full text-center'>
                <h1  className="mt-20 h-auto md:mt-0 text-4xl md:leading-tight md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Utkarsh Brogrammer</h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, nobis laudantium reprehenderit recusandae ratione maiores animi quis quisquam exercitationem, reiciendis est atque aperiam quo.</p>
            </div>
            <div className='mt-4'>
                <Link href={"/courses"}>
                    <Button borderRadius="1.75rem" className=''>
                        explore courses
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default HeroSection
