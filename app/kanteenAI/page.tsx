"use client";
import Link from "next/link";
import { useState, FormEvent } from 'react';
import { Metadata } from "next";
import axios from 'axios';
import Typography from '@mui/material/Typography';
   import {Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';


const SignupPage = () => {

  const [formData, setFormData] = useState({ question: '' });
  const [showAlert, setShowAlert] = useState(false);

  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [customerLove, setCustomerLove] = useState('');
  const [opportunities, setOpportunities] = useState('');
  const [videoParagraph, setVideoParagraph] = useState('');
  const [videos, setVideos] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = async () => {

    const data = {
      name,
      about,
      customerLove,
      opportunities,
      videoParagraph,
      videos,
    }

    console.log(data)
    try {
      const response = await fetch('https://leapback-d796b66e0016.herokuapp.com/api/restaurant/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      setIsSubmittedSuccessfully(true);
      setOpenSnackbar(true);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        // Here you can log more detailed information about the error
        console.error('Error response:', error.response);
      } else {
        console.error('An unexpected error occurred:', error);
      }
      setIsSubmittedSuccessfully(false);
    }
  };

  const handleCloseSnackbar = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <>
      <section className="relative z-10 overflow-hidden pb-20 pt-48 md:pb-24 lg:pb-32 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three mx-auto max-w-[500px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Add new Restaurant
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  It’s totally free and super easy
                </p>



                <form onSubmit={handleSubmit}>
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Restaurant Name{" "}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.question}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="e.g. Tavolata"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />

                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      About{" "}
                    </label>
                    <input
                      type="text"
                      name="about"
                      value={formData.question}
                      onChange={(event) => setAbout(event.target.value)}
                      placeholder="About Restaurant"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />

                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      What Customers Love{" "}
                    </label>
                    <input
                      type="text"
                      name="customerLove"
                      value={formData.question}
                      onChange={(event) => setCustomerLove(event.target.value)}
                      placeholder="What Customers Love"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />

                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Opportunities for improvement{" "}
                    </label>
                    <input
                      type="text"
                      name="opportunities"
                      value={formData.question}
                      onChange={(event) => setOpportunities(event.target.value)}
                      placeholder="Opportunities for imporvement"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />

                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Video strategy{" "}
                    </label>
                    <input
                      type="text"
                      name="videoParagraph"
                      value={formData.question}
                      onChange={(event) => setVideoParagraph(event.target.value)}
                      placeholder="What to focus on ?"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />

                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Upload videos{" "}
                    </label>
                    <input
                      type="text"
                      name="videos"
                      value={formData.question}
                      onChange={(event) => setVideos(event.target.value)}
                      placeholder="Add Shared link to videos "
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />

                  </div>

                  <div className="mb-6">
                    <button type="submit" className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                      Submit
                    </button>
                  </div>
                  {isSubmittedSuccessfully && (
          <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
            <MuiAlert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
              Form submitted successfully!
            </MuiAlert>
          </Snackbar>
        )}
                </form>

              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 z-[-1]">
          <svg
            width="1440"
            height="969"
            viewBox="0 0 1440 969"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_95:1005"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1440"
              height="969"
            >
              <rect width="1440" height="969" fill="#090E34" />
            </mask>
            <g mask="url(#mask0_95:1005)">
              <path
                opacity="0.1"
                d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                fill="url(#paint0_linear_95:1005)"
              />
              <path
                opacity="0.1"
                d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                fill="url(#paint1_linear_95:1005)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_95:1005"
                x1="1178.4"
                y1="151.853"
                x2="780.959"
                y2="453.581"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#cadc73" />
                <stop offset="1" stopColor="#cadc73" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_95:1005"
                x1="160.5"
                y1="220"
                x2="1099.45"
                y2="1192.04"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#cadc73" />
                <stop offset="1" stopColor="#cadc73" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default SignupPage;
