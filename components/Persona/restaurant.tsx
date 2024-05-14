"use client";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import * as React from "react";
import "@/components/Persona/styles.css"
import axios from "axios";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

interface Video {
  url: string;
  rating: number;
}
interface Feedback {
  customerName: string;
  feedback: string;
  date: Date;
}
interface Persona {
  _id: string;
  name: string;
  status: string;
  about: string;
  videoParagraph: string;
  videosWalid: Video[];
  videosAmal: Video[];
  rate: number;
  feedbacks: Feedback[];
}
const Restaurant = () => {







  const [persona, setPersona] = useState<Persona | null>(null);
  const [isOpen, setOpen] = useState(false);
  const { id } = useParams<{ id: string }>();
  const [feedback, setFeedback] = useState('');
  const [openAlert, setOpenAlert] = useState(false);
  const [rate1, setRate1] = React.useState<number | null>(3);
  const [rate2, setRate2] = React.useState<number | null>(3);
  const [rate3, setRate3] = React.useState<number | null>(3);
  const [rate4, setRate4] = React.useState<number | null>(3);
  const [rate5, setRate5] = React.useState<number | null>(3);
  const [rate6, setRate6] = React.useState<number | null>(3);
  const [rate7, setRate7] = React.useState<number | null>(3);
  const [rate8, setRate8] = React.useState<number | null>(3);
  const [rate9, setRate9] = React.useState<number | null>(3);
  const [rate10, setRate10] = React.useState<number | null>(3);
  const [rate11, setRate11] = React.useState<number | null>(3);
  const [rate12, setRate12] = React.useState<number | null>(3);
  const [lastClicked1, setLastClicked1] = useState('');
  const [lastClicked2, setLastClicked2] = useState('');
  const [lastClicked3, setLastClicked3] = useState('');
  const [lastClicked4, setLastClicked4] = useState('');
  const [lastClicked5, setLastClicked5] = useState('');
  const [lastClicked6, setLastClicked6] = useState('');
  const [lastClicked7, setLastClicked7] = useState('');
  const [lastClicked8, setLastClicked8] = useState('');
  const [lastClicked9, setLastClicked9] = useState('');
  const [lastClicked10, setLastClicked10] = useState('');
  const [lastClicked11, setLastClicked11] = useState('');
  const [lastClicked12, setLastClicked12] = useState('');
  const [feedback1, setFeedback1] = useState('');
  const [feedback2, setFeedback2] = useState('');
  const [feedback3, setFeedback3] = useState('');
  const [feedback4, setFeedback4] = useState('');
  const [feedback5, setFeedback5] = useState('');
  const [feedback6, setFeedback6] = useState('');
  const [feedback7, setFeedback7] = useState('');
  const [feedback8, setFeedback8] = useState('');
  const [feedback9, setFeedback9] = useState('');
  const [feedback10, setFeedback10] = useState('');
  const [feedback11, setFeedback11] = useState('');
  const [feedback12, setFeedback12] = useState('');




  const videoData = [
    {
      src: "https://d205gdf6tf9tly.cloudfront.net/24.mp4",
      title: "Presentation of L'Mida",
      ratingState: [rate1, setRate1],
      feedbackState: [feedback1, setFeedback1],
      lastClickedState: [lastClicked1, setLastClicked1]
    },
    {
      src: "https://d205gdf6tf9tly.cloudfront.net/21.mp4",
      title: "L'Mida cocktails 0.1",
      ratingState: [rate2, setRate2],
      feedbackState: [feedback2, setFeedback2],
      lastClickedState: [lastClicked2, setLastClicked2]
    }
  ];

  const handleButtonClick1 = (action: any) => {
    setLastClicked1(action);
  };
  const handleButtonClick2 = (action: any) => {
    setLastClicked2(action);
  };
  const handleButtonClick3 = (action: any) => {
    setLastClicked3(action);
  };
  const handleButtonClick4 = (action: any) => {
    setLastClicked4(action);
  };
  const handleButtonClick5 = (action: any) => {
    setLastClicked5(action);
  };
  const handleButtonClick6 = (action: any) => {
    setLastClicked6(action);
  };
  const handleButtonClick7 = (action: any) => {
    setLastClicked7(action);
  };
  const handleButtonClick8 = (action: any) => {
    setLastClicked8(action);
  };
  const handleButtonClick9 = (action: any) => {
    setLastClicked9(action);
  };
  const handleButtonClick10 = (action: any) => {
    setLastClicked10(action);
  };
  const handleButtonClick11 = (action: any) => {
    setLastClicked11(action);
  };
  const handleButtonClick12 = (action: any) => {
    setLastClicked12(action);
  };


  const handleSubmit = async () => {
    try {
      axios.post('https://api.elasticemail.com/v2/email/send', null, {
        params: {
          apikey: '0946D26959F1CF59C2908E27F6AACF5A69FE5F455050A26ED257A9190B4E7976BAC71E82D69850995B1977C5070E579F',
          subject: "L'Mida Feedback",
          from: "sarajedlaoui99@gmail.com",
          to: "pukajedla@gmail.com",
          bodyText: `L Mida feedback:\n video rating:\n 
          video1: rate :${rate1} , decision: ${lastClicked1}, feedback:  ${feedback1}
          \n video2:rate ${rate2}, decision: ${lastClicked2}, feedback:  ${feedback2}
          \n video3:rate ${rate3}, decision: ${lastClicked3}, feedback:  ${feedback3}
          \n video4:rate ${rate4}, decision: ${lastClicked4}, feedback:  ${feedback4}
          \n video5:rate ${rate5}, decision: ${lastClicked5}, feedback:  ${feedback5}
          \n video6:rate ${rate6}, decision: ${lastClicked6}, feedback:  ${feedback6}
          \n video7:rate ${rate7}, decision: ${lastClicked7}, feedback:  ${feedback7}
          \nvideo8:rate ${rate8}, decision: ${lastClicked8}, feedback:  ${feedback8}
          \n video9:rate ${rate9}, decision: ${lastClicked9}, feedback:  ${feedback9}
          \n video10:rate ${rate10}, decision: ${lastClicked10}, feedback:  ${feedback10}
          \n video11:rate ${rate11}, decision: ${lastClicked11}, feedback:  ${feedback11}
          \n video12:rate ${rate12} , decision: ${lastClicked12}, feedback:  ${feedback12} \n 
          Feedback: ${feedback}\n
          `,
        }
      })
      console.log('Reviw Submitted:', rate1, rate3, feedback);
      setOpenAlert(true);
    } catch (error) {
      console.error('Error while saving data:', error);
    }
  };

  return (
    <>
      <section
        id="Restaurant"
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
                     Social Media Strategy 
                    </h3>

                    <p className="dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
                      {'We are dedicated to maintaining a consistent social media posting schedule, with four posts per week, as detailed below:\n\nTuesday: 12 am, 1 am, or 6 am\nThursday: 6 am or 4 pm\nFriday: 2 am, 11 am, or 1 pm\n\nOur advertising strategy involves selecting one video for a 7-day campaign, with the goal of achieving 50 conversions before the video gains viral momentum. Each post will include a captivating caption and relevant hashtags.\n\nOn TikTok, our posting frequency will align with other platforms, with varied timings for optimal engagement:\n\nMonday: 12 PM or 4 PM\nTuesday: 4 AM, 8 AM, 10 AM, or 3 PM\nThursday: 5 AM, 3 PM, or 6 PM\nSunday: 1 AM, 2 AM, 1 PM, 2 PM, or 10 PM. '.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>

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
                          <source src="https://d205gdf6tf9tly.cloudfront.net/24.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <p className="dark:text-body-color-dark mb-2 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl Christmas themed videos with Xmas themed drinks">
                        1- Presentation of L&apos;Mida
                      </p>

                      <Rating name="size-large"
                        defaultValue={rate1}
                        onChange={(event, newValue) => {
                          console.log("New Rating Value:", newValue);
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
                        <ButtonGroup variant="outlined" color="success" size="small" aria-label="Small button group">
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick1('post')}
                          >
                            Post
                          </Button>
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick1('edit')}
                          >
                            Edit
                          </Button>
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick1('discard')}
                          >
                            Discard
                          </Button>
                        </ButtonGroup>
                        {/* Optionally, display the last clicked action */}

                      </div>
                      {lastClicked1 && <p style={{ color: 'red' }}>{lastClicked1}</p>}
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <TextField onChange={(e) => setFeedback1(e.target.value)} id="standard-basic" label="feedback" variant="standard" fullWidth maxRows={4} multiline />
                      </div>

                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <button
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = "https://d205gdf6tf9tly.cloudfront.net/24.mp4";
                            link.download = "download.mp4"; // You can specify the default filename for the download here
                            document.body.appendChild(link); // Append to page
                            link.click(); // Programmatically click the link to trigger the download
                            document.body.removeChild(link); // Clean up and remove the link
                          }}
                          className="rounded-xl bg-primary px-8 py-4 text-base font-semibold text-black dark:text-white duration-300 ease-in-out hover:bg-primary/80"
                        >
                          
                          <a href="https://d205gdf6tf9tly.cloudfront.net/24.mp4" download>Download</a>

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
                          <source src="https://d205gdf6tf9tly.cloudfront.net/lmida/video2.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                      </div>
                      <p className="dark:text-body-color-dark mb-2 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl Christmas themed videos with Xmas themed drinks">
                        2- L&apos;Mida cocktails 0.1!
                      </p>
                    

                      <Rating name="unique-rating"
                        defaultValue={rate2}
                        onChange={(event, newValue) => {
                          console.log("New Rating Value:", newValue);
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
                        <ButtonGroup variant="outlined" color="success" size="small" aria-label="Small button group">
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick2('post')}
                          >
                            Post
                          </Button>
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick2('edit')}
                          >
                            Edit
                          </Button>
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick2('discard')}
                          >
                            Discard
                          </Button>
                        </ButtonGroup>
                        {/* Optionally, display the last clicked action */}

                      </div>
                      {lastClicked2 && <p style={{ color: 'red' }}>{lastClicked2}</p>}
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <TextField onChange={(e) => setFeedback2(e.target.value)} id="standard-basic" label="feedback" variant="standard" fullWidth maxRows={4} multiline />
                      </div>
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <button
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = "https://d205gdf6tf9tly.cloudfront.net/21.mp4";
                            link.download = "download.mp4"; // You can specify the default filename for the download here
                            document.body.appendChild(link); // Append to page
                            link.click(); // Programmatically click the link to trigger the download
                            document.body.removeChild(link); // Clean up and remove the link
                          }}
                          className="rounded-xl bg-primary px-8 py-4 text-base font-semibold text-black dark:text-white duration-300 ease-in-out hover:bg-primary/80"
                        >
                       <a href="https://d205gdf6tf9tly.cloudfront.net/21.mp4" download>Download</a>
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
                          <source src="https://d205gdf6tf9tly.cloudfront.net/lmida/video3.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                      </div>
                      <p className="dark:text-body-color-dark mb-2 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl Christmas themed videos with Xmas themed drinks">
                        3- L&apos;Mida cocktails 0.2!
                      </p>
                      <Rating name="unique-rating"
                        defaultValue={rate3}
                        onChange={(event, newValue) => {
                          console.log("New Rating Value:", newValue);
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
                        <ButtonGroup variant="outlined" color="success" size="small" aria-label="Small button group">
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick3('post')}
                          >
                            Post
                          </Button>
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick3('edit')}
                          >
                            Edit
                          </Button>
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick3('discard')}
                          >
                            Discard
                          </Button>
                        </ButtonGroup>
                        {/* Optionally, display the last clicked action */}

                      </div>
                      {lastClicked3 && <p style={{ color: 'red' }}>{lastClicked3}</p>}
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <TextField onChange={(e) => setFeedback3(e.target.value)} id="standard-basic" label="feedback" variant="standard" fullWidth maxRows={4} multiline />
                      </div>
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <button
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = "https://d205gdf6tf9tly.cloudfront.net/7.mp4";
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
                          <source src="https://d205gdf6tf9tly.cloudfront.net/15.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                      </div>
                      <p className="dark:text-body-color-dark mb-2 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl Christmas themed videos with Xmas themed drinks">
                        4- L&apos;Mida positive reviews
                      </p>
                      <Rating name="unique-rating"
                        defaultValue={rate4}
                        onChange={(event, newValue) => {
                          console.log("New Rating Value:", newValue);
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
                        <ButtonGroup variant="outlined" color="success" size="small" aria-label="Small button group">
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick4('post')}
                          >
                            Post
                          </Button>
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick4('edit')}
                          >
                            Edit
                          </Button>
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick4('discard')}
                          >
                            Discard
                          </Button>
                        </ButtonGroup>
                        {/* Optionally, display the last clicked action */}

                      </div>
                      {lastClicked4 && <p style={{ color: 'red' }}>{lastClicked4}</p>}
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <TextField onChange={(e) => setFeedback4(e.target.value)} id="standard-basic" label="feedback" variant="standard" fullWidth maxRows={4} multiline />
                      </div>
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <button
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = "https://d205gdf6tf9tly.cloudfront.net/15.mp4";
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
                          <source src="https://d205gdf6tf9tly.cloudfront.net/lmida/video5.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <p className="dark:text-body-color-dark mb-2 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl Christmas themed videos with Xmas themed drinks">
                        5- Dive into the Moroccan mediterranean vibes!
                      </p>

                      <Rating name="unique-rating"
                        defaultValue={rate5}
                        onChange={(event, newValue) => {
                          console.log("New Rating Value:", newValue);
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
                        <ButtonGroup variant="outlined" color="success" size="small" aria-label="Small button group">
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick5('post')}
                          >
                            Post
                          </Button>
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick5('edit')}
                          >
                            Edit
                          </Button>
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick5('discard')}
                          >
                            Discard
                          </Button>
                        </ButtonGroup>
                        {/* Optionally, display the last clicked action */}

                      </div>
                      {lastClicked5 && <p style={{ color: 'red' }}> {lastClicked5}</p>}
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <TextField onChange={(e) => setFeedback5(e.target.value)} id="standard-basic" label="feedback" variant="standard" fullWidth maxRows={4} multiline />
                      </div>
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <button
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = "https://d205gdf6tf9tly.cloudfront.net/6.mp4";
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
                          <source src="https://d205gdf6tf9tly.cloudfront.net/lmida/video6.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                      </div>
                      <p className="dark:text-body-color-dark mb-2 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl Christmas themed videos with Xmas themed drinks">
                        6- Dive into the Moroccan mediterranean vibes!
                      </p>
                      <Rating name="unique-rating"
                        defaultValue={rate6}
                        onChange={(event, newValue) => {
                          console.log("New Rating Value:", newValue);
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
                        <ButtonGroup variant="outlined" color="success" size="small" aria-label="Small button group">
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick6('post')}
                          >
                            Post
                          </Button>
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick6('edit')}
                          >
                            Edit
                          </Button>
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick6('discard')}
                          >
                            Discard
                          </Button>
                        </ButtonGroup>
                        {/* Optionally, display the last clicked action */}

                      </div>
                      {lastClicked6 && <p style={{ color: 'red' }}>{lastClicked6}</p>}
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <TextField onChange={(e) => setFeedback6(e.target.value)} id="standard-basic" label="feedback" variant="standard" fullWidth maxRows={4} multiline />
                      </div>
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <button
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = "https://d205gdf6tf9tly.cloudfront.net/22.mp4";
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
                          <source src="https://d205gdf6tf9tly.cloudfront.net/lmida/video7.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                      </div>
                      <p className="dark:text-body-color-dark mb-2 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl Christmas themed videos with Xmas themed drinks">
                        7- Embark on a Journey of Flavor with Our New Menu!.


                      </p>
                      <Rating name="unique-rating"
                        defaultValue={rate7}
                        onChange={(event, newValue) => {
                          console.log("New Rating Value:", newValue);
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
                        <ButtonGroup variant="outlined" color="success" size="small" aria-label="Small button group">
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick7('post')}
                          >
                            Post
                          </Button>
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick7('edit')}
                          >
                            Edit
                          </Button>
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick7('discard')}
                          >
                            Discard
                          </Button>
                        </ButtonGroup>
                        {/* Optionally, display the last clicked action */}

                      </div>
                      {lastClicked7 && <p style={{ color: 'red' }}>{lastClicked7}</p>}
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <TextField onChange={(e) => setFeedback7(e.target.value)} id="standard-basic" label="feedback" variant="standard" fullWidth maxRows={4} multiline />
                      </div>
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <button
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = "https://d205gdf6tf9tly.cloudfront.net/20.mp4";
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
                          <source src="https://d205gdf6tf9tly.cloudfront.net/4.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                      </div>
                      <p className="dark:text-body-color-dark mb-2 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl Christmas themed videos with Xmas themed drinks">
                        8- Transform your events into unforgettable experiences
                      </p>
                      <Rating name="unique-rating"
                        defaultValue={rate8}
                        onChange={(event, newValue) => {
                          console.log("New Rating Value:", newValue);
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
                        <ButtonGroup variant="outlined" color="success" size="small" aria-label="Small button group">
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick8('post')}
                          >
                            Post
                          </Button>
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick8('edit')}
                          >
                            Edit
                          </Button>
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick8('discard')}
                          >
                            Discard
                          </Button>
                        </ButtonGroup>
                        {/* Optionally, display the last clicked action */}

                      </div>
                      {lastClicked8 && <p style={{ color: 'red' }}>{lastClicked8}</p>}
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <TextField onChange={(e) => setFeedback8(e.target.value)} id="standard-basic" label="feedback" variant="standard" fullWidth maxRows={4} multiline />
                      </div>
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <button
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = "https://d205gdf6tf9tly.cloudfront.net/4.mp4";
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
                          <source src="https://d205gdf6tf9tly.cloudfront.net/lmida/video9.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <p className="dark:text-body-color-dark mb-2 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl Christmas themed videos with Xmas themed drinks">
                        9- Every dish creates an atmosphere of culinary delight
                      </p>

                      <Rating name="unique-rating"
                        defaultValue={rate9}
                        onChange={(event, newValue) => {
                          console.log("New Rating Value:", newValue);
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
                        <ButtonGroup variant="outlined" color="success" size="small" aria-label="Small button group">
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick9('post')}
                          >
                            Post
                          </Button>
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick9('edit')}
                          >
                            Edit
                          </Button>
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick9('discard')}
                          >
                            Discard
                          </Button>
                        </ButtonGroup>
                        {/* Optionally, display the last clicked action */}

                      </div>
                      {lastClicked9 && <p style={{ color: 'red' }}>{lastClicked9}</p>}
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <TextField onChange={(e) => setFeedback9(e.target.value)} id="standard-basic" label="feedback" variant="standard" fullWidth maxRows={4} multiline />
                      </div>
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <button
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = "https://d205gdf6tf9tly.cloudfront.net/19.mp4";
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
                          <source src="https://d205gdf6tf9tly.cloudfront.net/lmida/video10.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                      </div>
                      <p className="dark:text-body-color-dark mb-2 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl Christmas themed videos with Xmas themed drinks">
                        10- Dive into the Moroccan mediterranean vibes!
                      </p>
                      <Rating name="unique-rating"
                        defaultValue={rate10}
                        onChange={(event, newValue) => {
                          console.log("New Rating Value:", newValue);
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
                        <ButtonGroup variant="outlined" color="success" size="small" aria-label="Small button group">
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick10('post')}
                          >
                            Post
                          </Button>
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick10('edit')}
                          >
                            Edit
                          </Button>
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick10('discard')}
                          >
                            Discard
                          </Button>
                        </ButtonGroup>
                        {/* Optionally, display the last clicked action */}

                      </div>
                      {lastClicked10 && <p style={{ color: 'red' }}>{lastClicked10}</p>}
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <TextField onChange={(e) => setFeedback10(e.target.value)} id="standard-basic" label="feedback" variant="standard" fullWidth maxRows={4} multiline />
                      </div>
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <button
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = "https://d205gdf6tf9tly.cloudfront.net/10.mp4";
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
                          <source src="https://d205gdf6tf9tly.cloudfront.net/lmida/video11.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                      </div>
                      <p className="dark:text-body-color-dark mb-2 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl Christmas themed videos with Xmas themed drinks">
                        11- Embark on a Journey of Flavor with Our New Menu!.
                      </p>
                      <Rating name="unique-rating"
                        defaultValue={rate11}
                        onChange={(event, newValue) => {
                          console.log("New Rating Value:", newValue);
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
                        <ButtonGroup variant="outlined" color="success" size="small" aria-label="Small button group">
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick11('post')}
                          >
                            Post
                          </Button>
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick11('edit')}
                          >
                            Edit
                          </Button>
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick11('discard')}
                          >
                            Discard
                          </Button>
                        </ButtonGroup>
                        {/* Optionally, display the last clicked action */}

                      </div>
                      {lastClicked11 && <p style={{ color: 'red' }}> {lastClicked11}</p>}
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <TextField onChange={(e) => setFeedback11(e.target.value)} id="standard-basic" label="feedback" variant="standard" fullWidth maxRows={4} multiline />
                      </div>
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <button
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = "https://d205gdf6tf9tly.cloudfront.net/23.mp4";
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
                          <source src="https://d205gdf6tf9tly.cloudfront.net/lmida/vide12.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                      </div>
                      <p className="dark:text-body-color-dark mb-2 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl Christmas themed videos with Xmas themed drinks">
                        12- Transform your events into unforgettable experiences
                      </p>
                      <Rating name="unique-rating"
                        defaultValue={rate12}
                        onChange={(event, newValue) => {
                          console.log("New Rating Value:", newValue);
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
                        <ButtonGroup variant="outlined" color="success" size="small" aria-label="Small button group">
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick12('post')}
                          >
                            Post
                          </Button>
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick12('edit')}
                          >
                            Edit
                          </Button>
                          <Button
                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                            onClick={() => handleButtonClick12('discard')}
                          >
                            Discard
                          </Button>
                        </ButtonGroup>
                        {/* Optionally, display the last clicked action */}

                      </div>
                      {lastClicked12 && <p style={{ color: 'red' }}>{lastClicked12}</p>}
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <TextField onChange={(e) => setFeedback12(e.target.value)} id="standard-basic" label="feedback" variant="standard" fullWidth maxRows={4} multiline />
                      </div>
                      <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <button
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = "https://d205gdf6tf9tly.cloudfront.net/11.mp4";
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

              {openAlert && (
                <Alert onClose={() => setOpenAlert(false)} severity="success" sx={{ width: '90%' }}>
                  Review submitted
                </Alert>
              )}


            </div>
          </div>
        </div>


      </section >
    </>
  );
};

export default Restaurant;