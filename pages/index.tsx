import Hero from "@components/home/Hero";
import NewTab from "@components/home/NewTab";
import Partners from "@components/home/Partners";
import Pricing from "@components/Pricing";
import type { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <NewTab />
      <Partners />
      <Pricing />
      <div className="py-8 text-center bg-primary">
        <h3 className="mb-4 text-2xl font-bold">
          Join us on email for <br />{" "}
          <span className="text-neutral-700/70">more trending topics</span>
        </h3>
        <button className="px-6 py-2 mx-auto font-semibold justify-self-end max-w-fit bg-neutral-900 text-neutral-50 rounded-3xl ">
          Join now
        </button>
      </div>
    </>
  );
};

export default Home;
