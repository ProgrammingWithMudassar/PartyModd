import React, { useEffect, useRef, useState } from "react";

import { MapContainer, Marker, TileLayer } from "react-leaflet";

import TicketCard from "../components/EventDescriptions/TicketCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Crousal from "../components/EventDescriptions/Crousal";
import ContactBar from "../components/EventDescriptions/ContactBar";
import Footer from "../components/General/Footer";
import { Link } from "react-router-dom";
import LazyImage from "../components/General/LazyImage";
import { motion, useScroll, useAnimationControls } from "framer-motion";
import Modal from "../components/General/Modal";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../Context/AuthProvider";
import icon from "../../public/add.png";

type Props = {};

let ticketData = [
  {
    id: "1",
    image: "../ticket1.png",
    text: "First 100 member",
    price: "Free",
    priceDescription: null,
    icon: "../add.png",
  },
  {
    id: "2",
    image: "../ticket2.png",
    text: "Immediate Admission",
    price: "$41.99",
    priceDescription: null,
    icon: "../add.png",
  },
  {
    id: "3",
    image: "../ticket3.png",
    text: "Fast Pass Admission",
    price: "$31.99",
    priceDescription: null,
    icon: "../add.png",
  },
  {
    id: "4",
    image: "../ticket4.png",
    text: "Stream Live",
    price: "Free",
    priceDescription: "Stream Live",
    icon: "../add.png",
  },
];

const contactData = [
  {
    id: "1",
    heading: "Email",
    text: "partymode@mail.com",
  },
  {
    id: "2",
    heading: "xxx-xxx-xxxxxx",
    text: "partymode@mail.com",
  },
  {
    id: "3",
    heading: "Website",
    text: "www.partymode.com",
  },
];

let crousalData = [
  {
    id: "1",
    image: "../Gallery1.png",
  },
  {
    id: "2",
    image: "../Gallery2.png",
  },
  {
    id: "3",
    image: "../Gallery3.png",
  },
  {
    id: "4",
    image: "../Gallery1.png",
  },
  {
    id: "5",
    image: "../Gallery2.png",
  },
  {
    id: "6",
    image: "../Gallery3.png",
  },
];

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

