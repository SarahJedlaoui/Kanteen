import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Lmida Happy Hour Page",
  description: "This is Lmida Happy Hour Page.",
  // other metadata
};

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mt-10 mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  L&apos;Mida Happy Hour
                </h2>
                <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  <strong className="text-green underline dark:text-white">
                    Restaurant:
                  </strong> L&apos;Mida San Francisco
                </p>
                <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  <strong className="text-green underline dark:text-white">
                    Instagram:
                  </strong> <a href="https://www.instagram.com/lmidasf?igsh=MXFwazB5MzN3OWN1dw==">lmidasf </a>
                </p>
                <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  <strong className="text-green underline dark:text-white">
                    Description:
                  </strong> L&apos;Mida San Francisco is excited to announce a special Happy Hour event this weekend, and we&apos;re inviting 10 talented influencers to join us for an evening of fun, flavor, and creativity.
                  As one of our exclusive guests, you&apos;ll have the opportunity to:

                </p>
                <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  As one of our exclusive guests, you&apos;ll have the opportunity to:
                </p>
                <p className="ml-10 mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  <strong className="text-green dark:text-white">
                    Attend the Event:
                  </strong>

                  Enjoy a vibrant and lively atmosphere at L&apos;Mida SF, capturing the essence of our Happy Hour.
                </p>
                <p className="ml-10 mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  <strong className="text-green dark:text-white">
                    Take Photos and Reels:
                  </strong>
                  Showcase your creative skills by taking engaging photos and reels that highlight the event&apos;s unique ambiance, delicious drinks, and delectable appetizers.
                </p>
                <p className="ml-10 mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  <strong className="text-green dark:text-white">
                    Receive Complimentary Meals or Drinks:
                  </strong>
                  Indulge in a $50 meal or drinks for two as a token of our appreciation for your contribution.
                </p>
                <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Join us in sharing the L&apos;Mida SF Happy Hour experience with your followers while enjoying an evening of networking, creativity, and delightful cuisine.                </p>
                <div>
                  <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    <strong className="text-green underline dark:text-white">
                      Event Details:
                    </strong>
                  </p>
                  <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Date: Every Saturday
                  </p>
                  <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Time: 5pm-6.30pm 

                  </p>
                  <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Location: L&apos;Mida SF, 2359 Chestnut Street San Francisco, CA 94123
                  </p>

                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.5787769537715!2d-122.44218980000001!3d37.7999102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580d43e9a4ccd%3A0x61185dda0d7e4a0d!2s2359%20Chestnut%20St%2C%20San%20Francisco%2C%20CA%2094123%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2stn!4v1715180520333!5m2!1sfr!2stn"
                        width="100%"
                        height="400"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="object-cover object-center"></iframe>
                    </div>
                  </div>

                  <h3 className="font-xl mb-5 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Deliverables
                  </h3>
                  <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Instagram Stories
                  </p>
                  <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Instagram Reels
                  </p>
                  <p className="mb-5 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Videos of drinks and food
                  </p>


                  <h3 className="font-xl mb-5 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Inspirations
                  </h3>




                  <div className="-mx-3 flex flex-wrap items-center justify-center mb-5" >


                    <div className="w-1/2 sm:w-1/4 px-1 py-1" >
                      <div
                        className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
                        data-wow-delay=".15s"
                      >
                        <div className="mb-5 relative items-center justify-center h-[400px] ">
                          <video controls autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
                            <source src="https://d205gdf6tf9tly.cloudfront.net/ideas/idea1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                    </div>



                    <div className="w-1/2 sm:w-1/4 px-1 py-1" >
                      <div
                        className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
                        data-wow-delay=".15s"
                      >
                        <div className="mb-5 relative items-center justify-center h-[400px] ">
                          <video controls autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
                            <source src="https://d205gdf6tf9tly.cloudfront.net/ideas/idea2.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                    </div>




                    <div className="w-1/2 sm:w-1/4 px-1 py-1">
                      <div
                        className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
                        data-wow-delay=".15s"
                      >
                        <div className="mb-5 relative  items-center justify-center h-[400px]">
                          <video autoPlay muted loop controls className="absolute inset-0 w-full h-full object-cover">
                            <source src="https://d205gdf6tf9tly.cloudfront.net/ideas/idea3.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>

                        </div>

                      </div>

                    </div>





                    <div className="w-1/2 sm:w-1/4 px-1 py-1">
                      <div
                        className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
                        data-wow-delay=".15s"
                      >
                        <div className="mb-5 relative items-center justify-center h-[400px]">
                          <video autoPlay muted loop controls className="absolute inset-0 w-full h-full object-cover">
                            <source src="https://d205gdf6tf9tly.cloudfront.net/ideas/idea4.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>

                        </div>

                      </div>
                    </div>

                  </div>





                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-center text-base font-medium italic text-body-color">
                      If you would like to be one of the influencers participating in this event, please send us your availability at maher@bei.dev.
                    </p>
                    <span className="absolute left-0 top-0 z-[-1]">
                      <svg
                        width="132"
                        height="109"
                        viewBox="0 0 132 109"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                          fill="url(#paint0_linear_111:606)"
                        />
                        <path
                          opacity="0.5"
                          d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z"
                          fill="url(#paint1_linear_111:606)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_111:606"
                            x1="94.7523"
                            y1="82.0246"
                            x2="8.40951"
                            y2="52.0609"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_111:606"
                            x1="90.3206"
                            y1="58.4236"
                            x2="1.16149"
                            y2="50.8365"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute bottom-0 right-0 z-[-1]">
                      <svg
                        width="53"
                        height="30"
                        viewBox="0 0 53 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          opacity="0.8"
                          cx="37.5"
                          cy="37.5"
                          r="37.5"
                          fill="#c9f269"
                        />
                        <mask
                          id="mask0_111:596"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="75"
                          height="75"
                        >
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="#c9f269"
                          />
                        </mask>
                        <g mask="url(#mask0_111:596)">
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="url(#paint0_radial_111:596)"
                          />
                          <g opacity="0.8" filter="url(#filter0_f_111:596)">
                            <circle
                              cx="40.8089"
                              cy="19.853"
                              r="15.4412"
                              fill="white"
                            />
                          </g>
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_111:596"
                            x="4.36768"
                            y="-16.5881"
                            width="72.8823"
                            height="72.8823"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="10.5"
                              result="effect1_foregroundBlur_111:596"
                            />
                          </filter>
                          <radialGradient
                            id="paint0_radial_111:596"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(37.5 37.5) rotate(90) scale(40.2574)"
                          >
                            <stop stopOpacity="0.47" />
                            <stop offset="1" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>

                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="mb-3 text-sm font-medium text-body-color">
                        Popular Tags :
                      </h4>
                      <div className="flex items-center">
                        <TagButton text="lmida" />
                        <TagButton text="HappyHour" />
                        <TagButton text="Drinks" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div >
        </div >
      </section >
    </>
  );
};

export default BlogDetailsPage;
