import React from "react";
import tw from "tailwind-styled-components";
import useEmblaCarousel from "embla-carousel-react";

import brand1 from "@public/brands/brand1.png";
import brand2 from "@public/brands/brand2.png";
import brand3 from "@public/brands/brand3.png";
import brand4 from "@public/brands/brand4.png";
import brand5 from "@public/brands/brand5.png";
import brand6 from "@public/brands/brand6.png";
import brand7 from "@public/brands/brand7.png";
import brand8 from "@public/brands/brand8.png";
import brand9 from "@public/brands/brand9.png";
import brand10 from "@public/brands/brand10.png";
import brand11 from "@public/brands/brand11.png";
import brand12 from "@public/brands/brand12.png";
import brand13 from "@public/brands/brand13.png";
import brand14 from "@public/brands/brand14.png";
import brand15 from "@public/brands/brand15.png";
import brand16 from "@public/brands/brand16.png";
import Image, { StaticImageData } from "next/image";
import tweet1 from "@public/tweets/tweet1.png";
import tweet2 from "@public/tweets/tweet2.png";
import tweet3 from "@public/tweets/tweet3.png";

import sm1 from "@public/socialmediaicons/sm1.png";
import sm2 from "@public/socialmediaicons/sm2.png";
import sm3 from "@public/socialmediaicons/sm3.png";
import sm4 from "@public/socialmediaicons/sm4.png";
import sm5 from "@public/socialmediaicons/sm5.png";
import sm6 from "@public/socialmediaicons/sm6.png";
import sm7 from "@public/socialmediaicons/sm7.png";
import sm8 from "@public/socialmediaicons/sm8.png";

const socialmediaicons = [sm1, sm2, sm3, sm4, sm5, sm6, sm7, sm8];

const brands = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
  brand10,
  brand11,
  brand12,
  brand13,
  brand14,
  brand15,
  brand16,
];

const H1 = tw.h1`text-neutral-900 text-center text-4xl font-bold  
`;

const renderBrands = (image: StaticImageData, i: number) => {
  return (
    <div key={i} className="relative w-20 h-20 mx-auto">
      <Image src={image} layout="fill" objectFit="contain" alt="brand" />
    </div>
  );
};
const renderSocial = (image: StaticImageData, i: number) => {
  return (
    <div key={i} className="relative w-12 h-12 mx-auto ml-2">
      <Image src={image} layout="fill" objectFit="contain" alt="social" />
    </div>
  );
};

const Partners = () => {
  return (
    <>
      <div>
        <H1>Findtrend make +1000 Startup grow</H1>
        <div className="grid grid-cols-2 gap-4 p-16 sm:grid-cols-4">
          {brands.map((brand, i) => renderBrands(brand, i))}
        </div>
      </div>
      <div>
        <H1>All platform connect to Findtrend</H1>
        <div className="flex py-8 mx-auto max-w-fit">
          {socialmediaicons.map((socialicon, i) => renderSocial(socialicon, i))}
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div>
          <Image
            src={tweet2}
            objectFit="contain"
            height={tweet2.height}
            width={tweet2.width}
            alt="social"
          />
        </div>
        <div>
          <Image
            src={tweet1}
            objectFit="contain"
            height={tweet1.height}
            width={tweet1.width}
            alt="social"
          />
        </div>
        <div>
          <Image
            src={tweet3}
            objectFit="contain"
            height={tweet3.height}
            width={tweet3.width}
            alt="social"
          />
        </div>

        <button className="px-6 py-2 mx-auto mt-4 mb-20 font-semibold bg-neutral-900 text-neutral-50 max-w-fit rounded-2xl">
          View More Trends
        </button>
      </div>
    </>
  );
};

export default Partners;