export default function EventDescriptions({}: Props) {
  const position = [51.505, -0.09];
  const { eventID } = useParams();
  const { scrollY } = useScroll();
  const [singleEvent, setSingleEvent] = useState({});
  const [startDateAndTime, setStartDateAndTime] = useState("");
  const [endDateAndTime, setEndDateAndTime] = useState("");
  const [allTickets, setAllTickets] = useState([]);
  const [readmore, setReadmore] = useState<boolean>(false);
  const { user, logout } = useAuth();

  const [scrollCounter, setScrollCounter] = useState<number>(0);
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScrollCounter(latest);
    });
  }, []);

  useEffect(() => {
    const getEventDataforEach = async () => {
      const resp = await axios.put(
        `http://localhost:8000/events/single-event/${eventID}`
      );
      console.log("resp of Get Event Data for each", resp.data);
      setSingleEvent(resp.data);
    };
    getEventDataforEach();
  }, [eventID]);

  useEffect(() => {
    let sDT = new Date(singleEvent?.startDate);
    let formattedStartDate = sDT.toLocaleString("en-US", { timeZone: "UTC" });
    setStartDateAndTime(formattedStartDate);

    let eDT = new Date(singleEvent?.endDate);
    let formattedEndDate = eDT.toLocaleString("en-US", { timeZone: "UTC" });
    setEndDateAndTime(formattedEndDate);
  }, [singleEvent]);

  const [showModal1, setShowModal1] = useState<boolean>(false);
  const [showModal2, setShowModal2] = useState<boolean>(false);

  useEffect(() => {
    const fetchTicket = async () => {
      const response = await axios.get(
        `http://localhost:8000/tickets/single-ticket/${eventID}`
      );
      setAllTickets(response.data);
    };

    fetchTicket();
  }, [eventID]);

  console.log("Ticketssss", allTickets);

  return (
    <>
      <Modal
        showModal={showModal1}
        hideShowModalHandler={() => setShowModal1(false)}
      >
        <div className="w-[50.20172910662824vw]  sm:w-[80vw] h-[1019px] max-h-[90vh] overflow-auto bg-black">
          <div className="w-[40.638040345821324vw] xsm:w-[90%] sm:w-[80%] m-auto">
            <div className="flex justify-between mt-[45px] items-center">
              <h2 className="text-center flex-1  text-[36px] text-[#000000] leading-[58.64px] font-[700]">
                Payment Option
              </h2>
              <img
                className="cursor-pointer"
                onClick={() => setShowModal1(false)}
                src="./x.svg"
                alt=""
              />
            </div>
            <div className="mt-[123px]">
              <label className="font-[400] text-[20px] text-[#231414D4] leading0[32.58px]">
                Card Number
              </label>
              <input
                className="w-full h-[79px] border-[1px] border-[#FB4A043D] rounded-[20px]"
                type="text"
              />
            </div>
            <div className="mt-[60px]">
              <label className="font-[400] text-[20px] text-[#231414D4] leading0[32.58px]">
                CVC
              </label>
              <input
                className="w-full h-[79px] border-[1px] border-[#FB4A043D] rounded-[20px]"
                type="text"
              />
            </div>
            <div className="mt-[60px]">
              <label className="font-[400] text-[20px] text-[#231414D4] leading0[32.58px]">
                Expire Date
              </label>
              <input
                className="w-full h-[79px] border-[1px] border-[#FB4A043D] rounded-[20px]"
                type="text"
              />
            </div>
            <motion.button
              initial={{ scale: 1, backgroundColor: "#FB4A04" }}
              whileHover={{
                scale: 1.02,
                backgroundColor: "transparent",
                color: "#FB4A04",
              }}
              className="my-[79px] text-[white] border-2 border-[#FB4A04] w-[100%] h-[79px] rounded-[20px] font-[700] text-[clamp(16px,1.38328530259366vw,24px)] leading-[39px]"
            >
              Book Ticket
            </motion.button>
          </div>
        </div>
      </Modal>

      <Modal
        showModal={showModal2}
        hideShowModalHandler={() => setShowModal2(false)}
      >
        <div className="w-[50.20172910662824vw] xsm:w-[90vw] sm:w-[80vw] h-[1019px] max-h-[90vh] overflow-auto bg-white">
          <div className="w-[40.638040345821324vw] xsm:w-[90%] sm:w-[80%] m-auto">
            <div className="flex justify-between mt-[45px] items-center">
              <h2 className="text-center flex-1 text-[36px] text-[#000000] leading-[58.64px] font-[700]">
                Ticket purchase form
              </h2>
              <img
                className="cursor-pointer"
                onClick={() => setShowModal2(false)}
                src="./x.svg"
                alt=""
              />
            </div>
            <p className="mt-[30px] text-center text-[20px] text-[#231414D4] leading-[32.58px] font-[400]">
              Kindly fill out the information we will surely get back to you in
              due time
            </p>
            <div className="mt-[123px]">
              <label className="font-[400] text-[20px] text-[#231414D4] leading0[32.58px]">
                Name*
              </label>
              <input
                className="w-full h-[79px] border-[1px] border-[#FB4A043D] rounded-[20px]"
                type="text"
              />
            </div>
            <div className="mt-[60px]">
              <label className="font-[400] text-[20px] text-[#231414D4] leading0[32.58px]">
                Email address
              </label>
              <input
                className="w-full h-[79px] border-[1px] border-[#FB4A043D] rounded-[20px]"
                type="text"
              />
            </div>
            <div className="mt-[60px]">
              <label className="font-[400] text-[20px] text-[#231414D4] leading0[32.58px]">
                Choose Ticket
              </label>
              <select className=" w-full h-[79px] border-[1px] border-[#FB4A043D] rounded-[20px]">
                <option className="bg-[#FB4A041A] hover:bg-[#FB4A04]">
                  Fast Pass Admission
                </option>
                <option className="bg-[#FB4A041A] hover:bg-[#FB4A04]">
                  Immediate Admission
                </option>
                <option className="bg-[#FB4A041A] hover:bg-[#FB4A04]">
                  Stream Live
                </option>
              </select>
            </div>
            <motion.button
              initial={{ scale: 1, backgroundColor: "#FB4A04" }}
              whileHover={{
                scale: 1.02,
                backgroundColor: "transparent",
                color: "#FB4A04",
              }}
              className="my-[79px] text-[white] border-2 border-[#FB4A04] w-[100%] h-[79px] rounded-[20px] font-[700] text-[clamp(16px,1.38328530259366vw,24px)] leading-[39px]"
            >
              Proceed
            </motion.button>
          </div>
        </div>
      </Modal>

      <div>
        <section
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1531391232906-22d20ecb825d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80")`,
          }}
          className="backgroundImage w-[calc(100vw - 100%)] h-[964px] xsm:h-auto sm:h-auto"
        >
          <motion.nav
            style={
              scrollCounter > 0
                ? { background: "#fff", boxShadow: "1px 1px 8px #00000020" }
                : { background: "rgba(0,0,0,0)" }
            }
            className="fixed transition-all z-[1000] flex justify-between items-center w-[100%]"
          >
            <Link to="/">
              <img src="../Logo.png" className="ml-[3.54vw]" alt="" />
            </Link>
            <motion.ul
              className={
                scrollCounter > 0
                  ? "text-[#473a3a] text-[clamp(12px,0.9221902017291066vw,16px)] font-[700] flex gap-[5.244vw] mr-[8.94vw]"
                  : "text-[#ffffff] text-[clamp(12px,0.9221902017291066vw,16px)] font-[700] flex gap-[5.244vw] mr-[8.94vw]"
              }
            >
              <Link to="/">
                <motion.li
                  whileHover={{ color: "#FB4A04" }}
                  className="text-inherit"
                >
                  Events
                </motion.li>
              </Link>

              <Link to="/login">
                <motion.li
                  whileHover={{ color: "#FB4A04" }}
                  className="text-inherit"
                >
                  Login
                </motion.li>
              </Link>
            </motion.ul>
          </motion.nav>

          <div className="flex xsm:flex-col sm:flex-col w-[72%] xsm:w-[80%] sm:w-[76%] m-auto gap-[5.878vw]">
            <div className="relative flex-1 mt-[166px]">
              <div className="relative z-20">
                <LazyImage
                  alt=""
                  src={`http://localhost:8000/Storage/${singleEvent?.eventImage}`}
                  classes="relative z-200 min-w-[30.028818443804035vw] "
                  style={{ position: "relative", zIndex: "100" }}
                />
              </div>
              <img
                className="absolute z-0 top-[20px] left-[-7.492795389048991vw] min-w-[39.2507204610951vw]"
                src="./mainBackgroundShadow.png"
                alt=""
              />
            </div>

            <div className="xsm:mt-[100px] sm:mt-[100px] xsm:mb-[100px] sm:mb-[100px] mt-[215px] flex-1 flex flex-col text-white">
              <h1 className="font-bold text-[clamp(20px,2.07492795389049vw,36px)] min-w-[260px] xsm:min-w-[80vw] w-[27.089337175792508vw] xsm:leading-[35px] leading-[59px]">
                {singleEvent?.title}
              </h1>

              <h3 className=" font-bold text-[clamp(20px,2.07492795389049vw,36px)] min-w-[260px] xsm:min-w-[80vw] w-[27.089337175792508vw] xsm:leading-[35px] leading-[59px]">
                {" "}
                Start:{" "}
                <p className="w-[27.04vw] min-w-[260px] xsm:min-w-[80vw] font-bold text-[clamp(14px,1.1527377521613833vw,20px)] leading-[33px]">
                  {startDateAndTime}{" "}
                </p>
              </h3>

              <h3 className=" font-bold text-[clamp(20px,2.07492795389049vw,36px)] min-w-[260px] xsm:min-w-[80vw] w-[27.089337175792508vw] xsm:leading-[35px] leading-[59px]">
                {" "}
                End:{" "}
                <p className="w-[27.04vw] min-w-[260px] xsm:min-w-[80vw] font-bold text-[clamp(14px,1.1527377521613833vw,20px)] leading-[33px]">
                  {endDateAndTime}{" "}
                </p>
              </h3>

              <div className="flex my-6 items-start  gap-[7.5px]">
                <LazyImage alt="" src={"../mainClock.png"} classes="mt-[8px]" />
                <p className="w-[27.04vw] min-w-[260px] xsm:min-w-[80vw] font-bold text-[clamp(14px,1.1527377521613833vw,20px)] leading-[33px]">
                  {singleEvent?.title}, {singleEvent?.location?.name}{" "}
                </p>
              </div>

              <div className="mt-[44px]">
                <h2 className="font-bold text-[clamp(20px,2.07492795389049vw,36px)] xsm:leading-[35px] sm:leading-[35px] leading-[59px]">
                  Description
                </h2>
                <h3 className="w-[36.72vw] min-w-[260px] xsm:min-w-[80vw] font-bold text-[clamp(14px,1.1527377521613833vw,20px)] leading-[33px]">
                  {singleEvent?.summary}{" "}
                </h3>
              </div>
              <p className="leading-[26.06px] mt-[19px] w-[38.81vw] min-w-[260px] xsm:min-w-[80vw] text-[clamp(12px,0.9221902017291066vw,16px)] font-[400]">
                <span className="font-[700] block">Belly of the Beast:</span>
                {readmore
                  ? singleEvent?.description
                  : singleEvent?.description?.length > 95
                  ? singleEvent?.description?.substr(0, 95 - 1) + "..."
                  : singleEvent?.description}
              </p>
              {!(singleEvent?.description?.length > 95) ? (
                ""
              ) : (
                <motion.button
                  initial={{ scale: 1, backgroundColor: "#ffffff00" }}
                  whileHover={{ scale: 1.02, backgroundColor: "#FB4A04" }}
                  className="mt-[15px] w-[231px] h-[47px] font-[700] text-[clamp(16px,1.38328530259366vw,24px)] leading-[39px] border-[4px] border-white"
                  onClick={() => {
                    !readmore ? setReadmore(true) : setReadmore(false);
                  }}
                >
                  {!readmore ? "Read More" : "Read Less"}
                </motion.button>
              )}
            </div>
          </div>
        </section>

        <section className="mt-[48px] mb-[76px] w-[88%] m-auto flex flex-wrap gap-[20px] sm:justify-center md:flex-col md:items-center">
          {allTickets.map((ticket) => {
            return (
              <TicketCard
              eventName={singleEvent?.title}
                {...ticket}
                icon={icon}
                // modalHandler={() => setShowModal2(true)}
              />
            );
          })}
        </section>

        {/* <section>
          <h2 className='font-[700] text-[clamp(20px,2.07492795389049vw,36px)] leading-[58.64px] text-center text-[#231414]'>Watch Video</h2>
          <div className='flex justify-center items-center  mt-[55px] mb-[79px]'>
            <motion.div whileHover={{ scale: 1.01 }}>
              <LazyImage alt="" src={"../video.png"} classes='shadow-md w-[71.23919308357348vw] xsm:min-w-[80vw]' />
            </motion.div>
          </div>
        </section> */}

        <section className="w-[90%] m-auto">
          <h2 className="mb-[51px] font-[700] text-[clamp(20px,2.07492795389049vw,36px)] leading-[58.64px] text-center text-[#231414]">
            Gallery
          </h2>
          <Crousal
            maxWidth={"503px"}
            width={"29vw"}
            settings={settings}
            crousalData={singleEvent?.eventImages}
            classes="xsm:min-w-[80vw] sm:min-w-[40vw]"
          />
        </section>

        <section className="mt-[52px] w-[100%] h-[705px] xsm:h-auto bg-[#fed4c3] mb-[79px] ">
          <h2 className="pt-[46px] font-[700] text-[clamp(20px,2.07492795389049vw,36px)] leading-[58.64px] text-center text-[#231414]">
            Location
          </h2>
          <motion.div className="flex justify-center items-center">
            <motion.div whileHover={{ scale: 1.01 }}>
              <LazyImage
                alt=""
                src={"./map.png"}
                classes="m-auto mb-[20px] mt-[49px] w-[71.23919308357348vw] min-w-[260px] xsm:min-w-[80vw]"
              />
            </motion.div>
          </motion.div>
          <div className="flex justify-between items-center xsm:flex-col w-[71.24vw] m-auto">
            <p className="w-[36.714vw] min-w-[260px] xsm:min-w-[80vw] font-[700] text-[#231414] leading-[26px]">
              {singleEvent?.summary}
            </p>

      
            <motion.button
              initial={{ scale: 1, backgroundColor: "#ffffff00" }}
              whileHover={{
                scale: 1.02,
                backgroundColor: "#FB4A04",
                color: "#fff",
              }}
              className="xsm:mt-[20px] xsm:mb-[50px] border-[2px] border-[#FB4A04] w-[177px] h-[60px] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[26px] font-[700]"
            >
              Open In Maps
            </motion.button>
          </div>
          <div className="flex justify-center">
          <iframe src={`https://www.openstreetmap.org/export/embed.html?bbox=${singleEvent?.location?.longitude}%2C${singleEvent?.location?.latitude}%2C${singleEvent?.location?.longitude}%2C${singleEvent?.location?.latitude}&layer=mapnik`}width="600" height="400" frameborder="0"></iframe>
          </div>


        </section>

        <section className="mt-[52px] w-[100%] mb-[79px] ">
          <h2 className="mb-[49px] pt-[46px] font-[700] text-[clamp(20px,2.07492795389049vw,36px)] leading-[58.64px] text-center text-[#231414]">
            Contact
          </h2>
          {contactData.map((data) => {
            return <ContactBar {...data} />;
          })}
        </section>

        <section>
          <h2 className="mb-[46px] font-[700] text-[clamp(20px,2.07492795389049vw,36px)] leading-[58.64px] xsm:leading-[35px] text-center text-[#231414]">
            Terms
          </h2>
          <p className="mb-[217px] w-[71.239vw] min-w-[260px] xsm:min-w-[80vw] m-auto font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[26.06px] text-center text-[#231414]">
            {`All tickets are final sale and cannot be exchanged or refunded. By
            purchasing a ticket to this event, you agree to this purchase
            policy. Before purchasing your tickets, we urge you to confirm the
            title, time and location of the event. ${singleEvent?.title} Attraction may
            take and use images & video of all guests. ${singleEvent?.title} at all times
            reserves the right to videotape patrons, and take still images, and
            to utilize those images and videos for any reason, including
            marketing, advertising, promotion, on social media.`}
          </p>
        </section>
        <Footer />
      </div>
    </>
  );
}
