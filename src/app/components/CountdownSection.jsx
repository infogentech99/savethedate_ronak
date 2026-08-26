"use client";

import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-08-30").getTime();

export default function CountdownSection() {
  const [showCountdown, setShowCountdown] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = TARGET_DATE - now;

      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (diff % (1000 * 60 * 60)) / (1000 * 60)
      );

      const seconds = Math.floor(
        (diff % (1000 * 60)) / 1000
      );

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const countdown = [
    { value: timeLeft.days, label: "DAYS" },
    { value: timeLeft.hours, label: "HOURS" },
    { value: timeLeft.minutes, label: "MINS" },
    { value: timeLeft.seconds, label: "SECS" },
  ];

  return (
    <section className="w-full md:pb-20 pb-10 text-center">

      {/* TAP TO REVEAL */}
      {/* {!showCountdown && (
        <button
          onClick={() => setShowCountdown(true)}
          className="group flex flex-col items-center mx-auto cursor-pointer"
        >
          <span className="font-serif text-[#BF9772] tracking-[4px] text-sm md:text-base">
            TAP TO REVEAL DATE
          </span>

          <span className="mt-2 text-[#BF9772] text-4xl transition-transform duration-300 group-hover:translate-y-1">
            ⌄
          </span>
        </button>
      )} */}

      {!showCountdown && (
  <button
    onClick={() => setShowCountdown(true)}
    className="group flex flex-col items-center mx-auto cursor-pointer"
  >
    <span
      className="
        font-serif
        text-[#BF9772]
        tracking-[4px]
        text-[14px]
        md:text-xl
        animate-pulse
      "
    >
      TAP TO REVEAL DATE
    </span>

    <span className="relative mt-3 flex items-center justify-center">
      {/* Soft glow/ripple */}
      <span className="absolute w-10 h-10 rounded-full border border-[#BF9772]/40 animate-ping" />

      {/* Arrow */}
      <span
        className="
          relative
          text-[#BF9772]
          text-3xl
          animate-bounce
          transition-all
          duration-300
          group-hover:scale-125
        "
      >
        ↓
      </span>
    </span>
  </button>
)}

      {/* COUNTDOWN */}
      {showCountdown && (
        <div className="mt-10">

          <h2 className="font-serif text-[30px] md:text-5xl text-[#171717]">
            Countdown
          </h2>

          <div className="mt-5 mb-14 text-[#D8B895] text-xl">
            ✦
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-11 px-5">
            {countdown.map((item, index) => (
              <div
                key={index}
                className="
                  w-[70px] h-[70px]
                  md:w-[155px] md:h-[145px]
                  rounded-xl
                  border border-[#E5CFB8]
                  bg-[#fdfcf9]
                  flex flex-col
                  items-center
                  justify-center
                "
              >
                <span className="font-serif text-[#C3946D] text-xl md:text-[32px]">
                  {String(item.value).padStart(2, "0")}
                </span>

                <span className="mt-1 text-[#A99A8B] text-[10px] tracking-[1px]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      )}
    </section>
  );
}