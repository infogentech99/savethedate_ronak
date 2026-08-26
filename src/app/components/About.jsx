"use client";

export default function About() {
  return (
    <div
      className="bg-[url('/assets/about_bg.png')] bg-white
    bg-cover bg-no-repeat bg-top md:bg-center w-full overflow-hidden relative"
    >
      <div className="md:pb-0 lg:pb-0 relative z-10">
        <div className="flex flex-col justify-center items-center  md:mt-30 mt-20 md:mb-50 mb-20">
          <h2 className="text-[#BF9772] md:text-2xl text-[30px]  lg:text-7xl font-koh-santepheap-thin leading-12 md:leading-16 uppercase">
            About Us
          </h2>
        </div>

        <div className="flex justify-center items-center md:gap-10 gap-4 md:px-0 px-5">
          <div className="relative flex justify-center">
            <img src="/assets/ronak_img.png" alt="element3" className="md:h-150 h-55" />

            <div className="absolute md:-bottom-20 -bottom-10 z-10 md:w-120 w-45 md:p-10 p-5 border border-white/30 bg-white/20 backdrop-blur-md rounded-xl shadow-lg">
              <h2 className="text-black md:text-[25px] text-[18px] text-center font-semibold font-playfair-display">
                Ronak Rakhasiya
              </h2>

              {/* <h2 className="text-[#4D4635] md:text-[16px] text-[10px] text-center font-playfair-display mt-3">
                An architect of dreams with a penchant for classic cars and
                unscripted adventures. His quiet confidence is the perfect
                anchor to her spirit.
              </h2> */}
            </div>
          </div>

          <h2 className="text-[#F2E8DB] md:text-2xl text-4xl italic lg:text-[140px] font-playfair-display uppercase">
            &
          </h2>

          <div className="relative flex justify-center">
            <img src="/assets/bride_img.png" alt="element3" className="md:h-150 h-55" />

            <div className="absolute md:-bottom-20 -bottom-10 z-10 md:w-120 w-45 md:p-10 p-5 border border-white/30 bg-white/20 backdrop-blur-md rounded-xl shadow-lg">
              <h2 className="text-black md:text-[25px] text-[18px] text-center font-semibold font-playfair-display">
                Sujal Naliapara
              </h2>

              {/* <h2 className="text-[#4D4635] md:text-[16px] text-[10px] text-center font-playfair-display mt-3">
                A lover of poetry, rainy afternoons, and the quiet moments
                between the chaos. She brings a grounding warmth to every room
                she enters.
              </h2> */}
            </div>
          </div>
        </div>

       
<div className="relative flex flex-col justify-center items-center md:mt-90 mt-60 md:mb-50 mb-20 overflow-hidden pb-30 ">

  {/* Background Vector */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 md:w-[55%] md:h-[55%] w-[100%] h-[55%] bg-[url('/assets/vector.png')] bg-center bg-no-repeat md:bg-contain bg-cover -z-10 md:mt-150 mt-110"></div>

  <h2 className="text-[#BF9772] md:text-[20px] text-[15px] text-center font-jacques-francois">
    Celebrations
  </h2>

  <h2 className="text-[#BF9772] md:text-2xl text-[30px] lg:text-7xl font-koh-santepheap-thin leading-12 md:leading-16 uppercase mt-6">
    Events
  </h2>

  <img
    src="/assets/engagement_event.png"
    alt="element3"
    className="md:h-150 h-100 mt-20"
  />

  <h2 className="text-[#4D4635] md:text-[16px] text-[15px] text-center font-playfair-display mt-3">
    A beautiful beginning to our forever
  </h2>

<div className="">
<h2 className="text-[#735C00] md:text-[16px] text-[15px] text-center font-montserrat mt-3 font-semibold">
    DATE
  </h2>
  <h2 className="text-black md:text-[16px] text-[15px] text-center font-playfair-display mt-3">
    30 AUGUST 2026
  </h2>
</div>


  <h2 className="text-[#735C00] md:text-xl text-[16px] text-center font-jacques-francois md:mt-20 mt-20 uppercase">
    Hotel Atithi Devo Bhava
  </h2>

  <h2 className="text-[#4D4635] md:text-[16px] text-[15px] text-center font-playfair-display mt-3 md:px-0 px-10">
    150 Feet Ring Rd, Near Westwood School, Ronki, Rajkot, Gujarat 360028
  </h2>

  <div className="flex gap-4 mt-10">
    {/* <button className="rounded-xl text-[14px] text-[#554300] bg-[#BF9772] px-7 py-2 font-montserrat font-semibold">
      GET DIRECTIONS
    </button> */}

    <a
                    href="https://maps.app.goo.gl/cxRppH23VfZyL1F5A"
                    className="rounded-xl text-[14px] text-[#554300] bg-[#BF9772] px-7 py-2 font-montserrat font-semibold"
                    target="_blank">
                    GET DIRECTIONS
                  </a>

  <a
                    href="https://wa.me/919512590080"
                    className="text-[#554300] font-semibold rounded-xl text-[14px] border px-5 border-[#BF9772] py-2"
                    target="_blank">
                    CLICK TO RSVP
                  </a>
                  
    {/* <button className="text-[#554300] font-semibold rounded-xl text-[14px] border px-5 border-[#BF9772] py-2">
      ADD TO CALENDAR
    </button> */}
  </div>

  <h2 className="text-[#4D4635] md:text-[14px] text-[12px] text-center font-montserrat mt-12">
    GUJARAT · INDIA · 2026
  </h2>
</div>






        <div className="md:px-40 px-0 ">
          <div className="px-10">
          <h1 className="text-[#BF9772]">OUR STORY</h1>
          <h2 className="text-[#BF9772] md:text-2xl text-[30px]  lg:text-[70px] font-koh-santepheap-thin leading-10 md:leading-20">
            The moments that <br />
            brought us here.
          </h2>
          <h2 className="text-[#BF9772] md:text-[20px] text-[15px] font-jacques-francois mt-3">
            A few memories before our forever begins.
          </h2>
          </div>
          <div className="flex justify-center items-center md:gap-14 gap-6 mt-20 px-3">
            
            <div classsName="">
              <h2 className="text-[#BF9772] md:text-[16px] text-[12px] font-montserrat mt-3 uppercase md:-ml-8 -ml-2">
                01 - First moments
              </h2>
              <img
                src="/assets/frame2.png"
                alt="element3"
                className="md:h-150 h-55 mt-2 shadow"
              />
            </div>
            <div classsName="">
              <h2 className="text-[#BF9772] md:text-[16px] text-[12px] font-montserrat mt-3 uppercase text-right md:-mr-8 -mr-2">
                02 - JUST US
              </h2>
              <img
                src="/assets/frame1.png"
                alt="element3"
                className="md:h-80 h-30 mt-2 shadow"
              />
            </div>
          </div>

          <div className="flex justify-center items-center gap-10  md:-mt-15 md:-ml-30 -mt-10 -ml-0">
            <div classsName="">
              <img
                src="/assets/frame3.png"
                alt="element3"
                className="md:h-100 h-45 mt-2 shadow"
              />
              <h2 className="text-[#BF9772] md:text-[16px] text-[12px] font-montserrat mt-3 uppercase md:-ml-8 -ml-3">
                03 — FOREVER TO GO
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:mt-50 mt-30 ">
          <h2 className="text-[#BF9772] md:text-2xl text-[30px]  lg:text-[60px] font-koh-santepheap-thin leading-12 md:leading-20">
            Thank You !
          </h2>
          <h2 className="text-[#BF9772] md:text-[20px] text-[15px] font-jacques-francois mt-3 text-center">
            We are so greateful you are here to <br /> celebrate with us.
          </h2>
        </div>
<div className="flex justify-center items-center mt-2 md:mt-4 md:gap-4 gap-3">
    <a
          href="https://www.instagram.com/theinvitearc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/instagram.png"
            alt="instagram"
            className="w-5 h-5 lg:w-8 lg:h-8"
          />
        </a>

        <p className="eb-garamond font-medium text-[#BF9772] text-center text-xs md:text-sm lg:text-base m-0 leading-none ">
          ©<a
            href="https://invitearc.com/"
            target="_blank"
            rel="noopener noreferrer"
          > InviteArc
          </a>
          2026
        </p>
</div>
        

        <img src="/assets/thank_bg.png" alt="element3" className="mt-30 " />
      </div>
    </div>
  );
}
