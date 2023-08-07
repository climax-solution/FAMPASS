import { useState, useEffect } from "react";

const Timer = () => {
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    const targetTime = new Date().getTime() + 60000000; // 10 minutes in milliseconds

    const timer = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDifference = targetTime - currentTime;

      if (timeDifference <= 0) {
        clearInterval(timer);
        setRemainingTime(0);
      } else {
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));

        setRemainingTime(
          `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`
        );
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function formatTime(time) {
    return time.toString().padStart(2, "0");
  }

  return (
    <div className="inline-flex mt-5 items-center rounded-full bg-[#1C1C1C] border border-[#26E2FF]   text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base">
      <span className="rounded-full bg-gray-900 px-9 py-2  text-sm font-semibold leading-5 text-white">
        MINT IN
      </span>
      <span className="rounded-full bg-[#26E2FF] px-9 py-2  text-sm font-semibold leading-5 text-white">
        {remainingTime}
      </span>
    </div>
  );
};

export default Timer;
