import React from 'react';
import { Card, CardBody, Image, Button, Slider } from '@nextui-org/react';
import PackageData from '../../packagesData.json';
import { PackageMotion } from './packagemotion';
import Link from 'next/link';

const ServicesSection = () => {
  return (
    <div className="mt-5 px-4">
      <div className="space-y-6 max-w-6xl mx-auto">
        {PackageData.map((pck) => (
          <PackageMotion key={pck.id}>
            <Card
              isBlurred
              className="border-none bg-background/60 dark:bg-default-100/50 w-65 "
              shadow="sm"
            >
              <CardBody>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 items-center justify-center min-w-0">
                  <div className="relative col-span-1 min-w-0">
                    <Image
                      alt="Album cover"
                      className="object-cover"
                      height={400}
                      shadow="md"
                      src={pck.image}
                      width="100%"
                    />
                  </div>
                  <div className="flex flex-col col-span-1 gap-4 min-w-0">
                    <h1 className="text-4xl text-center break-words">{pck.name}</h1>
                    {pck.tagline && (
                      <p className="text-start font-sans text-sm italic text-gray-300">
                        {pck.tagline}
                      </p>
                    )}
                    {pck.bestFor && (
                      <p className="text-start font-sans">
                        Best For:{' '}
                        <span className="font-bold text-[#FFD700]">{pck.bestFor}</span>
                      </p>
                    )}
                    <p className="text-start font-sans">
                      {pck.priceLabel || 'Price of Package'}:{' '}
                      <span className="font-bold text-[#FFD700]">${pck.price}.00</span>
                    </p>
                    <p className="text-start font-sans">
                      Duration:{' '}
                      <span className="font-bold text-[#FFD700]">{pck.time}</span>
                    </p>
                    {pck.guestCapacity && (
                      <p className="text-start font-sans">
                        Guest Capacity:{' '}
                        <span className="font-bold text-[#FFD700]">{pck.guestCapacity}</span>
                        {pck.extraGuestFee && (
                          <span className="text-sm text-gray-400"> ({pck.extraGuestFee})</span>
                        )}
                      </p>
                    )}
                    {pck.extraTimeFee && (
                      <p className="text-start font-sans">
                        Extra Time:{' '}
                        <span className="font-bold text-[#FFD700]">{pck.extraTimeFee}</span>
                      </p>
                    )}
                    {pck.coreOffer && (
                      <div>
                        <p className="font-semibold text-[#FFD700] mt-1">Core Offer</p>
                        <p className="font-sans p-1">{pck.coreOffer}</p>
                        {pck.examples && (
                          <p className="font-sans text-sm text-gray-300 px-1">
                            Examples: {pck.examples}
                          </p>
                        )}
                      </div>
                    )}
                    {pck.included?.length > 0 && (
                      <div>
                        <p className="font-semibold text-[#FFD700] mt-2">Included</p>
                        <ul className="font-sans list-disc list-inside">
                          {pck.included.map((item) => (
                            <li key={item} className="p-1 marker:text-[#FFD700]">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {pck.addOns?.length > 0 && (
                      <div>
                        <p className="font-semibold text-[#FFD700] mt-2">Add-ons & Extras</p>
                        <ul className="font-sans list-disc list-inside">
                          {pck.addOns.map((addOn) => (
                            <li key={addOn.name} className="p-1 marker:text-[#FFD700]">
                              <span className="font-semibold">{addOn.name}</span>
                              {' — '}
                              <span className="text-[#FFD700]">{addOn.price}</span>
                              {addOn.note ? (
                                <span className="text-sm text-gray-400"> ({addOn.note})</span>
                              ) : null}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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
