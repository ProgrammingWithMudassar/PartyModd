import React, { useState, useEffect } from "react";
import Button from "../General/Button";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import { FileUploader } from "react-drag-drop-files";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

function createObjectURLs(files: FileList | File[]) {
  const objectURLs = [];
  for (let i = 0; i < files.length; i++) {
    objectURLs.push(URL.createObjectURL(files[i]));
  }
  return objectURLs;
}

export default function Detail({}: Props) {
  const navigate = useNavigate();
  const { eventID } = useParams();
  const fileTypes = ["JPEG", "PNG", "GIF"];
  
  const [summary, setSummary] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [eventImage, setEventImage] = useState<any>(null);
  const [eventImages, setEventImages] = useState<string[]>([]);

  const [eventImagePreview, setEventImagePreview] = useState<string>("");
  const [eventImagesPreview, setEventImagesPreview] = useState<string[]>([]);
  const [ImageToUpdate, setImageToUpdate] = useState("");
  const [ImagesToUpdate, setImagesToUpdate] = useState([]);
  console.log(eventImage);


  const handleChange = (e: any) => {

    if (e.target.name === "summary") {

      setSummary(e.target.value);
    } else if (e.target.name === "description") {

      setDescription(e.target.value);
    }

  };

  const HandleChangeImage = (eventSingleImage: any) => {
    setEventImage(eventSingleImage);
  };
  console.log("Event Image AKA single Image", eventImage);
  console.log("Event Images AKA Multiple Images", eventImages);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Create FormData object to send image(s) to backend
    const formData = new FormData();
    formData.append("summary", summary);
    formData.append("description", description);
    formData.append("eventImage", eventImage);
    for (let i = 0; i < eventImages.length; i++) {
      formData.append("eventImages", eventImages[i]);
    }

    try{
      const resp = await axios.put(
        `http://localhost:8000/events/create-event/details/${eventID}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
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

      navigate(`/create-event/online-page-event/${eventID}`)


    }catch(err){
      console.log(err);

    }

  };

  const removeEventImage = () => {
    setEventImage(null);
    setEventImagePreview("");
  };

  useEffect(() => {
    if (eventImage) {
      const objectUrl = URL.createObjectURL(eventImage);
      setEventImagePreview(objectUrl);
    }
  }, [eventImage]);

  const handleChangeImages = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      setEventImages(files);
      setImagesToUpdate([])
      setEventImagesPreview(createObjectURLs(files));
    }
  };

  useEffect(() => {
    const getEventDataforEach = async () => {
      const resp = await axios.put(
        `http://localhost:8000/events/single-event/${eventID}`
      );

      console.log("resp of Get Event Data for each", resp.data);
      setImagesToUpdate(resp.data?.eventImages)
      setImageToUpdate(resp.data?.eventImage)

      setSummary(resp.data?.summary);
      setDescription(resp.data?.description);  
    };

    getEventDataforEach();
  }, [eventID]);

  return (
    
    <div className="w-[53.92161383285302vw] xsm:w-[90vw] sm:w-[80vw] m-auto divide-y-2">
      <div>
        <div className="mt-[44px]">
          <div className="flex gap-[25px] items-center">
            <img src="/ei_camera.svg" alt="" />
            <h2 className="font-[700] text-[24px] leading-[39.09px] text-[#231414D4]">
              Upload event Image
            </h2>
          </div>

          <div className="ml-[75px] xsm:ml-0 w-[49.56772334293948vw] xsm:w-[100%] sm:w-[80%] bg-[#f0f0f0] flex flex-col justify-center items-center mt-[46px]">
            {eventImagePreview || ImageToUpdate ? (
              <div className="w-auto h-40">
                <img
                  className="w-full h-full rounded]"
                  src={ eventImagePreview? `${eventImagePreview}` : `http://localhost:8000/storage/${ImageToUpdate}`}
                  alt=""
                />
              </div>
            ) : (
              <img className="mt-[106px]" src="/bx_image.svg" alt="" />
            )}

            <p className="mt-[24px] font-[400] text-[16px] leading-[26.06px] text-[#231414D4]"></p>
            <FileUploader
              handleChange={HandleChangeImage}
              name="eventSingleImage"
            />
            <p>
              {eventImage
                ? `Image name: ${eventImage.name}`
                : "no files uploaded yet"}
            </p>
            <div className="flex gap-[2.881844380403458vw] xsm:flex-col sm:flex-col mt-[34px] mb-[10px]">
              {/* Remove button */}
              {!eventImagePreview && !eventImage ? null : (
                <Button
                  whileHover={{
                    background: "#FB4A04",
                    color: "white",
                    scale: 1.03,
                  }}
                  width="100px"
                  height="40px"
                  text="Remove"
                  style={{
                    border: "1px solid #231414D4",
                    borderRadius: "0px",
                    background: "transparent",
                    color: "#231414D4",
                    fontSize: "14px",
                    lineHeight: "22.8px",
                  }}
                  onClick={removeEventImage}
                />
              )}
            </div>
          </div>
        </div>
        <ul className="flex gap-[38px] xsm:gap-[10px] sm:gap-[10px] ml-[90px] xsm:ml-[20px] mb-[61px] xsm:flex-col sm:flex-col">
          <li className="list-disc font-[400] text-[12px] leading-[19.55px] text-[#231414D4]">
            Recommended Image size 000px by 0000px
          </li>
          <li className="list-disc font-[400] text-[12px] leading-[19.55px] text-[#231414D4]">
            Maximum Size 30mb{" "}
          </li>
          <li className="list-disc font-[400] text-[12px] leading-[19.55px] text-[#231414D4]">
            Supported images are JPEG and PNG
          </li>
        </ul>
        <div>
          <div className="flex gap-[25px] items-center">
            <img src="/ei_camera.svg" alt="" />
            <h2 className="font-[700] text-[24px] leading-[39.09px] text-[#231414D4]">
              Upload Gallery Images
            </h2>
          </div>
          <input
            type="file"
            onChange={handleChangeImages}
            name="eventImages"
            multiple
          />
        </div>
      </div>

      <div className="overflow-x-scroll">
        <div className="flex ">
          {
            ImagesToUpdate? ImagesToUpdate.map((imageUrl, index)=>(
 
                <div className="p-4">
              <img
                className="w-64 h-full"
                src={`http://localhost:8000/storage/${imageUrl}`}
                key={index}
                alt={`Image ${index}`}
              />
               </div>
            )) : ""
          }

          {
                  eventImagesPreview? eventImagesPreview.map((objectURL, index) => (

                
                    <div className="p-4">
                  <img
                    className="w-64 h-full"
                    src={objectURL}
                    key={index}
                    alt={`Image ${index}`}
                  />
                   </div>
                )):  ""

          }
            
         
        </div>
      </div>

      <div>
        <div className="mt-[44px]">
          <div className="flex gap-[25px] items-center">
            <img src="/ooui_text-summary-ltr.svg" alt="" />
            <h2 className="font-[700] text-[24px] leading-[39.09px] text-[#231414D4]">
              Summary
            </h2>
          </div>
          <div className="ml-[75px] xsm:ml-0">
            <p>
              Tell attendees what your event is about in a few words. Attendees
              will see this when searching for events and at the top of your
              event page (140 characters max).
            </p>
            <textarea
              className="w-[49.56772334293948vw] xsm:w-[100%] sm:w-[80%] h-[83px] border-[1px] border-[#666666B2] font-[400] text-[12px] leading-[19.55px] text-[#231414D4] indent-[16px] pt-[8px] outline-none"
              placeholder=""        
              required
              onChange={handleChange}
              value={summary}
              name="summary"
            ></textarea>
          </div>
          <div className="ml-[75px] xsm:ml-0">
            <h2 className="font-[700] text-[24px] leading-[39.09px] text-[#231414D4]">
              Description
            </h2>
            <p>
              Add more details to your event like your schedule, sponsors, or
              featured guests. Learn more.
            </p>
            <textarea
              className="w-[49.56772334293948vw] xsm:w-[100%] sm:w-[80%] h-[83px] border-[1px] border-[#666666B2] font-[400] text-[12px] leading-[19.55px] text-[#231414D4] indent-[16px] pt-[8px] outline-none"
              placeholder=""
              onChange={handleChange}
              value={description}
              name="description"
              required
            ></textarea>
          </div>
          <div className="ml-[75px] xsm:ml-0 flex gap-[2.881844380403458vw] xsm:flex-col sm:flex-col mt-[34px] mb-[90px]">
            {/* <Button
              whileHover={{
                background: "#FB4A04",
                color: "white",
                scale: 1.03,
              }}
              width="154px"
              height="43px"
              text="Add Image"
              style={{
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
              width="154px"
              height="43px"
              text="Add Text"
              style={{
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
              width="154px"
              height="43px"
              text="Add video"
              style={{
                border: "1px solid #231414D4",
                borderRadius: "0px",
                background: "transparent",
                color: "#231414D4",
                fontSize: "14px",
                lineHeight: "22.8px",
              }}
            /> */}
          </div>
        </div>
        <div className="ml-[75px] xsm:w-[100%] xsm:items-center xsm:ml-0 flex gap-[20px] justify-end mb-[203px] xsm:flex-col-reverse sm:flex-col-reverse">
          <Button
            whileHover={{ background: "#FB4A04", color: "white", scale: 1.03 }}
            width="229px"
            height="65px"
            text="Back"
            style={{
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
            width="229px"
            height="65px"
            text="Save & Continue"
            style={{
              borderRadius: "10px",
              fontSize: "24px",
              lineHeight: "39.09px",
            }}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
