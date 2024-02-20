"use client";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import './styles.css'


const Hero = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section
        id="home"
        className="bg-[#e7edec] dark:bg-gray-dark relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  AI-Powered Video Creator for your Restaurant
                </h1>

                <p className="dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
                  Our Al Content Creator Transforms Your Phone Videos into Captivating Stories for Your Restaurant&apos;s Social Media.
                </p>


                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4">
                    <div
                      className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
                      data-wow-delay=".15s"
                    >
                      <div className="relative aspect-[77/40] items-center justify-center">
                        <Image src="/images/blog/food.jpg" alt="video image" fill />
                        <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                          <button
                            aria-label="video play button"
                            onClick={() => setOpen(true)}
                            className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-black transition hover:bg-opacity-100"
                          >
                            <svg
                              width="16"
                              height="18"
                              viewBox="0 0 16 18"
                              className="fill-current"
                            >
                              <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <ModalVideo
                channel="vimeo"
                autoplay={true}
                start={true}
                isOpen={isOpen}
                videoId="905542312"
                onClose={() => setOpen(false)}
              />

              <div className="flex flex-col pt-10 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="https://calendly.com/kanteenteam"
                  className="rounded-md bg-primary px-8 py-4 text-base font-semibold text-black dark:text-white duration-300 ease-in-out hover:bg-primary/80"
                >
                  Book a free session
                </Link>

              </div>
            </div>
          </div>
        </div>


      </section >
    </>
  );
};

export default Hero;
