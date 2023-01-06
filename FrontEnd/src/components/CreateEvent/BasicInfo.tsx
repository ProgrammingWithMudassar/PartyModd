import React, { useEffect, useState } from "react";
import Button from "../General/Button";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

export default function BasicInfo({}: Props) {
  const navigate = useNavigate();
  const { eventID } = useParams();
  const [startDate, setStartDate] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");

  const [endDate, setEndDate] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");

  const [eventDetail, setEventDetail] = useState({
    title: "",
    organiser: "",
    type: "",
    category: "",
    tags: "",
    location: {
      name: "",
      latitude: 0,
      longitude: 0,
    },
  });
  //This is for getting from server resp.data, for response update
  const [getDTfromResp, setGetDTfromResp] = useState({
    startDate: "",
    endDate: "",
  });

  //This is for conversion-------------------------
  const [eventDateObj, setEventDateObj] = useState({
    eventStartDate: "",
    eventStartTime: "",
    eventEndDate: "",
    eventEndTime: "",
  });

  console.log("EVEN date obj", eventDateObj);
  const handleEventDateObj = (e: any) => {
    setEventDateObj({
      ...eventDateObj,
      [e.target.name]: e.target.value,
    });
  };
  // ------------------------------

  const handleInput = (e: any) => {
    setEventDetail({
      ...eventDetail,
      [e.target.name]: e.target.value,
    });
  };

  const handleLocationChange = (e: any) => {
    setEventDetail({
      ...eventDetail,
      location: {
        ...eventDetail.location,
        [e.target.name]: e.target.value,
      },
    });
  };

  useEffect(() => {
    const getEventDataforEach = async () => {
      const resp = await axios.put(
        `http://localhost:8000/events/single-event/${eventID}`
      );

      console.log("resp of Get Event Data for each", resp.data);
      setGetDTfromResp({
        startDate: resp.data.startDate,
        endDate: resp.data.endDate,
      });

      setEventDetail({
        title: resp.data.title,
        organiser: resp.data.organiser,
        type: resp.data.type,
        category: resp.data.category,
        tags: resp.data.tags,
        location: {
          name: resp.data.location.name,
          latitude: resp.data.location.latitude,
          longitude: resp.data.location.longitude,
        },
      });
    };

    getEventDataforEach();
  }, [eventID]);

  useEffect(() => {
    console.log("YES");

    const StartdateTimeString = getDTfromResp?.startDate;
    setStartDate(moment(StartdateTimeString).format("YYYY-MM-DD")); // "2023-01-01"
    setStartTime(moment(StartdateTimeString).format("h:mm A")); // "6:00 AM"

    const EnddateTimeString = getDTfromResp?.endDate;
    setEndDate(moment(EnddateTimeString).format("YYYY-MM-DD"));
    setEndTime(moment(EnddateTimeString).format("h:mm A"));
  }, [getDTfromResp, eventDateObj]);

  // Default value

  const BasicInfo = async () => {

    try{
      console.log({
        ...eventDetail,
        startDate: startDate,
        startTime: startTime,
        endDate: endDate,
        endTime: endTime,
      });
      const resp = await axios.put(
        `http://localhost:8000/events/create-event/basic-info/${eventID}`,
        {
          ...eventDetail,
          eventStartDate: eventDateObj.eventStartDate,
          eventStartTime: eventDateObj.eventStartTime,
          eventEndDate: eventDateObj.eventEndDate,
          eventEndTime: eventDateObj.eventEndTime,
        }
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

      navigate(`/create-event/detail/${eventID}`)


    }catch(err){
      toast.error(err.response.data.message, {
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

  return (
    <div>
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
      <div className="w-[50.72161383285302vw] xsm:w-[90vw] sm:w-[80vw] m-auto divide-y-2">
        <div className="mt-[44px]">
          <div className="flex gap-[25px] items-center">
            <img src="./createEvent1.svg" alt="" />

            <h2 className="font-[700] text-[24px] leading-[39.09px] text-[#231414D4]">
              Basic Info
            </h2>

          </div>
          <div className="ml-[75px]">
            <p className="font-[400] text-[14px] leading-[22.8px] text-[#231414D4]">
              Name your event and tell event-goers why they should come. Add
              details that highlight what makes it unique.

            </p>
            <textarea
              className="w-[42.305475504322764vw] xsm:w-[100%] sm:w-[90%] h-[58px] border-[1px] border-b-0 border-[#231414D4] font-[400] text-[12px] leading-[19.55px] text-[#231414D4] indent-[16px] pt-[8px] outline-none mt-[28px]"
              placeholder="Event Title"
              name="title"
              onChange={handleInput}
              value={eventDetail.title}
            ></textarea>
            <textarea
              className="w-[42.305475504322764vw] xsm:w-[100%] sm:w-[90%] h-[58px] border-[1px] border-b-0 border-[#231414D4] font-[400] text-[12px] leading-[19.55px] text-[#231414D4] indent-[16px] pt-[8px] outline-none mt-[72px]"
              placeholder="Organiser"
              name="organiser"
              onChange={handleInput}
              value={eventDetail.organiser}
            ></textarea>
            <div className="w-[27.723342939481267vw] xsm:w-[100%] sm:w-[90%] mt-[18px]">
              <p className="font-[400] text-[10px] leading-[16.29px] text-[#231414D4]">
                This profile describes a unique organizer and shows all of the
                events on one page
              </p>
              <div className="w-[100%] flex gap-[1.2680115273775217vw] xsm:gap-[20px] sm:gap-[20px] mt-[28px] xsm:flex-col sm:flex-col ">
                <select
                  onChange={handleInput}
                  value={eventDetail.type}
                  name="type"
                  className="pl-[18px] outline-none flex-1 min-h-[58px] border-[1px] border-b-0 border-[#231414D4] font-[400] text-[12px] leading-[19.55px]"
                >
                  <optgroup label="Type">
                    <option>Horror</option>
                    <option>Fun</option>
                  </optgroup>

                </select>

                <select
                  onChange={handleInput}
                  value={eventDetail.category}
                  name="category"
                  className="pl-[18px] outline-none flex-1 min-h-[58px] border-[1px] border-b-0 border-[#231414D4] font-[400] text-[12px] leading-[19.55px]"
                >
                  <optgroup label="category">
                    <option>Christmas🎅</option>
                    <option>Horror</option>
                    <option>Electronic</option>
                    <option>Pop Culture</option>
                    <option>Music Venues</option>
                    <option>Miami</option>
                  </optgroup>
                </select>
              </div>
            </div>

            <div className="mt-[22px]">
              <h2 className="font-[400] text-[24px] leading-[39.09px] text-[#231414D4] mb-[8px]">
                Tags
              </h2>
              <p className="font-[700] text-[14px] leading-[22.8px] text-[#231414D4]">
                Improve discoverability of your event by adding tags relevant to
                the subject matter
              </p>
              <div className="flex gap-[1.1527377521613833vw] xsm:gap-[20px] sm:gap-[20px] pt-[44px] xsm:flex-col sm:flex-col">
                <textarea
                  className="w-[35.04322766570605vw] xsm:w-[100%] sm:w-[90%] h-[58px] border-[1px] border-b-0 border-[#231414D4] font-[400] text-[12px] leading-[19.55px] text-[#231414D4] indent-[16px] pt-[8px] outline-none"
                  placeholder="Organiser"
                  name="tags"
                  onChange={handleInput}
                  value={eventDetail.tags}
                ></textarea>
                <Button
                  whileHover={{
                    background: "#FB4A04",
                    color: "white",
                    scale: 1.03,
                  }}
                  width="106px"
                  height="58px"
                  text="Add"
                  style={{
                    border: "1px solid #231414D4",
                    borderRadius: "0px",
                    background: "transparent",
                    color: "#231414D4",
                    fontSize: "14px",
                    lineHeight: "22.8px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[44px] pt-[62px]">
          <div className="flex gap-[25px] items-center">
            <img src="./map-pin.svg" alt="" />
            <h2 className="font-[700] text-[24px] leading-[39.09px] text-[#231414D4]">
              Location
            </h2>
          </div>
          <div className="ml-[75px]">
            <p className="font-[400] text-[14px] leading-[22.8px] text-[#231414D4]">
              Help people in the area discover your event and let attendees know
              where to show up.
            </p>
            {/* Google Places Start */}

            {/* Google Places End */}

            {/* testinputs */}
            <textarea
              className="w-[35.04322766570605vw] xsm:w-[100%] sm:w-[90%] h-[58px] border-[1px] border-b-0 border-[#231414D4] font-[400] text-[12px] leading-[19.55px] text-[#231414D4] indent-[16px] pt-[8px] outline-none"
              placeholder="Location Name"
              name="name"
              onChange={handleLocationChange}
              value={eventDetail.location.name}
            ></textarea>

            <textarea
              className="w-[35.04322766570605vw] xsm:w-[100%] sm:w-[90%] h-[58px] border-[1px] border-b-0 border-[#231414D4] font-[400] text-[12px] leading-[19.55px] text-[#231414D4] indent-[16px] pt-[8px] outline-none"
              placeholder="latitude"
              name="latitude"
              onChange={handleLocationChange}
              value={eventDetail.location.latitude}
            ></textarea>
            <textarea
              className="w-[35.04322766570605vw] xsm:w-[100%] sm:w-[90%] h-[58px] border-[1px] border-b-0 border-[#231414D4] font-[400] text-[12px] leading-[19.55px] text-[#231414D4] indent-[16px] pt-[8px] outline-none"
              placeholder="longitude"
              name="longitude"
              onChange={handleLocationChange}
              value={eventDetail.location.longitude}
            ></textarea>

            {/* <div className="mt-[22px]">
              <div className="flex gap-[1.1527377521613833vw] pt-[37px] xsm:flex-col sm:flex-col">
                <Button
                  whileHover={{
                    background: "#FB4A04",
                    color: "white",
                    scale: 1.03,
                  }}
                  width="13.314121037463977vw"
                  height="58px"
                  text="Venue"
                  style={{
                    minWidth: "213px",
                    border: "1px solid #231414D4",
                    borderRadius: "0px",
                    background: "transparent",
                    color: "#231414D4",
                    fontSize: "14px",
                    lineHeight: "22.8px",
                  }}
                />
                <Button
                  whileHover={{
                    background: "#FB4A04",
                    color: "white",
                    scale: 1.03,
                  }}
                  width="13.314121037463977vw"
                  height="58px"
                  text="online events "
                  style={{
                    minWidth: "213px",
                    border: "1px solid #231414D4",
                    borderRadius: "0px",
                    background: "transparent",
                    color: "#231414D4",
                    fontSize: "14px",
                    lineHeight: "22.8px",
                  }}
                />
                <Button
                  whileHover={{
                    background: "#FB4A04",
                    color: "white",
                    scale: 1.03,
                  }}
                  width="13.314121037463977vw"
                  height="58px"
                  text="To be annouced"
                  style={{
                    minWidth: "213px",
                    border: "1px solid #231414D4",
                    borderRadius: "0px",
                    background: "transparent",
                    color: "#231414D4",
                    fontSize: "14px",
                    lineHeight: "22.8px",
                  }}
                />
              </div>
              <p className="font-[700] text-[14px] leading-[22.8px] text-[#231414D4] mb-[69px] mt-[18px]">
                Online events have unique event pages where you can add links to
                livestreams and more
              </p>
            </div> */}
          </div>
        </div>
        <div className="mt-[44px] pt-[62px]">
          <div className="flex gap-[25px] items-center">
            <img src="./clock.svg" alt="" />
            <h2 className="font-[700] text-[24px] leading-[39.09px] text-[#231414D4]">
              Date and time
            </h2>
          </div>
          <div className="ml-[75px]">
            <p className="font-[400] text-[14px] leading-[22.8px] text-[#231414D4]">
              Tell event-goers when your event starts and ends so they can make
              plans to start
            </p>
            {/* <div className="mt-[22px]">
              <div className="flex gap-[1.1527377521613833vw] pt-[37px] xsm:flex-col sm:flex-col">
                <Button
                  whileHover={{
                    background: "#FB4A04",
                    color: "white",
                    scale: 1.03,
                  }}
                  width="13.371757925072046vw"
                  height="58px"
                  text="Single events"
                  style={{
                    minWidth: "213px",
                    border: "1px solid #231414D4",
                    borderRadius: "0px",
                    background: "transparent",
                    color: "#231414D4",
                    fontSize: "14px",
                    lineHeight: "22.8px",
                  }}
                />
                <Button
                  whileHover={{
                    background: "#FB4A04",
                    color: "white",
                    scale: 1.03,
                  }}
                  width="13.371757925072046vw"
                  height="58px"
                  text="Single events "
                  style={{
                    minWidth: "213px",
                    border: "1px solid #231414D4",
                    borderRadius: "0px",
                    background: "transparent",
                    color: "#231414D4",
                    fontSize: "14px",
                    lineHeight: "22.8px",
                  }}
                />
              </div>
              <p className="font-[700] text-[14px] leading-[22.8px] text-[#231414D4] mb-[69px] mt-[18px]">
                Single event happens once and can last multiple days
              </p>
            </div> */}

            <div className="flex gap-[24px] mt-[36px] xsm:flex-col sm:flex-col">
              <div className="py-[10px] flex flex-col  pl-[18px] outline-none flex-1 h-[58px] border-[1px] border-[#231414D4] font-[400] text-[12px] leading-[19.55px]">
                <label className="font-[700] text-[14px] leading-[22.8px] text-[#231414D4]">
                  Event start date
                </label>
                <input
                  onChange={handleEventDateObj}
                  value={
                    eventDateObj.eventStartDate
                      ? eventDateObj.eventStartDate
                      : startDate
                  }
                  name="eventStartDate"
                  type="date"
                  placeholder="yyyy-mm-dd"
                  min="1997-01-01"
                  max="2030-12-31"
                ></input>
              </div>
              <div className="py-[10px] flex flex-col pl-[18px] outline-none flex-1 h-[58px] border-[1px] border-[#231414D4] font-[400] text-[12px] leading-[19.55px]">
                <label className="font-[700] text-[14px] leading-[22.8px] text-[#231414D4]">
                  Start Time
                </label>
                <input
                  onChange={handleEventDateObj}
                  value={
                    eventDateObj.eventStartTime
                      ? eventDateObj.eventStartTime
                      : startTime
                  }
                  name="eventStartTime"
                  type="time"
                ></input>
              </div>
            </div>
            <div className="flex gap-[24px] mt-[24px] xsm:flex-col sm:flex-col">
              <div className="py-[10px] flex flex-col pl-[18px] outline-none flex-1 h-[58px] border-[1px] border-[#231414D4] font-[400] text-[12px] leading-[19.55px]">
                <label className="font-[700] text-[14px] leading-[22.8px] text-[#231414D4]">
                  Event End date
                </label>
                <input
                  onChange={handleEventDateObj}
                  value={
                    eventDateObj.eventEndDate
                      ? eventDateObj.eventEndDate
                      : endDate
                  }
                  name="eventEndDate"
                  type="date"
                ></input>
              </div>

              <div className="py-[10px] flex flex-col pl-[18px] outline-none flex-1 h-[58px] border-[1px] border-[#231414D4] font-[400] text-[12px] leading-[19.55px]">
                <label className="font-[700] text-[14px] leading-[22.8px] text-[#231414D4]">
                  End Time
                </label>
                <input
                  onChange={handleEventDateObj}
                  value={
                    eventDateObj.eventEndTime
                      ? eventDateObj.eventEndTime
                      : endTime
                  }
                  name="eventEndTime"
                  type="time"
                ></input>
              </div>
            </div>

            <div className="flex items-center mt-[30px]">
              <input type="checkbox"></input>
              <label className="font-[700] text-[14px] leading-[22.8px] text-[#231414D4]">
                Display start time
              </label>
            </div>
            <div className="flex items-center mt-[17px]">
              <input type="checkbox"></input>
              <label className="font-[700] text-[14px] leading-[22.8px] text-[#231414D4]">
                Display End time
              </label>
            </div>
          </div>
        </div>
        <div className="mt-[44px] pt-[62px] flex justify-end mb-[211px]">
          <div className="flex gap-[20px] xsm:flex-col sm:flex-col">
            <Button
              whileHover={{
                background: "#FB4A04",
                color: "white",
                scale: 1.03,
              }}
              width="13.198847262247838vw"
              height="65px"
              text="Cancel"
              style={{
                minWidth: "213px",
                background: "transparent",
                color: "#FB4A04",
                border: "1px solid #231414D4",
                borderRadius: "10px",
                fontSize: "24px",
                lineHeight: "39.09px",
              }}
            />
            <Button
              whileHover={{
                background: "white",
                color: "#FB4A04",
                scale: 1.03,
                border: "1px solid #FB4A04",
              }}
              width="13.198847262247838vw"
              height="65px"
              text="Save & Continue"
              style={{
                minWidth: "213px",
                borderRadius: "10px",
                fontSize: "24px",
                lineHeight: "39.09px",
              }}
              onClick={BasicInfo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
