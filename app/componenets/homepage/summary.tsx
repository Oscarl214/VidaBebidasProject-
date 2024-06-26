import React from 'react';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

import { motion } from 'framer-motion';

const Summary = () => {
  return (
    <motion.div
      className="flex flex-row gap-3 z-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className=" border-b-1 border-[#FFFFF0]  ">
        <p className="leading-8 text-center lg:text-4xl m-10 text-md text-white ">
          Introducing Michael Estrada , the master{' '}
          <a className="text-[#FFD700]" href="/about">
            mixologist
          </a>{' '}
          and proud owner of{' '}
          <a className="text-[#FFD700]" href="/">
            VidaBebidasProject
          </a>
          , a mobile bartending service! Starting his business in 2024, Michael
          brings a passion for crafting{' '}
          <a className="text-[#FFD700]" href="/packages">
            exquisite cocktails
          </a>{' '}
          and creating{' '}
          <a className="text-[#FFD700]" href="/packages">
            unforgettable experiences
          </a>{' '}
          to every event.
        </p>
        <div className="flex justify-center m-5">
          <Link href={'/about'}>
            <Button
              className="bg-transparent border rounded-sm border-white text-white hover:border-[#DC143C] hover:animate-pulse"
              variant="shadow"
            >
              About
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Summary;
