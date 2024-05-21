"use client";


import React, { useState } from 'react';
import { useTheme } from "next-themes";
import TextField from '@mui/material/TextField';
import { Alert } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import axios from 'axios';

const UpdateLink = () => {
  const [email, setEmail] = useState('');
  const [newLink, setNewLink] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);


  const handleUpdateLink = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.put('/api/user/updateLink', { email, newLink });
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000); // Dismiss alert after 3 seconds
    } catch (error) {
      setMessage(error.response?.data.message || 'An error occurred');
    }
  };

  return (
    <>
      <section className="pb-[120px] pt-[150px] mt-10">
        <div className="container">
          <div className="flex items-center justify-center">
            <div className="-mx-4 flex flex-wrap mx-auto ">

              <div
                className="wow fadeInUp shadow-three dark:bg-gray-dark relative z-10 rounded-sm bg-white p-8 sm:p-11 lg:p-8 xl:p-11"
                data-wow-delay=".2s"  >
                <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
                  Update Restaurant Link
                </h3>
                <div>

                  <input type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your the client email"
                    className="border-stroke dark:text-body-color-dark dark:shadow-two mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                  />
                  <input type="text"
                    value={newLink}
                    onChange={(e) => setNewLink(e.target.value)}
                    required
                    placeholder="Enter the new link"
                    className="border-stroke dark:text-body-color-dark dark:shadow-two mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                  />


                  <input
                    onClick={handleUpdateLink}
                    type="submit"
                    value="Update"
                    className="shadow-submit dark:shadow-submit-dark mb-5 flex w-full cursor-pointer items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-black dark:text-white duration-300 hover:bg-primary/90"
                  />
                  {showAlert && (
                    <Alert severity="success" sx={{ marginBottom: 2 }}>
                      Link successfully updated!
                    </Alert>
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

export default UpdateLink;
