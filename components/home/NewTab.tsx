import React from "react";
import tw from "tailwind-styled-components";
import tab from "@public/tabs/tab5.png";
import Image from "next/image";
import textart1 from "@public/text-art1.png";
import textart2 from "@public/text-art2.png";

const H1 = tw.h1`
text-neutral-900 text-center text-2xl font-bold  
`;

const WhiteBox = tw.div`p-4  bg-neutral-50 max-w-min rounded-2xl my-8`;

const BoxShell = tw.div`flex items-center justify-center`;

const NewTab = () => {
  return (
    <>
      <div className="py-12 bg-primary">
        <H1>Open new tabs is sh*t</H1>

        <BoxShell>
          <Image
            src={textart1}
            height={textart1.height}
            width={textart1.width}
            alt="text"
          />
          <WhiteBox>
            <div className="relative w-64 h-16">
              <Image src={tab} layout="fill" alt="tab" />
            </div>
          </WhiteBox>
          <Image
            src={textart2}
            height={textart2.height}
            width={textart2.width}
            alt="text"
          />
        </BoxShell>
        <p className="max-w-md mx-auto text-xs text-center">
          A solution for your browser tabs and don’t make your device get slower
          over time. Get ease and faster to discover a trend with just one tab.
        </p>
      </div>
      <div className="max-w-md px-4 py-20 mx-auto text-3xl font-bold">
        <p className="text-neutral-900 ">
          Findtrend helps you to increase your productivity and reduce your
          computer's memory load,{" "}
          <span className="text-neutral-500">
            an application that can fulfill your daily browsing needs.
          </span>
        </p>
      </div>
    </>
  );
};

export default NewTab;
