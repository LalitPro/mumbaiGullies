import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

const App = () => {
  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 5,
      duration: 1.5,
      transformOrigin: "50% 50%",
      ease: "Power4.easeInOut",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 1.5,
      delay: -1 / 8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          tl.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.from(".main", {
      scale: 2,
      opacity: 0,
      duration: 5,
    });

    gsap.to(".main", {
      rotate: 0,
      scale: 1,
      duration: 5,
      ease: "Expo.easeInOut",
    });
    gsap.to(".sky", {
      rotate: 0,
      scale: 1.5,
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".bg", {
      rotate: 0,
      scale: 1.6,
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".text", {
      rotate: 0,
      scale: 1.5,
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".title", {
      rotate: 0,
      scale: 0.4,
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".character", {
      rotate: 0,
      x: "-50%",
      bottom: "-40%",
      scale: 1,
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    });

    document.querySelector(".part2").addEventListener("mouseenter", () => {
      gsap.to(".img2", {
        rotate: 5,
        scale: 0.8,
        duration: 2,
        bottom: "-50%",
        ease: "Expo.easeInOut",
      });
    });

    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagesdiv .text", {
        x: `${xMove * 0.6}%`,
      });
      gsap.to(".title", {
        x: `${xMove * 0.6}%`,
      });
      gsap.to(".character", {
        marginLeft: `${xMove * 0.6}%`,
      });
      gsap.to(".sky", {
        x: `${xMove * 0.5}%`,
      });
      gsap.to(".bg", {
        x: `${xMove * 0.8}%`,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="100"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  MG
                </text>
              </g>
            </mask>
          </defs>

          <image
            href="./bg.jpg"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />

          <image
            href="./title.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7] bg-[#000]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar w-full py-5 px-5 md:py-10 md:px-10 z-[10] absolute top-0 left-0">
              <div className="logo flex group items-center group-hover:gap-3 gap-3 md:gap-7">
                <a
                  href="http://gameeon.in/"
                  target="_blank"
                  className="text-2xl flex  md:text-4xl hover:scale-105 px-4 rounded-2xl py-2 bg-black hover:text-green-600 duration-75 font-[Helvetica_Now_Display] font-bold leading-none text-green-500"
                >
                  <img src="./gameeon.png" className="h-10 mr-3" alt="logo" />
                  GameEon Studios
                </a>
              </div>
            </div>
            <div className="imagesdiv overflow-hidden relative w-full h-screen">
              <img
                className="absolute scale-[2] rotate-[-4deg] bg top-0 left-0 w-full h-full object-cover"
                src="./shop.jpg"
                alt="Background Image"
              />
              <img
                className="absolute scale-[2] -mt-40 rotate-[-4deg] title top-0 left-0 w-full h-full object-contain"
                src="./title.png"
                alt="Mumbai Gullies"
              />

              <div className="text hidden absolute px-5 py-3 scale-[1.5] md:scale-[1.8] rotate-[-10deg] flex-col gap-2 text-white mx-auto top-10 md:top-20 left-1/2 -translate-x-1/2">
                <h1 className="text-[5rem] md:text-[10rem] leading-none -ml-5 md:-ml-10">
                  grand
                </h1>
                <h1 className="text-[5rem] md:text-[10rem] leading-none ml-5 md:ml-10">
                  theft
                </h1>
                <h1 className="text-[5rem] md:text-[10rem] leading-none -ml-5 md:-ml-10">
                  auto
                </h1>
              </div>
              <img
                className="absolute character hover:rotate-12 duration-75 -bottom-[150%] left-1/2 -translate-x-1/2 scale-[2] md:scale-[3] rotate-[-20deg]"
                src="./ch.png"
                alt="Character"
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-10 px-5 md:py-15 md:px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex duration-100 font-bold hover:gap-2 hover:text-blue-500 text-lg md:text-xl items-center gap-2 md:gap-4">
                <i className="ri-arrow-down-line text-3xl md:text-4xl"></i>
                <button className="font-[Helvetica_Now_Display] font-black">
                  Scroll Down
                </button>
              </div>
              <img
                className="absolute hover:font-bold hover:scale-110 rounded-xl px-4 py-2 duration-75 top-1/2 left-1/2 -translate-x-1/2 h-[40px] md:h-[55px] -translate-y-1/2"
                src="./ps5.png"
                alt="ps5"
              />
            </div>
          </div>
          <div className="part2 w-full min-h-screen max-h-full flex flex-col md:flex-row items-center justify-center px-5 md:px-10 bg-[#000]">
            <div className="cntnr flex flex-col md:flex-row text-white w-full h-[80%]">
              <div className="limg relative w-full md:w-1/2 h-full">
                <img
                  className="img2 hover:rotate-[-5deg] scale-[0] mt-96 md:scale-[0.25] rotate-[10deg] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute"
                  src="./bg.jpg"
                  alt="image"
                />
              </div>
              <div className="rg py-10 md:py-30 w-full md:w-[30%]">
                <h1 className="text-4xl md:text-8xl">Comming Soon..</h1>
                <h1 className="text-xl md:text-2xl mt-10 font-bold font-[Helvetica_Now_Display]">
                  Big things, Takes Time
                </h1>
                <p className="mt-5 md:mt-10 text-lg md:text-xl font-[Helvetica_Now_Display]">
                  Mumbai Gullies is a video game based on Mumbai by GameEon
                  Studios. Also known has Indian GTA with HD graphics and AAA
                  games mechanics.
                </p>
                <p className="mt-3 text-lg md:text-xl font-[Helvetica_Now_Display]">
                  Enter Mumbai Gullies, a game where you would play as an Indian
                  protagonist walking through the unique landscape of Mumbai. An
                  open world action adventure game, where you will be carrying
                  out missions to reach the top, from ruling local gullies of
                  Mumbai to ruling the city itself.
                </p>
                <a
                  href="https://mumbaigullies.com/"
                  className="bg-yellow-500 inline-block hover:bg-yellow-600 px-5 md:px-8 mt-2 rounded-md py-5 md:py-7 text-lg md:text-2xl text-black"
                >
                  Visit Now
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-5 md:px-10 py-4 flex items-center justify-between text-zinc-100 border-t-2 border-white">
            <a
              className="font-[Helvetica_Now_Display] hover:text-blue-500 text-sm md:text-base"
              href="https://lalitweb.netlify.app"
              target="_blank"
            >
              Made by Lalit Kumar Yadav
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
