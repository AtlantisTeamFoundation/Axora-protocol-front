import NavBar from "../components/navBar";
import HomeSection3 from "../components/homeSection3";
import Section4Socials from "../components/homeSection4socials";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import CoinPriceCarousel from "@/components/coinPriceCarousel";
export default function Home() {
  const headerTitleText = [
    "(1)Lorem ipsum dolor sit",
    "(2)Lorem ipsum dolor sit",
    "(3)Lorem ipsum dolor sit",
  ];
  const headerDescText = [
    "(1)Lorem, ipsum dolor sit consectetur",
    "(2)Lorem, ipsum dolor sit consectetur",
    "(3)Lorem, ipsum dolor sit consectetur",
  ];
  return (
    <>
      <NavBar />
      <div className="mx-auto max-w-261 md:pl-24 px-5 mt-12">
        <div className="flex">
          <div className="w-full h-140 flex flex-col justify-center">
            <div>
              <h1 className="text-5xl font-bold mb-5">
                <TypingText text={headerTitleText} deletingSpeed={35} />
              </h1>
              <div className="text-2xl">
                <TypingText
                  text={headerDescText}
                  deletingSpeed={18}
                  typingSpeed={30}
                />
              </div>
              <div className="mt-8">
                <button className="w-40 h-12 bg-[#1dad9d] rounded-[55px] text-xl font-bold text-white hover:cursor-pointer">
                  lorem
                </button>
                <button className="w-40 h-12 text-xl font-bold hover:cursor-pointer">
                  lorem
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row md:h-95 w-full flex-col">
        <div className="md:w-[50%] md:h-full w-full h-73  bg-[#eaf8f7]"></div>
        <div className="md:w-[50%] md:h-full w-full h-73  bg-[#566976]">
          <div className="h-full w-full max-w-180 py-14 px-7 flex justify-center items-center text-white">
            <div className="max-w-117">
              <h2 className="text-2xl font-semibold mb-3">
                Lorem ipsum dolor sit amet consect.
              </h2>
              <p className="text-xl leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates rem possimus officia ullam illum ipsam, perspiciatis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-261 md:pl-24 px-5 mt-12">
        <HomeSection3 cardContent={<CoinPriceCarousel />} />
        <HomeSection3 cardContent="" />
        <HomeSection3 cardContent="" />
      </div>
      <div className="lg:px-13 md:px-12 px-2.5 pt-12 max-w-275 mx-auto my-20 text-center bg-blue-300">
        <div>
          <h4 className="text-2xl font-semibold m-5">Lorem, ipsum dolor.</h4>
          <p className="text-xl max-w-160 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            mollitia debitis et consequuntur natus neque itaque vitae odit modi?
          </p>
        </div>
        <div className="flex flex-row mx-auto mt-15 mb-22 justify-evenly flex-wrap">
          <Section4Socials />
          <Section4Socials />
          <Section4Socials />
          <Section4Socials />
          <Section4Socials />
        </div>
      </div>
      <footer className="text-center text-7xl">Footer</footer>
    </>
  );
}
