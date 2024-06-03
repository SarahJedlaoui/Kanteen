"use client";
import Link from "next/link";
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import MuiAlert from '@mui/material/Alert';
import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


interface RestaurantInfo {
  name: string;
  about: string;
  customerLove: string;
  opportunities: string;
  videoParagraph: string;
  videos: string;
}

const defaultRestaurantInfo: RestaurantInfo = {
  name: '',
  about: '',
  customerLove: '',
  opportunities: '',
  videoParagraph: '',
  videos: ''
};


const AddRestaurant = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [restaurantInfo, setRestaurantInfo] = useState<RestaurantInfo | null>(null);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [customerLove, setCustomerLove] = useState('');
  const [opportunities, setOpportunities] = useState('');
  const [videoParagraph, setVideoParagraph] = useState('');
  const [videos, setVideos] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);


  useEffect(() => {
    if (session?.user?.email) {
      axios.get(`/api/restaurants/${session?.user?.email}`)
        .then(response => {
          setRestaurantInfo(response.data);
        })
        .catch(error => {
          console.error('Error fetching restaurant info:', error);
        });
    }
  }, [status, session]);


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      email: session?.user?.email,
      name,
      about,
      customerLove,
      opportunities,
      videoParagraph,
     

    };

    try {
      const response = await axios.post('/api/restaurants/add', data);
      if (response.status === 201) {
        setIsSubmittedSuccessfully(true);
        setOpenSnackbar(true);

      } else {
        console.error('Failed to add restaurant information:', response);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmittedSuccessfully(false);
    }
  };

  const handleCloseSnackbar = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  
   if (!session) {
    return (
      <section className="mt-10 relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[500px] rounded bg-transparent px-6 py-10 dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                <CircularProgress color="success" />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  else  {
  return (
    <>
      <section className="relative mt-10 z-10 overflow-hidden pb-20 pt-48 md:pb-24 lg:pb-32 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three mx-auto max-w-[800px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
                <h2 className="mb-3 text-center text-3xl font-bold text-black dark:text-white sm:text-4xl">
                  Welcome, {session?.user?.name}
                </h2>
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Do you want to request a personalized page for your restaurant?
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  Please fill this form! It&apos;s totally free and super easy
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-8">
                    <label htmlFor="name" className="mb-3 block text-sm text-dark dark:text-white">
                      Restaurant Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="e.g. Tavolata"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>

                  <div className="mb-8">
                    <label htmlFor="about" className="mb-3 block text-sm text-dark dark:text-white">
                      About
                    </label>
                    <input
                      type="text"
                      name="about"
                      value={about}
                      onChange={(event) => setAbout(event.target.value)}
                      placeholder="About Restaurant"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>

                  <div className="mb-8">
                    <label htmlFor="customerLove" className="mb-3 block text-sm text-dark dark:text-white">
                      What Customers Love
                    </label>
                    <input
                      type="text"
                      name="customerLove"
                      value={customerLove}
                      onChange={(event) => setCustomerLove(event.target.value)}
                      placeholder="What Customers Love"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>

                  <div className="mb-8">
                    <label htmlFor="opportunities" className="mb-3 block text-sm text-dark dark:text-white">
                      Opportunities for Improvement
                    </label>
                    <input
                      type="text"
                      name="opportunities"
                      value={opportunities}
                      onChange={(event) => setOpportunities(event.target.value)}
                      placeholder="Opportunities for Improvement"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>

                  <div className="mb-8">
                    <label htmlFor="videoParagraph" className="mb-3 block text-sm text-dark dark:text-white">
                      Video Strategy
                    </label>
                    <input
                      type="text"
                      name="videoParagraph"
                      value={videoParagraph}
                      onChange={(event) => setVideoParagraph(event.target.value)}
                      placeholder="What to focus on?"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>

                 

                  <div className="mb-6">
                    <button type="submit" className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                      Submit
                    </button>
                  </div>
                </form>

                {isSubmittedSuccessfully && (
                  <MuiAlert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    Your request has been submitted successfully! We&apos;ll contact you ASAP! 
                  </MuiAlert>
                )}
                 <h2 className="mt-5 text-right text-xl font-bold text-black dark:text-white sm:text-xl">
              <a href="/profile">skip <ArrowForwardIcon/></a>
                </h2>
              </div>
             
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
}
export default AddRestaurant;
