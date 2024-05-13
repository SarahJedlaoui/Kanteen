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
          subject: "L'Mida Feedback Dev",
          from: "sarajedlaoui99@gmail.com",
          to: "pukajedla@gmail.com",
          bodyText: `L Mida feedback:\n video rating:\n 
          video1: rate :${rate1} , decision: ${lastClicked1}, feedback:  ${feedback1}
          \n video2:rate ${rate2}, decision: ${lastClicked2}, feedback:  ${feedback2}
          \n video3:rate ${rate3}, decision: ${lastClicked3}, feedback:  ${feedback3}
          \n video4:rate ${rate4}, decision: ${lastClicked4}, feedback:  ${feedback4}
          \n video5:rate ${rate5}, decision: ${lastClicked5}, feedback:  ${feedback5}
          \n video6:rate ${rate6}, decision: ${lastClicked6}, feedback:  ${feedback6}
         
          Feedback: ${feedback}\n
          `,
        }
      })
      console.log('Reviw Submitted:', feedback);
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
                
                <h3 className="mb-5 text-xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight md:text-3xl md:leading-tight">
                 Happy Hour Video Ideas
                </h3>
                <p className="dark:text-body-color-dark mb-5 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
                Themes, parties, happy hours
                </p>



                <div className="-mx-5  flex flex-wrap items-center justify-center mb-5" >


                  <div className="fullwidth sm:w-1/2 px-0 py-1 flex flex-col max-w-4xl mx-auto rounded-lg shadow-lg overflow-hidden">
                    {/* Top section with video and text side by side */}
                    <div className="flex overflow-hidden rounded-md items-center justify-center ">
                      <div className="w-1/2">
                        <div className="mb-5 relative  items-center  rounded-lg justify-center h-[400px]">
                          <video autoPlay muted loop controls className="absolute  rounded-lg inset-0 w-full h-full object-cover">
                            <source src="https://d205gdf6tf9tly.cloudfront.net/lmida/happy.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                      <div className="w-1/2 ml-2 mb-5 h-[400px] p-4 bg-white  rounded-lg shadow-lg overflow-hidden">
                        <div className="text-lg font-bold mb-2">Hook </div>
                        <div className="text-gray-700 text-sm mb-2">
                          <p>&ldquo;What makes Karaage chicken so irresistibly crispy?&ldquo;</p>
                        </div>
                        <div className="text-lg font-bold mb-2">Core</div>
                        <div className="text-gray-700 text-sm mb-2">
                        <p>&ldquo;Unlock the secrets to our perfect crunch and juicy flavor!&ldquo;</p>
                        </div>
                        
                        <div className="text-lg font-bold mb-2">Reward</div>
                        <div className="text-gray-700 text-sm mb-2">
                        <p> &ldquo;Taste the crunch! Visit Tokyo Hot Fried Chicken today!&ldquo;</p>
                        </div>
                       
                      </div>
                    </div>

                    {/* Bottom section with feedback and buttons */}
                    <div className="px-2 pt-4 pb-2">


                      <div className="flex flex-col space-y-3">
                        <div className="p-4 bg-white  rounded-lg shadow-lg overflow-hidden">
                          <div className="text-gray-700 text-sm">
                            <p><strong>Caption: </strong>&ldquo;Crunch into perfection with our Karaage chicken! 🍗💥 #TokyoHotFriedChicken&ldquo;</p>
                            <p><strong>Hashtags: </strong>#KaraageCrunch #TokyoHot #TorontoFoodie #CrispyChicken #JapaneseCuisine</p>
                          </div>
                        </div>

                        {/* Feedback and rating inside a box */}
                        <div className="flex gap-4">
                          <div className="flex-1 p-4 bg-white rounded-lg shadow-lg">
                            <div className="flex flex-col space-y-4">
                              {/* Rating component needs to be implemented using your chosen library, here's a placeholder */}
                              <div className="flex justify-center">
                                <div className="flex text-yellow-400 text-3xl">
                                  <Rating name="unique-rating"
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
                                </div>
                              </div>
                              <div className="border border-gray-300 rounded-lg p-2">
                                <TextField onChange={(e) => setFeedback1(e.target.value)} id="standard-basic" label="feedback" variant="standard" fullWidth maxRows={4} multiline />
                              </div>
                            </div>
                          </div>

                          {/* Buttons */}
                          <div className="flex flex-col space-y-2">

                            <button className="bg-red-500 hover:bg-primary text-white font-bold py-2 px-4 rounded" onClick={() => handleButtonClick1('post')} >Discard</button>
                            <button className="bg-yellow hover:bg-primary text-black font-bold py-2 px-4 rounded" onClick={() => handleButtonClick1('edit')} >Edit</button>
                            <button className="bg-green hover:bg-primary text-white font-bold py-2 px-4 rounded" onClick={() => handleButtonClick1('queue')} >Add to queue</button>
                          </div>
                        </div>
                      </div>

                    </div>


                  </div>



                  <div className="fullwidth sm:w-1/2 px-0 py-1 flex flex-col max-w-4xl mx-auto rounded-lg shadow-lg overflow-hidden">
                    {/* Top section with video and text side by side */}
                    <div className="flex overflow-hidden rounded-md items-center justify-center ">
                      <div className="w-1/2">
                        <div className="mb-5 relative  items-center  rounded-lg justify-center h-[400px]">
                          <video autoPlay muted loop controls className="absolute  rounded-lg inset-0 w-full h-full object-cover">
                            <source src="https://d205gdf6tf9tly.cloudfront.net/lmida/hapyy1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>


                      <div className="w-1/2 ml-2 mb-5 h-[400px] p-4 bg-white  rounded-lg shadow-lg overflow-hidden">
                        <div className="text-lg font-bold mb-2">Hook </div>
                        <div className="text-gray-700 text-sm mb-2">
                          <p>&ldquo;Ever wonder what goes into our famous Karaage chicken?&ldquo;</p>
                        </div>
                        <div className="text-lg font-bold mb-2">Core</div>
                        <div className="text-gray-700 text-sm mb-2">
                        <p>&ldquo;Discover the fresh ingredients that make our Karaage stand out!&ldquo;</p>
                        </div>
                        
                        <div className="text-lg font-bold mb-2">Reward</div>
                        <div className="text-gray-700 text-sm mb-2">
                        <p> &ldquo;Ready for a taste? Come on down!&ldquo;</p>
                        </div>
                       
                      </div>
                    </div>

                    {/* Bottom section with feedback and buttons */}
                    <div className="px-2 pt-4 pb-2">


                      <div className="flex flex-col space-y-3">
                        <div className="p-4 bg-white  rounded-lg shadow-lg overflow-hidden">
                          <div className="text-gray-700 text-sm">
                            <p><strong>Caption:</strong> &ldquo;Fresh and flavorful! That&apos;s our Karaage promise. 🌿🍗 #TokyoHotFriedChicken&ldquo;</p>
                            <p><strong>Hashtags: </strong>#FreshEats #KaraageSecrets #TokyoHot #EatLocal #TorontoEats</p>
                          </div>
                        </div>

                        {/* Feedback and rating inside a box */}
                        <div className="flex gap-4">
                          <div className="flex-1 p-4 bg-white rounded-lg shadow-lg">
                            <div className="flex flex-col space-y-4">
                              {/* Rating component needs to be implemented using your chosen library, here's a placeholder */}
                              <div className="flex justify-center">
                                <div className="flex text-yellow-400 text-3xl">
                                  {/* Simulate a star rating */}
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
                                </div>
                              </div>
                              <div className="border border-gray-300 rounded-lg p-2">
                                <TextField onChange={(e) => setFeedback2(e.target.value)} id="standard-basic" label="feedback" variant="standard" fullWidth maxRows={4} multiline />
                              </div>
                            </div>
                          </div>

                          {/* Buttons */}
                          <div className="flex flex-col space-y-2">
                            <button className="bg-red-500 hover:bg-primary text-white font-bold py-2 px-4 rounded" onClick={() => handleButtonClick2('post')} >Discard</button>
                            <button className="bg-yellow hover:bg-primary text-black font-bold py-2 px-4 rounded" onClick={() => handleButtonClick2('edit')} >Edit</button>
                            <button className="bg-green hover:bg-primary text-white font-bold py-2 px-4 rounded" onClick={() => handleButtonClick2('queue')} >Add to queue</button>
                          </div>
                        </div>
                      </div>

                    </div>


                  </div>


                </div>



                <div className="-mx-5 flex flex-wrap items-center justify-center mb-5" >


                  <div className="fullwidth sm:w-1/2 px-0 py-1 flex flex-col max-w-4xl mx-auto rounded-lg shadow-lg overflow-hidden">
                    {/* Top section with video and text side by side */}
                    <div className="flex overflow-hidden rounded-md items-center justify-center ">
                      <div className="w-1/2">
                        <div className="mb-5 relative  items-center  rounded-lg justify-center h-[400px]">
                          <video autoPlay muted loop controls className="absolute  rounded-lg inset-0 w-full h-full object-cover">
                            <source src="https://d205gdf6tf9tly.cloudfront.net/lmida/happy2.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>


                      <div className="w-1/2 ml-2 mb-5 h-[400px] p-4 bg-white  rounded-lg shadow-lg overflow-hidden">
                        <div className="text-lg font-bold mb-2">Hook </div>
                        <div className="text-gray-700 text-sm mb-2">
                          <p>&ldquo; How do we cook Karaage chicken to perfection every time?&ldquo;</p>
                        </div>
                        <div className="text-lg font-bold mb-2">Core</div>
                        <div className="text-gray-700 text-sm mb-2">
                        <p> &ldquo;Step into our kitchen and see the magic happen!&ldquo;</p>
                        </div>
                        
                        <div className="text-lg font-bold mb-2">Reward</div>
                        <div className="text-gray-700 text-sm mb-2">
                        <p> &ldquo;Crave the crunch? Visit us in Toronto!&ldquo;</p>
                        </div>
                       
                      </div>


                      
                    </div>

                    {/* Bottom section with feedback and buttons */}
                    <div className="px-2 pt-4 pb-2">


                      <div className="flex flex-col space-y-3">
                        <div className="p-4 bg-white  rounded-lg shadow-lg overflow-hidden">
                          <div className="text-gray-700 text-sm">
                            <p><strong>Caption: </strong>&ldquo;Experience the sizzle of our Karaage chicken! 🔥🍗 #TokyoHotFriedChicken&ldquo;</p>
                            <p><strong>Hashtags: </strong>#BehindTheScenes #CookingSecrets #KaraageChicken #TorontoFood #TokyoHot</p>
                          </div>
                        </div>

                        {/* Feedback and rating inside a box */}
                        <div className="flex gap-4">
                          <div className="flex-1 p-4 bg-white rounded-lg shadow-lg">
                            <div className="flex flex-col space-y-4">
                              {/* Rating component needs to be implemented using your chosen library, here's a placeholder */}
                              <div className="flex justify-center">
                                <div className="flex text-yellow-400 text-3xl">
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
                                </div>
                              </div>
                              <div className="border border-gray-300 rounded-lg p-2">
                                <TextField onChange={(e) => setFeedback3(e.target.value)} id="standard-basic" label="feedback" variant="standard" fullWidth maxRows={4} multiline />
                              </div>
                            </div>
                          </div>

                          {/* Buttons */}
                          <div className="flex flex-col space-y-2">

                            <button className="bg-red-500 hover:bg-primary text-white font-bold py-2 px-4 rounded" onClick={() => handleButtonClick3('post')} >Discard</button>
                            <button className="bg-yellow hover:bg-primary text-black font-bold py-2 px-4 rounded" onClick={() => handleButtonClick3('edit')} >Edit</button>
                            <button className="bg-green hover:bg-primary text-white font-bold py-2 px-4 rounded" onClick={() => handleButtonClick3('queue')} >Add to queue</button>
                          </div>
                        </div>
                      </div>

                    </div>


                  </div>


                  <div className="fullwidth sm:w-1/2 px-0 py-1 flex flex-col max-w-4xl mx-auto rounded-lg shadow-lg overflow-hidden">
                    {/* Top section with video and text side by side */}
                    <div className="flex overflow-hidden rounded-md items-center justify-center ">
                      <div className="w-1/2">
                        <div className="mb-5 relative  items-center  rounded-lg justify-center h-[400px]">
                          <video autoPlay muted loop controls className="absolute  rounded-lg inset-0 w-full h-full object-cover">
                            <source src="https://d205gdf6tf9tly.cloudfront.net/lmida/happy3.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>

                      <div className="w-1/2 ml-2 mb-5 h-[400px] p-4 bg-white  rounded-lg shadow-lg overflow-hidden">
                        <div className="text-lg font-bold mb-2">Hook </div>
                        <div className="text-gray-700 text-sm mb-2">
                          <p>&ldquo;Wondering what to pair with our Karaage chicken?&ldquo;</p>
                        </div>
                        <div className="text-lg font-bold mb-2">Core</div>
                        <div className="text-gray-700 text-sm mb-2">
                        <p> &ldquo;Learn the best sides and drinks to complement your Karaage meal!&ldquo;</p>
                        </div>
                        
                        <div className="text-lg font-bold mb-2">Reward</div>
                        <div className="text-gray-700 text-sm mb-2">
                        <p> &ldquo;Pick your favorite combo today at Tokyo Hot!&ldquo;</p>
                        </div>
                       
                      </div>


                      
                    </div>

                    {/* Bottom section with feedback and buttons */}
                    <div className="px-2 pt-4 pb-2">


                      <div className="flex flex-col space-y-3">
                        <div className="p-4 bg-white  rounded-lg shadow-lg overflow-hidden">
                          <div className="text-gray-700 text-sm">
                            <p><strong>Caption:</strong> &ldquo;Pair it like a pro! 🍻🍚 Which combo will you try first? #TokyoHotFriedChicken&ldquo;</p>
                            <p><strong>Hashtags: </strong>#FoodPairing #KaraageChicken #DrinkAndDine #TokyoHot #TorontoDining</p>
                          </div>
                        </div>

                        {/* Feedback and rating inside a box */}
                        <div className="flex gap-4">
                          <div className="flex-1 p-4 bg-white rounded-lg shadow-lg">
                            <div className="flex flex-col space-y-4">
                              {/* Rating component needs to be implemented using your chosen library, here's a placeholder */}
                              <div className="flex justify-center">
                                <div className="flex text-yellow-400 text-3xl">
                                  {/* Simulate a star rating */}
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
                                </div>
                              </div>
                              <div className="border border-gray-300 rounded-lg p-2">
                                <TextField onChange={(e) => setFeedback4(e.target.value)} id="standard-basic" label="feedback" variant="standard" fullWidth maxRows={4} multiline />
                              </div>
                            </div>
                          </div>

                          {/* Buttons */}
                          <div className="flex flex-col space-y-2">
                            <button className="bg-red-500 hover:bg-primary text-white font-bold py-2 px-4 rounded" onClick={() => handleButtonClick4('post')} >Discard</button>
                            <button className="bg-yellow hover:bg-primary text-black font-bold py-2 px-4 rounded" onClick={() => handleButtonClick4('edit')} >Edit</button>
                            <button className="bg-green hover:bg-primary text-white font-bold py-2 px-4 rounded" onClick={() => handleButtonClick4('queue')} >Add to queue</button>
                          </div>
                        </div>
                      </div>

                    </div>


                  </div>


                </div>



                <div className="-mx-5 flex flex-wrap items-center justify-center mb-5" >


                  <div className="fullwidth sm:w-1/2 px-0 py-1 flex flex-col max-w-4xl mx-auto rounded-lg shadow-lg overflow-hidden">
                    {/* Top section with video and text side by side */}
                    <div className="flex overflow-hidden rounded-md items-center justify-center ">
                      <div className="w-1/2">
                        <div className="mb-5 relative  items-center  rounded-lg justify-center h-[400px]">
                          <video autoPlay muted loop controls className="absolute  rounded-lg inset-0 w-full h-full object-cover">
                            <source src="https://d205gdf6tf9tly.cloudfront.net/lmida/happy4.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>

                      <div className="w-1/2 ml-2 mb-5 h-[400px] p-4 bg-white  rounded-lg shadow-lg overflow-hidden">
                        <div className="text-lg font-bold mb-2">Hook </div>
                        <div className="text-gray-700 text-sm mb-2">
                          <p>&ldquo;What makes Karaage chicken so irresistibly crispy?&ldquo;</p>
                        </div>
                        <div className="text-lg font-bold mb-2">Core</div>
                        <div className="text-gray-700 text-sm mb-2">
                        <p> &ldquo;Discover the fresh ingredients that make our Karaage stand out!&ldquo;</p>
                        </div>
                        
                        <div className="text-lg font-bold mb-2">Reward</div>
                        <div className="text-gray-700 text-sm mb-2">
                        <p> &ldquo;Ready for a taste? Come on down!&ldquo;</p>
                        </div>
                       
                      </div>
                      
                    </div>

                    {/* Bottom section with feedback and buttons */}
                    <div className="px-2 pt-4 pb-2">


                      <div className="flex flex-col space-y-3">
                        <div className="p-4 bg-white  rounded-lg shadow-lg overflow-hidden">
                          <div className="text-gray-700 text-sm">
                            <p><strong>Caption: </strong>&ldquo;Crunch into perfection with our Karaage chicken! 🍗💥 #TokyoHotFriedChicken&ldquo;</p>
                            <p><strong>Hashtags: </strong>#KaraageCrunch #TokyoHot #TorontoFoodie #CrispyChicken #JapaneseCuisine</p>
                          </div>
                        </div>

                        {/* Feedback and rating inside a box */}
                        <div className="flex gap-4">
                          <div className="flex-1 p-4 bg-white rounded-lg shadow-lg">
                            <div className="flex flex-col space-y-4">
                              {/* Rating component needs to be implemented using your chosen library, here's a placeholder */}
                              <div className="flex justify-center">
                                <div className="flex text-yellow-400 text-3xl">
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
                                </div>
                              </div>
                              <div className="border border-gray-300 rounded-lg p-2">
                                <TextField onChange={(e) => setFeedback5(e.target.value)} id="standard-basic" label="feedback" variant="standard" fullWidth maxRows={4} multiline />
                              </div>
                            </div>
                          </div>

                          {/* Buttons */}
                          <div className="flex flex-col space-y-2">

                            <button className="bg-red-500 hover:bg-primary text-white font-bold py-2 px-4 rounded" onClick={() => handleButtonClick5('post')} >Discard</button>
                            <button className="bg-yellow hover:bg-primary text-black font-bold py-2 px-4 rounded" onClick={() => handleButtonClick5('edit')} >Edit</button>
                            <button className="bg-green hover:bg-primary text-white font-bold py-2 px-4 rounded" onClick={() => handleButtonClick5('queue')} >Add to queue</button>
                          </div>
                        </div>
                      </div>

                    </div>


                  </div>

                  <div className="fullwidth sm:w-1/2 px-0 py-1 flex flex-col max-w-4xl mx-auto rounded-lg shadow-lg overflow-hidden">
                    {/* Top section with video and text side by side */}
                    <div className="flex overflow-hidden rounded-md items-center justify-center ">
                      <div className="w-1/2">
                        <div className="mb-5 relative  items-center  rounded-lg justify-center h-[400px]">
                          <video autoPlay muted loop controls className="absolute  rounded-lg inset-0 w-full h-full object-cover">
                            <source src="https://d205gdf6tf9tly.cloudfront.net/lmida/happy5.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                      <div className="w-1/2 ml-2 mb-5 h-[400px] p-4 bg-white  rounded-lg shadow-lg overflow-hidden">
                        <div className="text-lg font-bold mb-2">Hook </div>
                        <div className="text-gray-700 text-sm mb-2">
                          <p>&ldquo;What makes Karaage chicken so irresistibly crispy?&ldquo;</p>
                        </div>
                        <div className="text-lg font-bold mb-2">Core</div>
                        <div className="text-gray-700 text-sm mb-2">
                        <p> &ldquo;Discover the fresh ingredients that make our Karaage stand out!&ldquo;</p>
                        </div>
                        
                        <div className="text-lg font-bold mb-2">Reward</div>
                        <div className="text-gray-700 text-sm mb-2">
                        <p> &ldquo;Ready for a taste? Come on down!&ldquo;</p>
                        </div>
                       
                      </div>
                    </div>

                    {/* Bottom section with feedback and buttons */}
                    <div className="px-2 pt-4 pb-2">


                      <div className="flex flex-col space-y-3">
                        <div className="p-4 bg-white  rounded-lg shadow-lg overflow-hidden">
                          <div className="text-gray-700 text-sm">
                            <p><strong>Caption:</strong> &ldquo;Fresh and flavorful! That&apos;s our Karaage promise. 🌿🍗 #TokyoHotFriedChicken&ldquo;</p>
                            <p><strong>Hashtags: </strong>#FreshEats #KaraageSecrets #TokyoHot #EatLocal #TorontoEats</p>
                          </div>
                        </div>

                        {/* Feedback and rating inside a box */}
                        <div className="flex gap-4">
                          <div className="flex-1 p-4 bg-white rounded-lg shadow-lg">
                            <div className="flex flex-col space-y-4">
                              {/* Rating component needs to be implemented using your chosen library, here's a placeholder */}
                              <div className="flex justify-center">
                                <div className="flex text-yellow-400 text-3xl">
                                  {/* Simulate a star rating */}
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
                                </div>
                              </div>
                              <div className="border border-gray-300 rounded-lg p-2">
                                <TextField onChange={(e) => setFeedback6(e.target.value)} id="standard-basic" label="feedback" variant="standard" fullWidth maxRows={4} multiline />
                              </div>
                            </div>
                          </div>

                          {/* Buttons */}
                          <div className="flex flex-col space-y-2">
                            <button className="bg-red-500 hover:bg-primary text-white font-bold py-2 px-4 rounded" onClick={() => handleButtonClick6('post')} >Discard</button>
                            <button className="bg-yellow hover:bg-primary text-black font-bold py-2 px-4 rounded" onClick={() => handleButtonClick6('edit')} >Edit</button>
                            <button className="bg-green hover:bg-primary text-white font-bold py-2 px-4 rounded" onClick={() => handleButtonClick6('queue')} >Add to queue</button>
                          </div>
                        </div>
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