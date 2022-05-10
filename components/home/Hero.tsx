import tw from "tailwind-styled-components";
import Image from "next/image";
import charImage from "@public/charImage.png";
import bgImage from "@public/hero-bg.png";
import tab1 from "@public/tabs/tab1.png";
import tab2 from "@public/tabs/tab2.png";
import tab3 from "@public/tabs/tab3.png";
import tab4 from "@public/tabs/tab4.png";

const tabs = [tab1, tab2, tab3, tab4];

const Button = tw.button`px-6 py-2 rounded-3xl text-neutral-900 font-semibold text-sm transition-all ml-1 bg-primary `;

const ButtonContainer = tw.div`max-w-max mx-auto translate-x-12`;
const H1 = tw.h1`text-2xl text-neutral-50 text-center font-bold`;
const P = tw.p` text-xs text-center mt-6 mb-2 max-w-md mx-auto text-neutral-300`;

function isOdd(num: number) {
  return num % 2;
}

const renderedTabs = tabs.map((tab, i) => {
  return (
    <div
      className={`-ml-12 ${
        isOdd(i) ? "-rotate-3 translate-y-2" : "translate-y-9 rotate-3"
      } `}
      key={i}
    >
      <Image alt="" src={tab} height={tab.height} width={tab.width} />
    </div>
  );
});

const Hero = () => {
  return (
    <div className="relative py-20">
      <div className="container relative z-10 max-w-5xl px-4 mx-auto">
        <H1>
          Minimize your tabs. <br /> Find the trends!
        </H1>
        <P>
          Don't let your computer memories consume all of those browser tabs.
          Findtrend let your gather all of your favorite website into one place
        </P>
        <ButtonContainer>
          <Button>Get Started 🔥</Button>
          <Image
            src={charImage}
            height={charImage.height}
            width={charImage.width}
            alt="char"
            className="translate-y-3"
          />
        </ButtonContainer>
        <div className="flex max-w-xl p-4 mx-auto translate-x-12">
          {renderedTabs}
        </div>
      </div>
      <Image src={bgImage} objectFit="cover" layout="fill" priority />
    </div>
  );
};

export default Hero;
