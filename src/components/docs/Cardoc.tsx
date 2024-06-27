import React from 'react';
import Image from 'next/image'
import { motion } from "framer-motion";
import Link from 'next/link';

//@ts-ignore
export const Cardoc = ({ title, transmitter }) => {

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };
    return (

        <div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                transition={{ duration: 0.2 }}
            >
                <li className='w-[300px] h-[350px] max-[350px]: rounded bg-blue-200 p-3 m-5 relative'>
                    <h2 className='uppercase text-center'>{title}</h2>
                    <p className='text-[9px] absolute bottom-3 left-3'>{transmitter}</p>
                    <div className='flex items-center cursor-pointer justify-center m-auto mt-5 bg-blue-400 hover:bg-blue-300 duration-300 w-[80px] h-[80px] rounded-full' title='Ouvir le document'>
                        <Link href={"/documents/info"}>
                            <Image
                                src="/Anim.png"
                                width={60}
                                height={60}
                                alt="Picture of the author"
                            />
                        </Link>
                    </div>
                </li>
            </motion.div>
        </div>

    );
}

export const AddCard = () => {
    return (


        <div title='Ajouter un document' className='w-[300px] h-[350px] max-h-[350px] rounded bg-blue-100 bg-opacity-90 flex items-center cursor-pointer justify-center p-3 m-5'>




            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

        </div>


    )
}

export default Cardoc;
