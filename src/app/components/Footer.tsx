import Image from 'next/image'
import { RiFacebookFill } from "react-icons/ri";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import React from 'react'
import Link from 'next/link';

const PROGRAMS = [
    {
       label: "Web 3.0 and Metaverse Developer"
    },
    {
       label: "Artificial Intelligence"
    },
    {
       label: "Cloud-Native Computing"
    },
    {
       label: "Ambient Computing and IoT"
    },
    {
       label: "Genomics and Bioinformatics"
    },
    {
       label: "Network Programmability and Automation"
    },
    
]
const LINKS = [
    {
        icon: <RiFacebookFill />,
        id:1,
        href: "https://www.facebook.com/groups/panaverse"
    },
    {
        id:2,
        icon: <FaYoutube />,
        href: "https://www.youtube.com/@panaverse/streams"
    },
    {
        id:3,
        icon: <PiGithubLogoFill />,
        href: "https://github.com/panaverse"
    },
    {
        id:4,
        icon: <FaTwitter />,
        href: "https://twitter.com/Panaverse_edu"
    },
]

function Footer() {
  return (
    <section className='max-container padding-container py-14 border-t border-gray-300 grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-6'>
        <div className='flex flex-col gap-4'>
            <Image
            src={"/logo.webp"}
            alt='logo'
            width={100}
            height={100}
            />
            <p>Certified Web 3.0 and Metaverse Developer A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>
            <div className='flex gap-2'>
                {
                    LINKS.map((link)=>(
                        <Link 
                        key={link.id}
                        className='w-10 h-10 rounded-full checkbox text-white flex justify-center items-center text-[1.2rem]'
                        href={link.href}>
                            {link.icon}
                        </Link>
                    ))
                }
            </div>
        </div>
        <div className='flex gap-5 flex-col md:flex-row mt-5'>
            <div className='flex flex-col gap-2 font-medium text-gray-800'>
                <h2 className='bold-16'>Program</h2>
                {PROGRAMS.map((program)=>(
                    <div key={program.label} className='hover:text-teal-700 cursor-pointer'>
                        {program.label}
                    </div>
                ))}
            </div>
            <div className='flex flex-col gap-2 font-medium text-gray-800'>
            <h2 className='bold-16'>Pages</h2>
                <p>Home</p>
                <p>Quater 1</p>
                <p>Quater 2</p>
                <p>Quater 3</p>
            </div>
        </div>
    </section>
  )
}

export default Footer