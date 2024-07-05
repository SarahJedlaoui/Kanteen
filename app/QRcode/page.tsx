"use client";
import TagButton from "@/components/Blog/TagButton";
import { useTheme } from "next-themes";
import React, { useState, useEffect } from 'react';
import { Alert } from '@mui/material';
import axios from 'axios';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme as Tham } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [

  {
    label: 'Bird',
    src:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    src:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    src:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];
const images2 = [


  {
    label: 'Bali, Indonesia',
    src:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    src:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    src:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const BlogDetailsPage = () => {
  const { theme } = useTheme();
  const theme1 = Tham();
  const [mediaTypes, setMediaTypes] = useState([]);
  const [media, setMedia] = useState<any[]>([]);
  const [feedbackEntries, setFeedbackEntries] = useState<any[]>([]);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [feedback, setfeedback] = useState('');
  const [contact, setContact] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [rating, setRating] = useState<number | undefined>(4);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const [loadingg, setLoadingg] = useState(true);
  const [page, setPage] = useState(1);
  const [limit] = useState(2); // Number of entries per page
  const [activeSteps, setActiveSteps] = useState<number[]>([]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handlefeedbackChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setfeedback(event.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('name', name);
    formData.append('feedback', feedback);
    formData.append('rating', rating?.toString() || '5');
    selectedFiles.forEach(file => {
      formData.append('media', file);
    });

    try {
      const response = await axios.post('/api/media', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      setShowAlert(true);
    } catch (error) {
      console.error('Error uploading files:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStepChange = (index: number, step: number) => {
    setActiveSteps(prev => {
      const newSteps = [...prev];
      newSteps[index] = step;
      return newSteps;
    });
  };


  useEffect(() => {
    const fetchFeedbackEntries = async () => {
      try {
        setLoadingg(true);
        const response = await axios.get(`/api/media?page=${page}&limit=${limit}`);
        setFeedbackEntries(response.data.feedbackEntries);
        setActiveSteps(response.data.feedbackEntries.map(() => 0)); // Initialize active steps
      } catch (error) {
        console.error('Error fetching feedback entries:', error);
      } finally {
        setLoadingg(false);
      }
    };

    fetchFeedbackEntries();
  }, [page, limit]);




  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 1));
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
                  Welcome to L&apos;Mida Customers Page
                </h2>

                <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                  <div
                    className="wow fadeInUp shadow-three dark:bg-gray-dark relative z-10 rounded-sm bg-white p-8 sm:p-11 lg:p-8 xl:p-11"
                    data-wow-delay=".2s"  >
                    <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
                      Add Your Media and Feedback
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
                        placeholder="Enter your full name"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />

                      <input
                        type="text"
                        name="feedback"
                        value={feedback}
                        onChange={handlefeedbackChange}
                        placeholder="Feedback"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />

                      <input
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        className="border-stroke dark:text-body-color-dark dark:shadow-two mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />

                      <div className="mb-4">
                        {selectedFiles.map((file, index) => {
                          const fileURL = URL.createObjectURL(file);
                          return (
                            <div key={index} className="mb-2">
                              {file.type.startsWith('image/') ? (
                                <img
                                  src={fileURL}
                                  alt={`preview ${index}`}
                                  className="h-32 w-32 object-cover rounded-sm"
                                />
                              ) : (
                                <video
                                  src={fileURL}
                                  controls
                                  className="h-32 w-32 object-cover rounded-sm"
                                />
                              )}
                            </div>
                          );
                        })}
                      </div>
                      <div className="mb-5 flex text-yellow-400 text-3xl">
                        <Rating name="unique-rating"
                          defaultValue={rating}
                          onChange={(event, newValue) => {
                            console.log("New Rating Value:", newValue);
                            setRating(newValue ?? 5);
                          }}

                          size="large"
                          sx={{
                            '& .MuiRating-iconFilled': {
                              color: 'gold',
                            }
                          }}
                        />
                      </div>


                      {loading ? (
                        <div className="mb-5 flex items-center justify-center">
                          <CircularProgress color="success" />
                          <span className="ml-2 text-base font-medium text-black dark:text-white">Data is being stored...</span>
                        </div>
                      ) : (
                        <input
                          onClick={handleSubmit}
                          type="submit"
                          value="Add"
                          className="shadow-submit dark:shadow-submit-dark mb-5 flex w-full cursor-pointer items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-black dark:text-white duration-300 hover:bg-primary/90"
                        />
                      )}
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




                <div>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Reviews
                  </h3>




                  {loadingg ? (
                    <div className="flex items-center justify-center">
                      <CircularProgress color="success" />
                      <span className="ml-2 text-base font-medium text-black dark:text-white">Loading reviews, please wait...</span>
                    </div>
                  ) : (
                    <div>
                      <div className="-mx-0 flex flex-wrap items-center justify-center">
                        {feedbackEntries.map((entry, index) => (
                          <div key={index} className="fullwidth sm:w-1/2 px-1 py-0 flex flex-col max-w-4xl mx-auto rounded-lg shadow-lg overflow-hidden mb-10">
                            <div className="flex overflow-hidden rounded-md items-center justify-center">
                              <div className="w-1/2">
                                <div className="mb-5 relative items-center rounded-lg justify-center h-[400px]">
                                  <AutoPlaySwipeableViews
                                    axis="x"
                                    index={activeSteps[index]}
                                    onChangeIndex={(step) => handleStepChange(index, step)}
                                    enableMouseEvents
                                    className="absolute rounded-lg inset-0 w-full h-full object-cover"
                                  >
                                    {entry.files.map((file, fileIndex) => (
                                      file.contentType.startsWith('image/') ? (
                                        <Box
                                          key={fileIndex}
                                          component="img"
                                          sx={{
                                            height: 400,
                                            display: 'block',
                                            maxWidth: 400,
                                            overflow: 'hidden',
                                            width: '100%',
                                          }}
                                          src={`/api/media/${file.id}`}
                                          alt={file.filename}
                                        />
                                      ) : (
                                        <video
                                          key={fileIndex}
                                          src={`/api/media/${file.id}`}
                                          controls
                                          className="h-32 w-32 object-cover rounded-sm"
                                        />
                                      )
                                    ))}
                                  </AutoPlaySwipeableViews>
                                </div>
                              </div>
                              <div className="w-1/2 ml-2 mb-5 h-[400px] p-4 bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="text-lg font-bold mb-2">{entry.name}</div>
                                <div className="text-gray-700 text-sm mb-2">
                                  <p className="h-[300px] overflow-y-auto">
                                    {entry.feedback}
                                  </p>
                                </div>
                                <div className="flex text-yellow-400 text-3xl">
                                  <Rating
                                    name={`rating-${index}`}
                                    value={Number(entry.rating)}
                                    readOnly
                                    size="large"
                                    sx={{
                                      '& .MuiRating-iconFilled': {
                                        color: 'gold',
                                      }
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-center space-x-4 mt-4">
                        <button onClick={handlePrevPage} disabled={page === 1} className="px-4 py-2 bg-blue-500 text-white rounded">
                          Previous
                        </button>
                        <button onClick={handleNextPage} className="px-4 py-2 bg-blue-500 text-white rounded">
                          Next
                        </button>
                      </div>
                    </div>
                  )}





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
