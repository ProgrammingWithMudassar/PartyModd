import React, { useState, useEffect } from "react";
import Modal from "../General/Modal";
import axios from "axios";
import { useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

export default function Publish({}: Props) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [singleEvent, setSingleEvent] = useState("");
  const { eventID } = useParams();
  const [publicInput, setPublic] = useState("");
  const [privateInput, setPrivate] = useState("");

  const [startDateAndTime, setStartDateAndTime] = useState("");

  const [formData, setFormData] = useState({});
  const [radioState, setRadioState] = useState("public");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "state") {
      setRadioState(value);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  useEffect(() => {
    const getEventDataforEach = async () => {
      const resp = await axios.put(
        `http://localhost:8000/events/single-event/${eventID}`
      );
      setSingleEvent(resp.data);
      console.log("resp of Get Event Data for each", resp.data);
    };

    getEventDataforEach();
  }, [eventID]);

  useEffect(() => {
    let sDT = new Date(singleEvent?.startDate);
    let formattedStartDate = sDT.toLocaleString("en-US", { timeZone: "UTC" });
    setStartDateAndTime(formattedStartDate);
  }, [singleEvent]);

  useEffect(() => {
    const publishEvent = async () => {
      // Submit formData to API here
      const data = {
        ...formData,
        eventView: radioState,
        status: "published",
      };
      console.log("State Data=> ", data);

      const resp = await axios.put(
        `http://localhost:8000/events/publish-event/${eventID}`
      );
      toast.success(resp.data.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    };
    publishEvent();
  }, [radioState]);

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Modal
        showModal={showModal}
        hideShowModalHandler={() => setShowModal(false)}
      >
        <div className="w-[63.7463976945245vw] xsm:w-[90vw] xsm:flex-col xsm:items-start xsm:justify-center xsm:gap-[15px] h-[77px] bg-white flex justify-between items-center px-[2.5%]">
          <p className="font-[700] text-[14px] text-[#231414D4] leading-[22.8px]">
            Please complete setup before publishing.
          </p>
          <div className="flex gap-[20px]">
            <p className="font-[700] text-[14px] text-[#1977F3] leading-[22.8px]">
              Complete setup
            </p>
            <img
              onClick={() => setShowModal(false)}
              className="cursor-pointer"
              src={`http://localhost:8000/Storage/${singleEvent?.eventImage}`}
              alt=""
            />
          </div>
        </div>
      </Modal>
      <div className="w-[56.829971181556196vw] xsm:w-[90%] sm:w-[50%] m-auto mt-[66px]">
        <h1 className="font-[700] text-[32px] leading-[38.73px] text-[#231414D4]">
          Publish Events
        </h1>

        <div className="w-full bg-[#F5F5F5] h-[198px] flex mt-[66px] xsm:flex-col sm:flex-col xsm:h-auto sm:h-auto">
          <div className="w-[20.518731988472624vw] h-full bg-[#D9D9D9] flex justify-center items-center xsm:w-full sm:w-full">
            <img
              className="xsm:w-full sm:w-full"
              src={`http://localhost:8000/Storage/${singleEvent?.eventImage}`}
              alt=""
            />
          </div>
          <div className="flex-1 mx-[4%] divide-y-2">
            <div className="flex flex-col justify-around">
              <h2 className="mt-[20px] font-[700] text-[24px] text-[#231414D4] leading-[29.05px]">
                {singleEvent?.title}
              </h2>
              <p className="mt-[4px] font-[400] text-[16px] text-[#231414D4] leading-[19.36px]">
                {startDateAndTime}.
              </p>
              <div className="flex items-center mt-[37px]">
                <img src="/emojione-monotone_ticket.svg" alt="" />
                <p className="font-[400] text-[24px] text-[#231414D4] leading-[29.05px]">
                  {singleEvent?.TicketId?.length} /
                  <span className="font-[400] text-[16px] text-[#231414D4] leading-[19.36px]">
                    22
                  </span>
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <p className="font-[400] my-[10px] text-[16px] text-[#1977F3] text-center leading-[19.36px]">
                Preview
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[52px]">
          <h2 className="font-[700] text-[24px] leading-[29.05px] text-[#231414D4]">
            Who can see your events?
          </h2>
          <div className="flex gap-[10px] mt-[35px] items-center">
            <input
              className="min-w-[24px] min-h-[24px]"
              type="radio"
              name="state"
              value="public"
              checked={radioState === "public"}
              onChange={handleChange}
            ></input>
            <div className="flex flex-col">
              <p className="text-[14px] leading-[16.94px] text-[#473a3a] font-[400]">
                Public
              </p>
              <p className="text-[8px] leading-[16.94px] text-[#473a3a] font-[400]">
                Availiable on search for everyone
              </p>
            </div>
          </div>
          <div className="flex gap-[10px] mt-[24px] items-center">
            <input
              className="min-w-[24px] min-h-[24px]"
              type="radio"
              name="state"
              value="private"
              checked={radioState === "private"}
              onChange={handleChange}
            ></input>
            <div className="flex flex-col">
              <p className="text-[14px] leading-[16.94px] text-[#473a3a] font-[400]">
                Private
              </p>
              <p className="text-[8px] leading-[16.94px] text-[#473a3a] font-[400]">
                Availiable for specific people
              </p>
            </div>
          </div>
        </div>
        {/* <div className='mt-[70px]'>
                <h2 className='font-[700] text-[24px] leading-[29.05px] text-[#231414D4]'>When should your event be publish ?</h2>
                <div className='flex gap-[10px] mt-[35px]'>
                    <input name='whoCanSee1' className='min-w-[24px] min-h-[24px]' type='radio'></input>
                    <p className='text-[14px] leading-[16.94px] text-[#473a3a] font-[400]'>Public</p>
                </div>
                <div className='flex gap-[10px] mt-[24px]'>
                    <input name='whoCanSee1' className='min-w-[24px] min-h-[24px]' type='radio'></input>
                    <p className='text-[14px] leading-[16.94px] text-[#473a3a] font-[400]'>Private</p>
                </div>
            </div> */}

        <div className="flex gap-[20px] mt-[18px] mb-[152px] xsm:flex-col sm:flex-col">
          {/* <div className='relative w-[13.371757925072046vw] min-w-[170px] h-[51px] bg-[#F5F5F5] flex justify-center items-center gap-[43px]'>
                    <img className='absolute left-[10%]' src='/calendar.svg' alt=''></img>
                    <div className='flex flex-col items-center justify-center' onClick={()=>setShowModal(true)}>
                        <p className='font-[400] text-[14px] text-[#231414D4] leading-[22.8px]'>Publish</p>
                        <p className='font-[400] text-[14px] text-[#231414D4] leading-[22.8px]'>01/11/2022</p>
                    </div>
                </div> */}
          {/* <div className='w-[13.371757925072046vw] min-w-[170px] h-[51px] bg-[#F5F5F5] flex justify-center items-center gap-[43px]'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-[400] text-[14px] text-[#231414D4] leading-[22.8px]'>Time</p>
                        <p className='font-[400] text-[14px] text-[#231414D4] leading-[22.8px]'>00:00pm</p>
                    </div>
                </div> */}
        </div>
      </div>
    </>
  );
}
