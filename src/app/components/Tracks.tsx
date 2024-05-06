import React from 'react'
import { client } from '../sanity/client'
import Image from 'next/image'
import Link from 'next/link'

interface trackI {
    _id: string,
    trackName: string,
    imageUrl: any
}

async function getData(){
    const query = `*[_type == 'tracksPage'][0...6]{
        _id,
          trackName,
          "imageUrl": trackImage.asset->url
      }`
      const data = await client.fetch(query)
      return data;
}

async function Tracks() {
    const data:trackI[] = await getData()
    console.log(data)
  return (
    <div>
        {data.map((item)=>(
            <div 
            className=' py-5 px-0 border-b border-gray-200 '
            key={item._id}>
                <Link href={'/'} className='flex  gap-5'>
                <div className='bg-teal-500 lg:min-w-40 min-w-32 h-24 rounded-md'>
                <Image
                className='relative lg:w-40 w-32 h-24 object-cover object-center hover:-top-1 hover:-right-1 transition-all  ease-out rounded-md'
                src={item.imageUrl}
                alt='track'
                width={500}
                height={500}
                />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-teal-600 font-medium text-[0.8rem]'>Specialized Track</p>
                    <p className='lg:bold-16 font-medium text-[0.9rem] sm:font-semibold'>{item.trackName}</p>
                </div>
                </Link>
            </div>
        ))}
    </div>
  )
}

export default Tracks