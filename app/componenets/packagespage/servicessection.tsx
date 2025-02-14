import React from 'react';
import { Card, CardBody, Image, Button, Slider } from '@nextui-org/react';
import PackageData from '../../packagesData.json';
import { PackageMotion } from './packagemotion';
import Link from 'next/link';

const ServicesSection = () => {
  return (
    <div className="mt-5">
      <div className="space-y-6">
        {PackageData.map((pck) => (
          <PackageMotion key={pck.id}>
            <Card
              isBlurred
              className="border-none bg-background/60 dark:bg-default-100/50 w-65 "
              shadow="sm"
            >
              <CardBody>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 items-center justify-center">
                  <div className="relative col-span-1">
                    <Image
                      alt="Album cover"
                      className="object-cover"
                      height={400}
                      shadow="md"
                      src={pck.image}
                      width="100%"
                    />
                  </div>
                  <div className="flex flex-col col-span-1 gap-4 ">
                    <h1 className="text-4xl text-center">{pck.name}</h1>
                    <p className="text-start font-sans">
                      Price of Package:{' '}
                      <a className="font-bold text-[#FFD700]">${pck.price}</a>
                    </p>
                    <p className="text-start font-sans">
                      Duration:{' '}
                      <a className="font-bold text-[#FFD700]">{pck.time}</a>
                    </p>
                    <ul className=" font-sans list-disc list-inside">
                      {pck.descriptions.map((description, index) => (
                        <li key={index} className="p-1 marker:text-[#FFD700]">
                          {description}
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-center mt-3 animate-pulse">
                      <Link href={'/booking'}>
                        <Button
                          className="bg-transparent border  rounded-sm border-[#DC143C] rounded-sm text-[#FFD700] hover:bg-[#DC143C] hover:animate-pulse"
                          variant="shadow"
                        >
                          Book Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </PackageMotion>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
