"use client";
import React, { useState } from 'react';
import { Alert } from '@mui/material';
import axios from 'axios';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect,useRef  } from 'react';
import Link from 'next/link';
import Image from "next/image";

interface SessionInfo {
  name: string;
  email?: string;
  description?: string;
}

interface RestaurantInfo {
  name: string;
  about: string;
  customerLove: string;
  opportunities: string;
  videoParagraph: string;
  videos: string;
}
const defaultSessionInfo: SessionInfo = {
  name: '',
  email: '',
  description: '',
};
const defaultRestaurantInfo: RestaurantInfo = {
  name: '',
  about: '',
  customerLove: '',
  opportunities: '',
  videoParagraph: '',
  videos: ''
};

const ProfilePage = () => {
  const { data: session, status, update  } = useSession();
  const router = useRouter();
  const [sessionInfo, setSessionInfo] = useState<SessionInfo>(defaultSessionInfo);
  const [restaurantInfo, setRestaurantInfo] = useState<RestaurantInfo | null>(null);
  const [imgSrc, setImgSrc] = useState(session?.user?.image || "/images/logo/default.png");
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (session?.user?.email) {
      axios.get(`/api/user/${session?.user?.email}`)
        .then(response => {
          console.log('response', response.data)
          setSessionInfo(response.data);
        })
        .catch(error => {
          console.error('Error fetching restaurant info:', error);
        });
    }
  }, [status, session]);
  // Fetch restaurant info
  useEffect(() => {
    if (session?.user?.email) {
      axios.get(`/api/restaurants/${session?.user?.email}`)
        .then(response => {
          console.log('response', response.data);
          setRestaurantInfo(response.data);
        })
        .catch(error => {
          console.error('Error fetching restaurant info:', error);
        });
    }
  }, [status, session]);
  
  useEffect(() => {
    console.log('Session data:', session);
    if (session?.user?.image) {
      console.log('User image URL:', session.user.image);
      setImgSrc(session.user.image);
    }
  }, [session]);

  const handleError = () => {
    console.log('Image failed to load, setting default image');
    setImgSrc("/images/logo/default.png");
  };

  const handleImageChange = (event:any) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImgSrc(URL.createObjectURL(file));
      handleImageUpload(file); // Automatically upload the image after selection
    }
  };

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('email', session?.user?.email || '');
  
    for (let pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }
  
    try {
      const response = await axios.post('/api/user/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (response.status === 200) {
        setImgSrc(response.data.imageUrl);
        await update(); // Ensure the session is updated with the new image URL
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  
  

  const triggerFileInput = () => {
    fileInputRef?.current?.click();
  };

  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <div className="mt-10 mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight" >
                  <a href="/auth/addRestaurant">
                    <ArrowBackIcon></ArrowBackIcon>
                  </a>
                </div>
                <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                  {sessionInfo?.name && (
                    <div className="flex">
                      {/* Left Section */}
                      <div className="flex-1/3 flex flex-col items-center">
                        <div className="w-32 h-32 mb-4">
                          <img
                            src={imgSrc} 
                            alt={sessionInfo?.name}
                            className="rounded-full object-cover w-full h-full"
                            onError={handleError}
                          />
                        </div>
                        <h2 className="text-xl font-bold leading-tight text-black dark:text-white">
                          {sessionInfo.name}
                        </h2>
                     {/**  <input 
                          type="file" 
                          accept="image/*" 
                          ref={fileInputRef} 
                          onChange={handleImageChange} 
                          style={{ display: 'none' }} 
                        />
                        <button 
                          onClick={triggerFileInput} 
                          className="mt-2 shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center 
                          rounded-md bg-primary px-18 py-3 text-base font-medium text-white duration-300 hover:bg-primary/90">
                          Change Image
                        </button> */} 
                      </div>

                      {/* Right Section */}
                      <div className="flex-2/3 pl-8">
                        <h2 className="mt-10 mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                          {sessionInfo.name}
                        </h2>
                        <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                          <strong className="text-green underline dark:text-white">Name:</strong> {sessionInfo.name}
                        </p>
                        <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                          <strong className="text-green underline dark:text-white">Email:</strong> {sessionInfo.email}
                        </p>


                        {restaurantInfo?.name ? (
                          <>
                            <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                              <strong className="text-green underline dark:text-white">Restaurant Name:</strong>{" "}
                              <a href="https://www.instagram.com/lmidasf?igsh=MXFwazB5MzN3OWN1dw=="> {restaurantInfo?.name} </a>
                            </p>
                            <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                              <strong className="text-green underline dark:text-white">About Resaturant:</strong>{" "}
                              {restaurantInfo?.about}
                            </p>
                            <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                              <strong className="text-green underline dark:text-white">What Customers Love:</strong>{" "}
                              {restaurantInfo?.customerLove}
                            </p>
                          </>
                        ) : (
                          <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                            <strong className="text-green underline dark:text-white">Note:</strong>{" "}
                            Please fill the privous form to complete your profile
                          </p>

                        )}

                      </div>
                    </div>
                  )}


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
                <div>
                  <h3 className="font-xl mb-5 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Why Partner with Kanteen?
                  </h3>
                  <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    At Kanteen, we understand the importance of standing out in the crowded restaurant industry. By partnering with us,
                    you gain access to a suite of benefits designed to elevate your brand and drive customer engagement:
                  </p>
                  <strong className="text-green underline dark:text-white">Personalized Page Creation:</strong>
                  <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We create a unique, customized page for your restaurant that showcases your story, ambiance, and culinary delights. The personalized page
                    is exclusively accessible to your restaurant. Here, you can review the videos we create for you, provide feedback,
                    and select which ones you want us to post on your social media. This ensures that the content
                    we produce aligns perfectly with your vision and brand, allowing you to maintain control over your restaurant&apos;s online presence.
                  </p>

                  <strong className="text-green underline dark:text-white">AI-Powered Content:</strong>
                  <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Our advanced AI pipeline produces high-quality, engaging videos and reels for your Instagram. These videos not only enhance your social media
                    presence but also attract and retain more customers by showcasing the essence of your restaurant.
                  </p>

                  <strong className="text-green underline dark:text-white">Increased Visibility:</strong>
                  <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    With our tailored marketing strategies, your restaurant will gain increased visibility on social media platforms.
                    Our content is optimized to reach a broader audience, ensuring that more people discover and visit your restaurant.
                  </p>

                  <strong className="text-green underline dark:text-white">Professional Expertise:</strong>
                  <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Our team consists of marketing professionals, content creators, and AI specialists who are dedicated to helping your restaurant succeed.
                    We leverage our expertise to craft compelling narratives and visually stunning content that resonates with your audience.
                  </p>

                  <strong className="text-green underline dark:text-white">Data-Driven Insights:</strong>
                  <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We provide detailed analytics and insights to help you understand the impact of our content on your business.
                    By analyzing customer engagement and feedback, we continuously refine our strategies to deliver the best results.
                  </p>

                  <strong className="text-green underline dark:text-white">Cost-Effective Solutions:</strong>
                  <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Our services are designed to be affordable and provide excellent value for your investment.
                    We offer competitive pricing without compromising on quality, ensuring that you get the best return on your marketing budget.
                  </p>

                  <strong className="text-green underline dark:text-white">Hassle-Free Process:</strong>
                  <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We handle everything from content creation to page management, allowing you to focus on what you do best
                    running your restaurant. Our streamlined process ensures a hassle-free experience, saving you time and effort.
                  </p>

                  <strong className="text-green underline dark:text-white">Community Engagement:</strong>
                  <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We help you build a loyal customer base by fostering a sense of community around your brand.
                    Our engaging content encourages customer interaction and fosters a strong connection between your restaurant and your patrons.
                  </p>
                </div>
                <div>

                  <h3 className="mt-5 font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Some Of Our Works
                  </h3>
                  <div className="-mx-3 flex flex-wrap items-center justify-center mb-5" >


                    <div className="w-1/2 sm:w-1/4 px-1 py-1" >
                      <div
                        className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
                        data-wow-delay=".15s"
                      >
                        <div className="mb-5 relative items-center justify-center h-[400px] ">
                          <video controls autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
                            <source src="https://d205gdf6tf9tly.cloudfront.net/tokyo/new/video5.mp4" type="video/mp4" />
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
                            <source src="https://d205gdf6tf9tly.cloudfront.net/lmida/happy2.mp4" type="video/mp4" />
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
                            <source src="https://d205gdf6tf9tly.cloudfront.net/buvette4.mp4" type="video/mp4" />
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
                            <source src="https://d205gdf6tf9tly.cloudfront.net/the-ballard-cut/ballard2.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>

                        </div>

                      </div>
                    </div>

                  </div>

                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">

                    <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                      By partnering with Kanteen, you&apos;re not just getting a service provider
                      - you&apos;re gaining a dedicated partner committed to helping your restaurant thrive.
                      Let us help you tell your story, attract more customers, and achieve your business goals.
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


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
