import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroIntroduction = () => {
  return (
    <div className="hero flex-col mt-[30px] flex lg:flex-row gap-10 ">
      {/* <div>
        <Image
          src="/logo.jpg"
          alt=""
          width={250}
          height={100}
          style={{ borderRadius: "50%" }}
        />
      </div> */}
      <div className="flex flex-col max-w-4xl">
        <h1 className="text-2xl py-3 font-bold tracking-tight sm:text-4xl sm:leading-tight">
          {/* Renewable Energy, Computer Networking, IoT, Software development. */}
          FullStack Developer, Cloud/I.T. professional
        </h1>
        <p className="pb-6 text-base sm:text-lg">
          I’m Benjamin Chukwudile, and i am based in Lagos Nigeria. Engineering
          and Computer has been things i always do. I have experience with web
          development using react/Nextjs and with mobile development using
          reactNative/flutter.
        </p>
        <div className="pt-1 pb-3">
          <Link href="mailto:benjichukwudile@gmail.com" target="_blank">
            <button className="rounded-md bg-gray-600/30 dark:bg-gray-600 py-2 w-fit px-4 cursor-pointer hover:bg-gray-700/50 dark:hover:bg-gray-700">
              Contact me
            </button>
          </Link>
        </div>
      </div>
      <div className="relative w-full md:w-1/2 aspect-square max-w-md">
        <Image
          src="/smile_head.png"
          alt="Developer portrait"
          width={400}
          height={400}
          className="rounded-full object-cover border-4 border-primary/20"
          priority
        />
      </div>
    </div>
  );
};

export default HeroIntroduction;
