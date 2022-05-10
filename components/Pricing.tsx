import { features } from "process";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import tw from "tailwind-styled-components";
const H1 = tw.h1`text-neutral-50 text-center text-4xl font-bold mb-8 
`;

const pricingData = [
  {
    tier: "personal",
    target: "Special first packer for all",
    price: "8",
    features: [
      "Upto 5 page each group",
      "Upto 10 group page",
      "5 Days group page saved",
    ],
    btnText: "Start Free Trial",
  },
  {
    tier: "regular",
    target: "Recommended for personal pro",
    price: "20",
    features: [
      "Upto 15 page each group",
      "Upto 10 group page",
      "Download page up to 20 page",
      "15 Days group page saved",
    ],
    btnText: "Start Free Trial",
  },
  {
    tier: "premium",
    target: "packet for startup company",
    price: "48",
    features: [
      "Unlimited group pages",
      "Unlimited download page",
      "Unlimited page each group",
      "Customize sorting group pages",
      "Customize group page name",
      "30 Days group page saved",
    ],
    btnText: "Start Free Trial",
  },
];

const renderCards = pricingData.map((card, i) => {
  return (
    <div
      key={i}
      className={`${
        i === 1 ? "bg-primary" : "bg-neutral-50"
      } rounded-2xl p-4 text-sm sm:flex-1 `}
    >
      <h3 className="text-xl font-semibold uppercase">{card.tier}</h3>
      <p>{card.target}</p>

      <div className="flex flex-col py-6">
        <p className="">
          <span className="text-2xl"> ${card.price}</span>/month
        </p>

        {card.features.map((feature) => {
          return (
            <p className="inline-flex flex-row gap-2 mt-2">
              <AiOutlineCheck />
              {feature}
            </p>
          );
        })}
      </div>
      <button className="px-6 py-2 mx-auto font-semibold justify-self-end max-w-fit bg-neutral-900 text-neutral-50 rounded-3xl ">
        {card.btnText}
      </button>
    </div>
  );
});

const Pricing = () => {
  return (
    <div className="px-2 py-12 bg-neutral-900">
      <H1>Get your best deal</H1>

      <div className="flex items-center justify-center w-full">
        <label htmlFor="toggleB" className="flex items-center cursor-pointer">
          <div className="mr-3 font-medium text-gray-50">Monthly</div>
          <div className="relative">
            <input type="checkbox" id="toggleB" className="sr-only" />
            <div className="block h-8 rounded-full bg-gray-50 w-14"></div>
            <div className="absolute w-6 h-6 transition rounded-full bg-green-2 dot left-1 top-1"></div>
          </div>
          <div className="ml-3 font-medium text-gray-700">Yearly</div>
        </label>
      </div>
      <div className="flex flex-col gap-4 px-8 mt-8 sm:flex-row">
        {renderCards}
      </div>
    </div>
  );
};

export default Pricing;
