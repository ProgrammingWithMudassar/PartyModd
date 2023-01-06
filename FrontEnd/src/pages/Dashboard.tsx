import React, { useEffect, useState } from "react";
import LazyImage from "../components/General/LazyImage";
import { Link, NavLink } from "react-router-dom";
import Footer from "../components/General/Footer";
import EventsCards from "../components/Events/EventsCards";
import { data, data1 } from "./Events";
import SearchBar from "../components/General/SearchBar";
import Button from "../components/General/Button";
import { motion } from "framer-motion";
import Modal from "../components/General/Modal";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAuth } from "../Context/AuthProvider";
import axios from "axios";
import { useEvent } from "../Context/EventProvider";

import NewEventsCards from "../components/Events/NewEventCard";

type Props = {};
export default function Dashboard({}: Props) {
  const { logout, user } = useAuth();
  const Navigate = useNavigate();
  const { eventID, setEventID } = useEvent();

  const [openContextMenu, setOpenContextMenu] = useState<boolean>(false);
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showNavContext, setShowNavContext] = useState<boolean>(false);
  const [allEvents, setAllEvents] = useState([]);


  const createEvent = async () => {
    const eventCreated = await axios.post(
      "http://localhost:8000/events/create-event",
      { status: "pending" }
    );
    console.log("EVENET CREATED RESPONSE", eventCreated.data.eventId);
    setEventID(eventCreated.data.eventId);
    Navigate(`/create-event/basic-info/${eventCreated.data.eventId}`);
  };

  useEffect(() => {
    const fetchAllEvents = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8000/events/all-events"
        );
        console.log("All events data", data);
        setAllEvents(data);
      } catch (err) {
        toast.error("Network Issue!!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    };

    fetchAllEvents();
  }, []);

  return (
    <>
      <ToastContainer />
      <Modal
        showModal={showModal}
        hideShowModalHandler={() => setShowModal(false)}
      >
        <div className="w-[41.84438040345821vw] xsm:w-[90vw] sm:w-[80vw] md:w-[60vw] h-[190px] bg-white px-[24px] flex flex-col justify-center">
          <p className="font-[400] text-[16px] text-[#231414D4] leading-[26.06px] mb-[16px]">
            Enter Friend email address
          </p>
          <div className="flex gap-[2.3054755043227666vw] xsm:flex-col sm:flex-col">
            <input className="w-[28.35734870317003vw] xsm:w-[60vw] sm:w-[60vw] h-[41px] border-[1px] border-[#231414D4]"></input>
            <Button
              initial={{ backgroundColor: "#FB4A04", color: "#fff" }}
              whileHover={{
                scale: 1.02,
                backgroundColor: "#ffffff",
                border: "3px solid #FB4A04",
                color: "#FB4A04",
              }}
              style={{
                borderRadius: "0px",
                fontSize: "12px",
                minWidth: "150px",
              }}
              width={"6.858789625360231vw"}
              height={"41px"}
              text={"Invite a Friend"}
            />
          </div>
        </div>
      </Modal>
      <div className="w-[calc(100vw - 100%)]">
        <nav
          style={{ boxShadow: "1px 1px 8px #00000015" }}
          className="fixed z-[1000] bg-[white] flex justify-between items-center w-[100%] xsm:flex-col"
        >
          <div className="flex items-center gap-[3.28vw] xsm:justify-between sm:justify-between xsm:w-full sm:w-full md:w-full">
            <div className="flex lg:w-[90px] flex-1 items-center gap-[3.28vw] w-full">
              <Link to="/">
                <img
                  src="./Logo.png"
                  className="ml-[8px] min-w-[80px]"
                  alt=""
                />
              </Link>
              <SearchBar whileHover={{ scale: 1.03 }} style={{ flex: "1" }} />
              <div
                onClick={() => setShowMobileNav(!showMobileNav)}
                className="xsm:flex sm:flex md:flex cursor-pointer relative z-[1000] lg:hidden xl:hidden 2xl:hidden flex-col items-center gap-[5px] mr-[10px]"
              >
                <div className="min-w-[29px] min-h-[5px] bg-[#473a3a] rounded-full"></div>
                <div className="min-w-[29px] min-h-[5px] bg-[#473a3a] rounded-full"></div>
                <div className="min-w-[29px] min-h-[5px] bg-[#473a3a] rounded-full"></div>
              </div>
            </div>
          </div>

          <ul className="xsm:hidden sm:hidden md:hidden text-[#493c3c] text-[clamp(12px,0.9221902017291066vw,16px)] font-[700] flex gap-[2.881844380403458vw] mr-[2vw]">
            <div className="flex justify-center items-center relative">
              <NavLink
                className="hover:text-[#FB4A04] cursor-pointer mx-4"
                to="/event-dashboard"
              >
                Dashboard
              </NavLink>
              <motion.li
                whileHover={{ color: "#FB4A04" }}
                onClick={() => setShowNavContext(!showNavContext)}
                className="cursor-pointer flex items-center gap-[0.4610951008645533vw]"
              >
                Event creators{" "}
                <img
                  style={showNavContext ? { transform: "rotate(180deg)" } : {}}
                  className="w-[12px]"
                  src="./3017945_arrow_declining_descending_down_downward_icon.svg"
                  alt=""
                />
              </motion.li>
              {showNavContext && (
                <div
                  style={{ boxShadow: "1px 1px 8px #00000030" }}
                  className="transition-all w-[181px] h-[170px] bg-white absolute z-[1] flex flex-col justify-around items-center py-[20px] top-full right-[-30%]"
                >
                  <NavLink onClick={createEvent} className="flex items-center ">
                    <li className="flex items-center gap-[0.4610951008645533vw]">
                      <p className="text-[#1977F3] font-[400] text-[14px] leading-[23px] text-center">
                        +
                      </p>
                      <motion.p
                        whileHover={{ color: "#FB4A04" }}
                        className="text-[#1977F3] font-[400] text-[14px] leading-[23px] text-center"
                      >
                        Create Events
                      </motion.p>
                    </li>
                  </NavLink>

                  <Link to="/likes" className="flex items-center">
                    <li className="flex items-center gap-[8px]">
                      <img src="./heart.png" alt="" />
                      <motion.p
                        whileHover={{ color: "#FB4A04" }}
                        className="text-[#473a3a] font-[400] text-[14px] leading-[23px] text-center"
                      >
                        Likes
                      </motion.p>
                    </li>
                  </Link>
                  <Link to="/ticket" className="flex items-center">
                    <li className="flex items-center gap-[0.4610951008645533vw] ">
                      <img src="./ticket.png" alt="" />
                      <motion.p
                        whileHover={{ color: "#FB4A04" }}
                        className="text-[#473a3a] font-[400] text-[14px] leading-[23px] text-center"
                      >
                        Ticket
                      </motion.p>
                    </li>
                  </Link>
                </div>
              )}
            </div>

            <li className="flex items-center gap-[0.4610951008645533vw] ">
              <img
                className="w-10 h-10 rounded-full"
                src={user.user.picture}
                alt={user.user.username}
              />
              <motion.p
                whileHover={{ color: "#FB4A04" }}
                className="text-[#473a3a] font-[400] text-[14px] leading-[23px] text-center"
              >
                {user.user.email}
              </motion.p>
            </li>
            <li className="relative flex items-center">
              <div
                className="cursor-pointer flex flex-col items-center gap-[5px]"
                onClick={() => {
                  setOpenContextMenu(!openContextMenu);
                }}
              >
                <div
                  style={
                    openContextMenu
                      ? { background: "#FB4A04" }
                      : { background: "#473a3a" }
                  }
                  className="min-w-[29px] min-h-[5px] rounded-full"
                ></div>
                <div
                  style={
                    openContextMenu
                      ? { background: "#FB4A04" }
                      : { background: "#473a3a" }
                  }
                  className="min-w-[29px] min-h-[5px] rounded-full"
                ></div>
                <div
                  style={
                    openContextMenu
                      ? { background: "#FB4A04" }
                      : { background: "#473a3a" }
                  }
                  className="min-w-[29px] min-h-[5px] rounded-full"
                ></div>
              </div>
              {openContextMenu && (
                <div
                  style={{ boxShadow: "1px 1px 8px #00000030" }}
                  className="transition-all w-[181px] h-[170px] bg-white absolute z-[1] flex flex-col justify-around py-[20px] top-full right-[-30%]"
                >
                  <Link to="/community">
                    <motion.p
                      whileHover={{ color: "#FB4A04" }}
                      className="text-[#473a3a] cursor-pointer font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[23px] text-center"
                    >
                      {" "}
                      Explore Community
                    </motion.p>
                  </Link>
                  <motion.p
                    onClick={() => setShowModal(true)}
                    whileHover={{ color: "#FB4A04" }}
                    className="text-[#473a3a] cursor-pointer font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[23px] text-center"
                  >
                    Invite a Friend
                  </motion.p>
                  <motion.p
                    whileHover={{ color: "#FB4A04" }}
                    className="text-[#473a3a] cursor-pointer font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[23px] text-center"
                  >
                    Explore Community Vibe
                  </motion.p>
                  <button onClick={logout}>
                    <motion.p
                      whileHover={{ color: "#FB4A04" }}
                      className="text-[#473a3a] cursor-pointer font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[23px] text-center"
                    >
                      Logout
                    </motion.p>
                  </button>
                </div>
              )}
            </li>
          </ul>
        </nav>

        <div className="relative top-[92px]">
          {showMobileNav && (
            <nav>
              <ul
                style={
                  showMobileNav
                    ? { maxHeight: "1000px" }
                    : { maxHeight: "0px", overflow: "hidden" }
                }
                className="transition-all xsm:flex sm:flex flex-col hidden text-[#493c3c] py-[10px] items-center text-[clamp(12px,0.9221902017291066vw,16px)] font-[700] gap-[5.244vw]"
              >
                <Link to="/create-event">
                  <li className="flex items-center gap-[8px]">
                    <p className="text-[#1977F3] font-[400] text-[14px] leading-[23px] text-center">
                      +
                    </p>
                    <motion.p
                      whileHover={{ color: "#FB4A04" }}
                      className="text-[#1977F3] font-[400] text-[14px] leading-[23px] text-center"
                    >
                      Create Events
                    </motion.p>
                  </li>
                </Link>
                <Link to="/likes">
                  <li className="flex items-center gap-[8px]">
                    <img src="./heart.png" alt="" />
                    <motion.p
                      whileHover={{ color: "#FB4A04" }}
                      className="text-[#473a3a] font-[400] text-[14px] leading-[23px] text-center"
                    >
                      Likes
                    </motion.p>
                  </li>
                </Link>
                <Link to="/ticket" className="flex items-center">
                  <li className="flex items-center gap-[0.4610951008645533vw] ">
                    <img src="./ticket.png" alt="" />
                    <motion.p
                      whileHover={{ color: "#FB4A04" }}
                      className="text-[#473a3a] font-[400] text-[14px] leading-[23px] text-center"
                    >
                      Ticket
                    </motion.p>
                  </li>
                </Link>
                <li className="flex items-center gap-[8px]">
                  <img src="./profile.png" alt="" />
                  <motion.p
                    whileHover={{ color: "#FB4A04" }}
                    className="text-[#473a3a] font-[400] text-[14px] leading-[23px] text-center"
                  ></motion.p>
                </li>
                <Link to="/community">
                  <motion.p
                    whileHover={{ color: "#FB4A04" }}
                    className="text-[#473a3a] cursor-pointer font-[400] text-[clamp(14px,0.9221902017291066vw,16px)] leading-[23px] text-center"
                  >
                    {" "}
                    Explore Community
                  </motion.p>
                </Link>
                <li className="flex items-center gap-[8px]">
                  <motion.p
                    onClick={() => setShowModal(true)}
                    whileHover={{ color: "#FB4A04" }}
                    className="text-[#473a3a] cursor-pointer font-[400] text-[14px] leading-[23px] text-center"
                  >
                    Invite a Friend
                  </motion.p>
                </li>
                <li className="flex items-center gap-[8px]">
                  <Link to="/customer">
                    <motion.p
                      whileHover={{ color: "#FB4A04" }}
                      className="text-[#473a3a] font-[400] text-[14px] leading-[23px] text-center"
                    >
                      Explore Community Vibe
                    </motion.p>
                  </Link>
                </li>

                <li className="flex items-center gap-[8px]">
                  <motion.p
                    whileHover={{ color: "#FB4A04" }}
                    className="text-[#473a3a] font-[400] text-[14px] leading-[23px] text-center"
                  >
                    {" "}
                    Logout{" "}
                  </motion.p>
                </li>
              </ul>
            </nav>
          )}

          <section className="dashboardBackground h-[778px] w-[100%] flex relative">
            <div className="flex flex-col justify-center absolute top-[332px] left-[65%] xsm:left-[10vw] sm:left-[50vw]">
              <h1 className="mb-[23px] eventTextFont w-[31.435158501440924vw] min-w-[260px] font-[400] text-[96px] leading-[113px] xsm:leading-[65px] sm:leading-[65px] md:leading-[65px] lg:leading-[70px] xl:leading-[80px] text-[#ffffff]">
                NOW <span className="eventTextFont text-[64px]">IS YOUR</span>{" "}
                TIME
              </h1>
              <Link to="/community">
                <Button
                  initial={{ backgroundColor: "#FB4A04", color: "#fff" }}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "#ffffff",
                    border: "3px solid #FB4A04",
                    color: "#FB4A04",
                  }}
                  style={{ minWidth: "240px" }}
                  width={"17.75vw"}
                  height={"61px"}
                  text={"Find your next Event"}
                />
              </Link>
            </div>
          </section>

          <div className="bg-white relative top-[-28px] p-[14px] eventDivBoxShadow w-[85.76368876080691vw] m-auto">
            <div className="pt-[5px] pb-[18px] pl-[10px] border-l-[2px] border-[#FB4A04]">
              <h2 className="mb-[8px] font-[700] text-[clamp(16px,1.38328530259366vw,24px)] leading-[40px] text-[#473a3a]">
                Do events help you find connection?
              </h2>
              <p className="font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] w-[100%] leading-[26px] text-[#473a3a]">
                Help us understand how attending events contributes to building
                social connection by taking a short survey before and after your
                next event.
              </p>
            </div>
          </div>

          <section>
            <div className="flex flex-col justify-center items-center mt-[115px]">
              <h2 className="font-[700] text-[clamp(20px,2.07492795389049vw,36px)] leading-[58.64px] text-[#473a3a]">
                Check out trending categories
              </h2>
              <hr className="mt-[23px] w-[232px] !h-[2px] border-[#FB4A04] !p-0"></hr>
            </div>
          </section>
          
          <section className='mt-[160px] xsm:w-full sm:w-full md:w-full lg:w-full m-auto w-full'>
                    <EventsCards mainText='Christmas🎅'  />
            </section>

          <section className="w-[100%] mt-[160px]">
            <EventsCards
              mainText="Pop Culture"
            />
          </section>

          <section className="w-[100%] mt-[160px]">
            <EventsCards mainText="Horror"  />
          </section>

 

          <section className="w-[100%] mt-[93px]">
            <EventsCards mainText="Festivals"  />
          </section>

          <section className="w-[100%] mt-[93px]">
            <EventsCards mainText="Electronic" />
          </section>


          <div className="mt-[240px] xsm:mt-[160px] sm:mt-[180px]">
            <Footer showFooterHeaders={false} />
          </div>
        </div>
      </div>
    </>
  );
}
