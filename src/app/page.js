import Image from "next/image";
import  About from "../app/components/About";
import CountdownSection from "../app/components/CountdownSection";

export default function Home() {
  return (
    <>
      <div
        className="bg-white
    bg-cover bg-no-repeat bg-top md:bg-center w-full overflow-hidden relative"
      >
        <div className="md:pb-50 lg:pb-30 relative z-10 pb-24 ">
          <div className="flex flex-col justify-center items-center  md:mt-50 mt-20 md:mb-50 mb-30">
            <h2 className="text-[#BF9772] md:text-2xl text-2xl  lg:text-7xl font-koh-santepheap-thin leading-12 md:leading-16 uppercase">
              Save the Date
            </h2>
            <h2 className="text-[#BF9772] md:text-[20px] text-[15px] text-center font-jacques-francois mt-6 px-10 md:px-0">
              A special moment is coming filled with joy, love, and celebration.
              <br className="md:block hidden"/> Save the date and be part of something truly unforgettable
              and meaningful.
            </h2>
          </div>
          <div>
            <img
              src="/assets/save_image.png"
              alt="element3"
              className="md:mt-10"
            />
          </div>

          <div className="flex flex-col justify-center items-center  md:mt-50 mt-30 md:mb-50 mb-30">
            <h2 className="text-[#BF9772] md:text-[20px] text-[15px] text-center font-jacques-francois">
              We’re Getting Married
            </h2>
            <h2 className="text-[#BF9772] md:text-2xl text-2xl  lg:text-7xl font-koh-santepheap-thin leading-12 md:leading-16 uppercase mt-6">
           Ronak & Sujal
            </h2>
            <h2 className="text-[#BF9772] md:text-[20px] text-[15px] text-center font-jacques-francois  mt-12">
              SAVE THE DATE
            </h2>
          </div>
       
            <CountdownSection/>
         

          <div>
            <h2 className="text-[#BF9772] md:text-xl text-[16px] text-center font-jacques-francois mt-18">
              WE ARE EXCITED TO SEE YOU
            </h2>
            <h2 className="text-[#1B1C1A] md:text-3xl text-[17px] text-center font-jacques-francois uppercase mt-4">
              AT OUR WEDDING
            </h2>
            
          </div>
        </div>
      </div>
      <About/>
      
    </>
  );
}
