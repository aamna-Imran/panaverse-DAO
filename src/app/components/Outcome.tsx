import React from 'react'
import { client } from '../sanity/client'
import { ImRadioChecked2 } from "react-icons/im";
import Image from 'next/image';

interface outcomeI {
    heading: string,
    para: string,
    outcomes: string[],
    imageUrl: any
}

async function getData(){
    const query = `*[_type == 'outcomePage'][0]{
        heading,
          para,
          outcomes,
          "imageUrl": outcomeImage.asset->url
      }`
      const data = await client.fetch(query)
      return data;
}

async function Outcome() {
    const data: outcomeI = await getData()
  return (
    <section className='relative max-container padding-container py-10 flex flex-col lg:flex-row gap-10 justify-center items-center'>
        <div className=' blue-blur-bg w-[300px] h-[300px] absolute lg:top-0 top-[400px] right-0'/>
            <Image
            className='lg:max-w-[550px] min-w-400 mx-auto'
            src={data.imageUrl}
            alt='Girl image'
            width={500}
            height={500}
            />
        
        <div className='flex flex-col'>
            <h1 className='lg:bold-40 bold-32 mb-4'>{data.heading}</h1>
            <p className='lg:text-[1rem] text-[0.9rem] text-muted-foreground '>{data.para}</p>
            <div className='grid sm:grid-cols-2 grid-cols-1 mt-6 gap-x-4 gap-y-6'>
                {data.outcomes.map((outcome)=>(
                    <div className='flex gap-5'>
                        <ImRadioChecked2 className='text-[#00616c] w-5 h-5'/>
                        <p className='font-semibold'>{outcome}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Outcome