"use client";

import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Metadata } from "next";
import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Alert } from '@mui/material';
import axios from 'axios';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BlogDetailsPage = () => {
  const { theme } = useTheme();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [insta, setinsta] = useState('');
  const [contact, setContact] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [value, setValue] = React.useState('yes');


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleinstaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setinsta(event.target.value);
  };
  const handleSubmit = async () => {
    const data = { email, name, insta, value };
    try {
      axios.post('https://api.elasticemail.com/v2/email/send', null, {
        params: {
          apikey: 'BC4C0088210F0049D2AB1093AB13032B4EBB49989F8B67CD2C0BDD065B09F3127CAB259734A59EA316A4BF49CFDA9C99',
          subject: "L'Mida Collaboration",
          from: "sarajedlaoui99@gmail.com",
          to: "pukajedla@gmail.com",
          bodyText: `L'Mida Collaboration:\n video rating:\n Name: ${name} \n Email: ${email}\n Instagram Account: ${insta}
          `,
        }
      })
      console.log('Form Submitted:');
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000); // Dismiss alert after 3 seconds
    } catch (error) {
      console.error('Error while saving data:', error);
    }
  };

  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <div className="mt-10 mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight" > <a href="/influencers"><ArrowBackIcon></ArrowBackIcon></a></div>
              
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
                  Date: Everyday
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

                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Inspirations
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Stand out as one of our top influencers and get featured on Kanteen&apos;s social media.
                  </p>
                  
                  <div className="-mx-3 flex flex-wrap items-center justify-center mb-5" >


                    <div className="w-1/2 sm:w-1/4 px-1 py-1" >
                      <div
                        className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
                        data-wow-delay=".15s"
                      >
                        <div className="mb-5 relative items-center justify-center h-[400px] ">
                          <video controls autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
                            <source src="https://d205gdf6tf9tly.cloudfront.net/21.mp4" type="video/mp4" />
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
                            <source src="https://d205gdf6tf9tly.cloudfront.net/21.mp4" type="video/mp4" />
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
                            <source src="https://d205gdf6tf9tly.cloudfront.net/7.mp4" type="video/mp4" />
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
                            <source src="https://d205gdf6tf9tly.cloudfront.net/15.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>

                        </div>

                      </div>
                    </div>

                  </div>




                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <div
                      className="wow fadeInUp shadow-three dark:bg-gray-dark relative z-10 rounded-sm bg-white p-8 sm:p-11 lg:p-8 xl:p-11"
                      data-wow-delay=".2s"  >
                      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
                        Interested in joining the guest list?
                      </h3>
                      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
                        Please fill this form!
                      </p>
                      <div>

                        <input
                          type="text"
                          name="name"
                          value={name}
                          onChange={handleNameChange}
                          placeholder="Enter your name"
                          className="border-stroke dark:text-body-color-dark dark:shadow-two mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        />
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={handleEmailChange}
                          placeholder="Enter your email"
                          className="border-stroke dark:text-body-color-dark dark:shadow-two mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        />
                        <input
                          type="text"
                          name="insta"
                          value={insta}
                          onChange={handleinstaChange}
                          placeholder="Instagram account"
                          className="border-stroke dark:text-body-color-dark dark:shadow-two mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        />

                        <p className="mb-0  pb-0 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
                          Will you bring someone with you?
                        </p>

                        <FormControl>

                          <RadioGroup
                            row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={value}
                            onChange={handleChange}
                          >
                            <FormControlLabel className="mb-0  pb-0 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25"
                              value="yes"
                              control={<Radio />}
                              label="Yes" />
                            <FormControlLabel className="mb-0  pb-0 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25"
                              value="no"
                              control={<Radio />}
                              label="No" />

                          </RadioGroup>
                        </FormControl>
                        <input
                          onClick={handleSubmit}
                          type="submit"
                          value="Add"
                          className="shadow-submit dark:shadow-submit-dark mb-5 flex w-full cursor-pointer items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-black dark:text-white duration-300 hover:bg-primary/90"
                        />
                        {showAlert && (
                          <Alert severity="success" sx={{ marginBottom: 2 }}>
                            Information successfully sent!
                          </Alert>
                        )}

                      </div>

                      <div>
                        <span className="absolute left-2 top-7">
                          <svg
                            width="57"
                            height="65"
                            viewBox="0 0 57 65"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.5"
                              d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z"
                              fill="url(#paint0_linear_1028_600)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_1028_600"
                                x1="-18.3187"
                                y1="55.1044"
                                x2="37.161"
                                y2="15.3509"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop
                                  stopColor={theme === "light" ? "#c9f269" : "#fff"}
                                  stopOpacity="0.62"
                                />
                                <stop
                                  offset="1"
                                  stopColor={theme === "light" ? "#c9f269" : "#fff"}
                                  stopOpacity="0"
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>

                        <span className="absolute bottom-24 left-1.5">
                          <svg
                            width="39"
                            height="32"
                            viewBox="0 0 39 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.5"
                              d="M14.7137 31.4215L38.6431 4.24115L6.96581e-07 0.624124L14.7137 31.4215Z"
                              fill="url(#paint0_linear_1028_601)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_1028_601"
                                x1="39.1948"
                                y1="38.335"
                                x2="10.6982"
                                y2="10.2511"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop
                                  stopColor={theme === "light" ? "#c9f269" : "#fff"}
                                  stopOpacity="0.62"
                                />
                                <stop
                                  offset="1"
                                  stopColor={theme === "light" ? "#c9f269" : "#fff"}
                                  stopOpacity="0"
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>

                        <span className="absolute right-2 top-[140px]">
                          <svg
                            width="38"
                            height="38"
                            viewBox="0 0 38 38"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.5"
                              d="M10.6763 35.3091C23.3976 41.6367 38.1681 31.7045 37.107 17.536C36.1205 4.3628 21.9407 -3.46901 10.2651 2.71063C-2.92254 9.69061 -2.68321 28.664 10.6763 35.3091Z"
                              fill="url(#paint0_linear_1028_602)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_1028_602"
                                x1="-0.571054"
                                y1="-37.1717"
                                x2="28.7937"
                                y2="26.7564"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop
                                  stopColor={theme === "light" ? "#c9f269" : "#fff"}
                                  stopOpacity="0.62"
                                />
                                <stop
                                  offset="1"
                                  stopColor={theme === "light" ? "#c9f269" : "#fff"}
                                  stopOpacity="0"
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>

                        <span className="absolute right-0 top-0">
                          <svg
                            width="162"
                            height="91"
                            viewBox="0 0 162 91"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.3">
                              <path
                                opacity="0.45"
                                d="M1 89.9999C8 77.3332 27.7 50.7999 50.5 45.9999C79 39.9999 95 41.9999 106 30.4999C117 18.9999 126 -3.50014 149 -3.50014C172 -3.50014 187 4.99986 200.5 -8.50014C214 -22.0001 210.5 -46.0001 244 -37.5001C270.8 -30.7001 307.167 -45 322 -53"
                                stroke="url(#paint0_linear_1028_603)"
                              />
                              <path
                                opacity="0.45"
                                d="M43 64.9999C50 52.3332 69.7 25.7999 92.5 20.9999C121 14.9999 137 16.9999 148 5.49986C159 -6.00014 168 -28.5001 191 -28.5001C214 -28.5001 229 -20.0001 242.5 -33.5001C256 -47.0001 252.5 -71.0001 286 -62.5001C312.8 -55.7001 349.167 -70 364 -78"
                                stroke="url(#paint1_linear_1028_603)"
                              />
                              <path
                                opacity="0.45"
                                d="M4 73.9999C11 61.3332 30.7 34.7999 53.5 29.9999C82 23.9999 98 25.9999 109 14.4999C120 2.99986 129 -19.5001 152 -19.5001C175 -19.5001 190 -11.0001 203.5 -24.5001C217 -38.0001 213.5 -62.0001 247 -53.5001C273.8 -46.7001 310.167 -61 325 -69"
                                stroke="url(#paint2_linear_1028_603)"
                              />
                              <path
                                opacity="0.45"
                                d="M41 40.9999C48 28.3332 67.7 1.79986 90.5 -3.00014C119 -9.00014 135 -7.00014 146 -18.5001C157 -30.0001 166 -52.5001 189 -52.5001C212 -52.5001 227 -44.0001 240.5 -57.5001C254 -71.0001 250.5 -95.0001 284 -86.5001C310.8 -79.7001 347.167 -94 362 -102"
                                stroke="url(#paint3_linear_1028_603)"
                              />
                            </g>
                            <defs>
                              <linearGradient
                                id="paint0_linear_1028_603"
                                x1="291.35"
                                y1="12.1032"
                                x2="179.211"
                                y2="237.617"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop
                                  offset="0.328125"
                                  stopColor={theme === "light" ? "#c9f269" : "#fff"}
                                />
                                <stop
                                  offset="1"
                                  stopColor={theme === "light" ? "#c9f269" : "#fff"}
                                  stopOpacity="0"
                                />
                              </linearGradient>
                              <linearGradient
                                id="paint1_linear_1028_603"
                                x1="333.35"
                                y1="-12.8968"
                                x2="221.211"
                                y2="212.617"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop
                                  offset="0.328125"
                                  stopColor={theme === "light" ? "#c9f269" : "#fff"}
                                />
                                <stop
                                  offset="1"
                                  stopColor={theme === "light" ? "#c9f269" : "#fff"}
                                  stopOpacity="0"
                                />
                              </linearGradient>
                              <linearGradient
                                id="paint2_linear_1028_603"
                                x1="294.35"
                                y1="-3.89678"
                                x2="182.211"
                                y2="221.617"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop
                                  offset="0.328125"
                                  stopColor={theme === "light" ? "#c9f269" : "#fff"}
                                />
                                <stop
                                  offset="1"
                                  stopColor={theme === "light" ? "#c9f269" : "#fff"}
                                  stopOpacity="0"
                                />
                              </linearGradient>
                              <linearGradient
                                id="paint3_linear_1028_603"
                                x1="331.35"
                                y1="-36.8968"
                                x2="219.211"
                                y2="188.617"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop
                                  offset="0.328125"

                                />
                                <stop
                                  offset="1"

                                  stopOpacity="0"
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
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
                        <TagButton text="Drink" />
                        <TagButton text="HappyHour" />
                        <TagButton text="LmidaSF" />
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
