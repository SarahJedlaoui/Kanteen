"use client";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import { useParams } from 'react-router-dom';
import Image from "next/image";
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useEffect, useState } from 'react';
import * as React from 'react';
import './styles.css'
import axios from 'axios';

const Persona = () => {
  const [isOpen, setOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [openAlert, setOpenAlert] = useState(false);
  const [rate1, setRate1] = React.useState<number | null>(2);
  const [rate2, setRate2] = useState(4);
  const [rate3, setRate3] = useState(4);
  const [rate4, setRate4] = useState(4);
  const [rate5, setRate5] = useState(4);
  const [rate6, setRate6] = useState(4);
  const [rate7, setRate7] = useState(4);
  const [rate8, setRate8] = useState(4);
  const [rate9, setRate9] = useState(4);
  const [rate10, setRate10] = useState(4);
  const [rate11, setRate11] = useState(4);
  const [rate12, setRate12] = useState(4);

  const handleSubmit = async () => {
    try {
      axios.post('https://api.elasticemail.com/v2/email/send', null, {
      params: {
          apikey: process.env.ELASTIC_EMAIL_API_KEY, 
          subject: "L'Mida Feedback",
          from: "sarajedlaoui999@gmail.com",
          to: "sarah.jedlaoui@bei.dev",
          bodyText: `L'Mida feedback: video rating: video1:${rate1}\n video2:${rate2}\n video3:${rate3}\n video4:${rate4}\n video5:${rate5}\n video6:${rate6}\n video7:${rate7}\n 
          video8:${rate8}\n video9:${rate9}\n 
          video10:${rate10}\n video11:${rate11}\n video12:${rate12}\n 
          Feedback: ${feedback}\n
          `,
      }
  })
      console.log('Reviw Submitted:');
      setOpenAlert(true);
    } catch (error) {
      console.error('Error while saving data:', error);
    }
  };
  return (
    <>
      <section
        id="persona"
        className="bg-[#e7edec] dark:bg-gray-dark relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-left"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 mt-10 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  L&apos;Mida San Francisco
                </h1>
                <div className="-mx-4 flex flex-wrap px-4">
                  <div className="flex-1">
                    <h3 className="mb-5 text-xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight md:text-3xl md:leading-tight">
                      About Section
                    </h3>

                    <p className="dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">

                      L&apos;Mida in San Francisco is an elegant Moroccan restaurant that offers a fine dining experience in the city. It prides itself on bringing authentic Moroccan flavors to the table, serving dishes that reflect the rich culinary traditions of Morocco. The restaurant features a cozy and inviting interior, where guests can enjoy their meals in a warm and welcoming atmosphere. The open kitchen allows diners to witness the creation of their meals, including the baking of fresh bread, which adds an element of engagement and freshness to the dining experience.

                      The menu at L&apos;Mida is a celebration of Moroccan cuisine, offering a variety of dishes that showcase the country&apos;s vibrant flavors and ingredients. Guests can start their meal with a selection of flatbreads, which are perfect for sharing and pair well with the restaurant&apos;s assortment of dips and spreads. Main courses include traditional tagines, which are slow-cooked stews made with tender meats, aromatic spices, and vegetables. The grilled whole fish, served with homemade harissa, is another highlight, offering a taste of Morocco&apos;s coastal cuisine.                    </p>
                  </div>
                </div>
                <h3 className="mb-5 text-xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight md:text-3xl md:leading-tight">
                  Video Ideas
                </h3>
                <p className="dark:text-body-color-dark mb-5 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
                  Themes, parties, happy hours
                </p>
                <div className="-mx-3 flex flex-wrap items-center justify-center mb-5" >


                  <div className="w-1/2 sm:w-1/4 px-1 py-1 flex items-center justify-center ">
                    <div
                      className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md items-center justify-center "
                      data-wow-delay=".15s">
                      <div className="mb-5 relative  items-center justify-center h-[400px]">
                        <video autoPlay muted loop controls className="absolute inset-0 w-full h-full object-cover"  >
                          <source src="https://res.cloudinary.com/dfjuxc3h3/video/upload/v1709905839/dkbvntgleownxsudtsb9.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <p className="dark:text-body-color-dark mb-2 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl Christmas themed videos with Xmas themed drinks">
                      Every bite tells a story
                      </p>

                      <Rating name="unique-rating"
                        defaultValue={rate1}
                        onChange={(event, newValue) => {
                          console.log("New Rating Value:", newValue);
                          setRate1(newValue ?? 5);
                        }}
                        onChangeActive={(event, newValue) => {
                          setRate1(newValue ?? 5);
                        }}
                        size="large"
                        sx={{
                          '& .MuiRating-iconFilled': {
                            color: 'gold',
                          }
                        }}
                      />
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <button
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = "https://res.cloudinary.com/dfjuxc3h3/video/upload/v1709905839/dkbvntgleownxsudtsb9.mp4";
                            link.download = "download.mp4"; // You can specify the default filename for the download here
                            document.body.appendChild(link); // Append to page
                            link.click(); // Programmatically click the link to trigger the download
                            document.body.removeChild(link); // Clean up and remove the link
                          }}
                          className="rounded-xl bg-primary px-8 py-4 text-base font-semibold text-black dark:text-white duration-300 ease-in-out hover:bg-primary/80"
                        >
                          Download
                        </button>

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
                          <source src="https://res.cloudinary.com/dfjuxc3h3/video/upload/v1709905830/fjgu3wwjdoxy7m3bsa7h.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                      </div>
                      <p className="dark:text-body-color-dark mb-2 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl Christmas themed videos with Xmas themed drinks">
                      Our delightful cocktails!
                      </p>
                      <Rating name="unique-rating"
                        defaultValue={rate2}
                        onChange={(event, newValue) => {
                          console.log("New Rating Value:", newValue);
                          setRate2(newValue ?? 5);
                        }}
                        onChangeActive={(event, newValue) => {
                          setRate2(newValue ?? 5);
                        }}
                        size="large"
                        sx={{
                          '& .MuiRating-iconFilled': {
                            color: 'gold',
                          }
                        }}
                      />
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <button
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = "https://res.cloudinary.com/dfjuxc3h3/video/upload/v1709905830/fjgu3wwjdoxy7m3bsa7h.mp4";
                            link.download = "download.mp4"; // You can specify the default filename for the download here
                            document.body.appendChild(link); // Append to page
                            link.click(); // Programmatically click the link to trigger the download
                            document.body.removeChild(link); // Clean up and remove the link
                          }}
                          className="rounded-xl bg-primary px-8 py-4 text-base font-semibold text-black dark:text-white duration-300 ease-in-out hover:bg-primary/80"
                        >
                          Download
                        </button>
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
                          <source src="https://res.cloudinary.com/dfjuxc3h3/video/upload/v1709905824/nfadoet9it524dwcjpaf.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                      </div>
                      <p className="dark:text-body-color-dark mb-2 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl Christmas themed videos with Xmas themed drinks">
                       L&apos;Mida Delightful Drinks!
                      </p>
                      <Rating name="unique-rating"
                        defaultValue={rate3}
                        onChange={(event, newValue) => {
                          console.log("New Rating Value:", newValue);
                          setRate3(newValue ?? 5);
                        }}
                        onChangeActive={(event, newValue) => {
                          setRate3(newValue ?? 5);
                        }}
                        size="large"
                        sx={{
                          '& .MuiRating-iconFilled': {
                            color: 'gold',
                          }
                        }}
                      />
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <button
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = "https://res.cloudinary.com/dfjuxc3h3/video/upload/v1709905824/nfadoet9it524dwcjpaf.mp4";
                            link.download = "download.mp4"; // You can specify the default filename for the download here
                            document.body.appendChild(link); // Append to page
                            link.click(); // Programmatically click the link to trigger the download
                            document.body.removeChild(link); // Clean up and remove the link
                          }}
                          className="rounded-xl bg-primary px-8 py-4 text-base font-semibold text-black dark:text-white duration-300 ease-in-out hover:bg-primary/80"
                        >
                          Download
                        </button>
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
                          <source src="https://res.cloudinary.com/dfjuxc3h3/video/upload/v1709905806/yq8blzyxr97cse8nzohl.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                      </div>
                      <p className="dark:text-body-color-dark mb-2 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl Christmas themed videos with Xmas themed drinks">
                        L&apos;Mida positive reviews
                      </p>
                      <Rating name="unique-rating"
                        defaultValue={rate4}
                        onChange={(event, newValue) => {
                          console.log("New Rating Value:", newValue);
                          setRate4(newValue ?? 5);
                        }}
                        onChangeActive={(event, newValue) => {
                          setRate4(newValue ?? 5);
                        }}
                        size="large"
                        sx={{
                          '& .MuiRating-iconFilled': {
                            color: 'gold',
                          }
                        }}
                      />
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                      <button
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = "https://res.cloudinary.com/dfjuxc3h3/video/upload/v1709905806/yq8blzyxr97cse8nzohl.mp4";
                            link.download = "download.mp4"; // You can specify the default filename for the download here
                            document.body.appendChild(link); // Append to page
                            link.click(); // Programmatically click the link to trigger the download
                            document.body.removeChild(link); // Clean up and remove the link
                          }}
                          className="rounded-xl bg-primary px-8 py-4 text-base font-semibold text-black dark:text-white duration-300 ease-in-out hover:bg-primary/80"
                        >
                          Download
                        </button>
                      </div>

                    </div>
                  </div>

                </div>
                <div className="-mx-3 flex flex-wrap items-center justify-center mb-8" >


                  <div className="w-1/2 sm:w-1/4 px-1 py-1 flex items-center justify-center ">
                    <div
                      className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md items-center justify-center "
                      data-wow-delay=".15s">
                      <div className="mb-5 relative  items-center justify-center h-[400px]">
                        <video autoPlay muted loop controls className="absolute inset-0 w-full h-full object-cover"  >
                          <source src="https://res.cloudinary.com/dfjuxc3h3/video/upload/v1709905778/j7e8hq1fwg6684wldkpm.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <p className="dark:text-body-color-dark mb-2 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl Christmas themed videos with Xmas themed drinks">
                      Dive into the Moroccan mediterranean vibes
                      </p>

                      <Rating name="unique-rating"
                        defaultValue={rate5}
                        onChange={(event, newValue) => {
                          console.log("New Rating Value:", newValue);
                          setRate5(newValue ?? 5);
                        }}
                        onChangeActive={(event, newValue) => {
                          setRate5(newValue ?? 5);
                        }}
                        size="large"
                        sx={{
                          '& .MuiRating-iconFilled': {
                            color: 'gold',
                          }
                        }}
                      />
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                      <button
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = "https://res.cloudinary.com/dfjuxc3h3/video/upload/v1709905778/j7e8hq1fwg6684wldkpm.mp4";
                            link.download = "download.mp4"; // You can specify the default filename for the download here
                            document.body.appendChild(link); // Append to page
                            link.click(); // Programmatically click the link to trigger the download
                            document.body.removeChild(link); // Clean up and remove the link
                          }}
                          className="rounded-xl bg-primary px-8 py-4 text-base font-semibold text-black dark:text-white duration-300 ease-in-out hover:bg-primary/80"
                        >
                          Download
                        </button>
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
                          <source src="https://res.cloudinary.com/dfjuxc3h3/video/upload/v1709905763/uy2ly3gvxt0agtbbfshi.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                      </div>
                      <p className="dark:text-body-color-dark mb-2 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl Christmas themed videos with Xmas themed drinks">
                      Dive into the Moroccan mediterranean vibes
                      </p>
                      <Rating name="unique-rating"
                        defaultValue={rate6}
                        onChange={(event, newValue) => {
                          console.log("New Rating Value:", newValue);
                          setRate6(newValue ?? 5);
                        }}
                        onChangeActive={(event, newValue) => {
                          setRate6(newValue ?? 5);
                        }}
                        size="large"
                        sx={{
                          '& .MuiRating-iconFilled': {
                            color: 'gold',
                          }
                        }}
                      />
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                      <button
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = "https://res.cloudinary.com/dfjuxc3h3/video/upload/v1709905763/uy2ly3gvxt0agtbbfshi.mp4";
                            link.download = "download.mp4"; // You can specify the default filename for the download here
                            document.body.appendChild(link); // Append to page
                            link.click(); // Programmatically click the link to trigger the download
                            document.body.removeChild(link); // Clean up and remove the link
                          }}
                          className="rounded-xl bg-primary px-8 py-4 text-base font-semibold text-black dark:text-white duration-300 ease-in-out hover:bg-primary/80"
                        >
                          Download
                        </button>
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
                          <source src="https://res.cloudinary.com/dfjuxc3h3/video/upload/v1709905745/sfm6sij48benjolovqga.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                      </div>
                      <p className="dark:text-body-color-dark mb-2 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl Christmas themed videos with Xmas themed drinks">
                      Embark on a Journey of Flavor with Our New Menu


                      </p>
                      <Rating name="unique-rating"
                        defaultValue={rate7}
                        onChange={(event, newValue) => {
                          console.log("New Rating Value:", newValue);
                          setRate7(newValue ?? 5);
                        }}
                        onChangeActive={(event, newValue) => {
                          setRate7(newValue ?? 5);
                        }}
                        size="large"
                        sx={{
                          '& .MuiRating-iconFilled': {
                            color: 'gold',
                          }
                        }}
                      />
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                      <button
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = "https://res.cloudinary.com/dfjuxc3h3/video/upload/v1709905745/sfm6sij48benjolovqga.mp4";
                            link.download = "download.mp4"; // You can specify the default filename for the download here
                            document.body.appendChild(link); // Append to page
                            link.click(); // Programmatically click the link to trigger the download
                            document.body.removeChild(link); // Clean up and remove the link
                          }}
                          className="rounded-xl bg-primary px-8 py-4 text-base font-semibold text-black dark:text-white duration-300 ease-in-out hover:bg-primary/80"
                        >
                          Download
                        </button>
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
                          <source src="https://res.cloudinary.com/dfjuxc3h3/video/upload/v1709905733/zq43rj9cl57dztfk79he.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                      </div>
                      <p className="dark:text-body-color-dark mb-2 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl Christmas themed videos with Xmas themed drinks">
                      Transform your events into unforgettable experiences
                      </p>
                      <Rating name="unique-rating"
                        defaultValue={rate8}
                        onChange={(event, newValue) => {
                          console.log("New Rating Value:", newValue);
                          setRate8(newValue ?? 5);
                        }}
                        onChangeActive={(event, newValue) => {
                          setRate8(newValue ?? 5);
                        }}
                        size="large"
                        sx={{
                          '& .MuiRating-iconFilled': {
                            color: 'gold',
                          }
                        }}
                      />
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                      <button
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = "https://res.cloudinary.com/dfjuxc3h3/video/upload/v1709905733/zq43rj9cl57dztfk79he.mp4";
                            link.download = "download.mp4"; // You can specify the default filename for the download here
                            document.body.appendChild(link); // Append to page
                            link.click(); // Programmatically click the link to trigger the download
                            document.body.removeChild(link); // Clean up and remove the link
                          }}
                          className="rounded-xl bg-primary px-8 py-4 text-base font-semibold text-black dark:text-white duration-300 ease-in-out hover:bg-primary/80"
                        >
                          Download
                        </button>
                      </div>

                    </div>
                  </div>

                </div>
                <div className="-mx-3 flex flex-wrap items-center justify-center mb-8" >


                  <div className="w-1/2 sm:w-1/4 px-1 py-1 flex items-center justify-center ">
                    <div
                      className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md items-center justify-center "
                      data-wow-delay=".15s">
                      <div className="mb-5 relative  items-center justify-center h-[400px]">
                        <video autoPlay muted loop controls className="absolute inset-0 w-full h-full object-cover"  >
                          <source src="https://res.cloudinary.com/dfjuxc3h3/video/upload/v1709905692/cvqqcmkd4avd4ubvtt61.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <p className="dark:text-body-color-dark mb-2 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl Christmas themed videos with Xmas themed drinks">
                      Every dish creates an atmosphere of culinary delight
                      </p>

                      <Rating name="unique-rating"
                        defaultValue={rate9}
                        onChange={(event, newValue) => {
                          console.log("New Rating Value:", newValue);
                          setRate9(newValue ?? 5);
                        }}
                        onChangeActive={(event, newValue) => {
                          setRate9(newValue ?? 5);
                        }}
                        size="large"
                        sx={{
                          '& .MuiRating-iconFilled': {
                            color: 'gold',
                          }
                        }}
                      />
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                      <button
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = "https://res.cloudinary.com/dfjuxc3h3/video/upload/v1709905692/cvqqcmkd4avd4ubvtt61.mp4";
                            link.download = "download.mp4"; // You can specify the default filename for the download here
                            document.body.appendChild(link); // Append to page
                            link.click(); // Programmatically click the link to trigger the download
                            document.body.removeChild(link); // Clean up and remove the link
                          }}
                          className="rounded-xl bg-primary px-8 py-4 text-base font-semibold text-black dark:text-white duration-300 ease-in-out hover:bg-primary/80"
                        >
                          Download
                        </button>
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
                          <source src="https://res.cloudinary.com/dfjuxc3h3/video/upload/v1709905691/mcce2jzmlwpledaj2ag4.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                      </div>
                      <p className="dark:text-body-color-dark mb-2 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl Christmas themed videos with Xmas themed drinks">
                      Embark on a Journey of Flavor with Our New Menu
                      </p>
                      <Rating name="unique-rating"
                        defaultValue={rate10}
                        onChange={(event, newValue) => {
                          console.log("New Rating Value:", newValue);
                          setRate10(newValue ?? 5);
                        }}
                        onChangeActive={(event, newValue) => {
                          setRate10(newValue ?? 5);
                        }}
                        size="large"
                        sx={{
                          '& .MuiRating-iconFilled': {
                            color: 'gold',
                          }
                        }}
                      />
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                      <button
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = "https://res.cloudinary.com/dfjuxc3h3/video/upload/v1709905691/mcce2jzmlwpledaj2ag4.mp4";
                            link.download = "download.mp4"; // You can specify the default filename for the download here
                            document.body.appendChild(link); // Append to page
                            link.click(); // Programmatically click the link to trigger the download
                            document.body.removeChild(link); // Clean up and remove the link
                          }}
                          className="rounded-xl bg-primary px-8 py-4 text-base font-semibold text-black dark:text-white duration-300 ease-in-out hover:bg-primary/80"
                        >
                          Download
                        </button>
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
                          <source src="https://res.cloudinary.com/dfjuxc3h3/video/upload/v1709905663/tgspyma63f5qd1an8v5q.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                      </div>
                      <p className="dark:text-body-color-dark mb-2 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl Christmas themed videos with Xmas themed drinks">
                      Embark on a Journey of Flavor with Our New Menu
                      </p>
                      <Rating name="unique-rating"
                        defaultValue={rate11}
                        onChange={(event, newValue) => {
                          console.log("New Rating Value:", newValue);
                          setRate11(newValue ?? 5);
                        }}
                        onChangeActive={(event, newValue) => {
                          setRate11(newValue ?? 5);
                        }}
                        size="large"
                        sx={{
                          '& .MuiRating-iconFilled': {
                            color: 'gold',
                          }
                        }}
                      />
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                      <button
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = "https://res.cloudinary.com/dfjuxc3h3/video/upload/v1709905663/tgspyma63f5qd1an8v5q.mp4";
                            link.download = "download.mp4"; // You can specify the default filename for the download here
                            document.body.appendChild(link); // Append to page
                            link.click(); // Programmatically click the link to trigger the download
                            document.body.removeChild(link); // Clean up and remove the link
                          }}
                          className="rounded-xl bg-primary px-8 py-4 text-base font-semibold text-black dark:text-white duration-300 ease-in-out hover:bg-primary/80"
                        >
                          Download
                        </button>
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
                          <source src="https://res.cloudinary.com/dfjuxc3h3/video/upload/v1709905733/zq43rj9cl57dztfk79he.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                      </div>
                      <p className="dark:text-body-color-dark mb-2 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl Christmas themed videos with Xmas themed drinks">
                      Transform your events into unforgettable experiences
                      </p>
                      <Rating name="unique-rating"
                        defaultValue={rate12}
                        onChange={(event, newValue) => {
                          console.log("New Rating Value:", newValue);
                          setRate12(newValue ?? 5);
                        }}
                        onChangeActive={(event, newValue) => {
                          setRate12(newValue ?? 5);
                        }}
                        size="large"
                        sx={{
                          '& .MuiRating-iconFilled': {
                            color: 'gold',
                          }
                        }}
                      />
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                      <button
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = "https://res.cloudinary.com/dfjuxc3h3/video/upload/v1709905733/zq43rj9cl57dztfk79he.mp4";
                            link.download = "download.mp4"; // You can specify the default filename for the download here
                            document.body.appendChild(link); // Append to page
                            link.click(); // Programmatically click the link to trigger the download
                            document.body.removeChild(link); // Clean up and remove the link
                          }}
                          className="rounded-xl bg-primary px-8 py-4 text-base font-semibold text-black dark:text-white duration-300 ease-in-out hover:bg-primary/80"
                        >
                          Download
                        </button>
                      </div>

                    </div>
                  </div>

                </div>



                <h3 className="mb-5 text-xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight md:text-3xl md:leading-tight">
                  Feedback
                </h3>
                <p className="dark:text-body-color-dark mb-5 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
                  Your feedback will be genuinely appreciated.
                </p>
                <TextField onChange={(e) => setFeedback(e.target.value)} id="standard-basic" label="" variant="standard" fullWidth maxRows={4} multiline />
              </div>

              <div className="flex flex-col pt-10 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <button
                  onClick={handleSubmit}
                  className="rounded-md bg-primary px-8 py-4 text-base font-semibold text-black dark:text-white duration-300 ease-in-out hover:bg-primary/80"
                >
                  Submit Review
                </button>
              </div>
              <Snackbar open={openAlert} autoHideDuration={6000} onClose={() => setOpenAlert(false)}>
            <Alert onClose={() => setOpenAlert(false)} severity="success" sx={{ width: '90%' }}>
              Review submitted
            </Alert>
          </Snackbar>
            </div>
          </div>
        </div>


      </section >
    </>
  );
};

export default Persona;
