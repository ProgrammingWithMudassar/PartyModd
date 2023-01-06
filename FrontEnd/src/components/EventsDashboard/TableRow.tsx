import React, { useState } from "react";
import { motion } from "framer-motion";
import { useEvent } from "../../Context/EventProvider";
import {toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


type Props = {};

export default function TableRow({ data, index }: any) {
  const [contextMenu, setContextMenu] = useState<boolean>(false);
  const { deleteEvent, setRefresh, refresh} = useEvent();

  const  navigate = useNavigate();

  const onClickDelete = ()=> {
    deleteEvent(data._id);
    refresh == true? setRefresh(false) : setRefresh(true);
    toast.success("Event Deleted");
    setContextMenu(false)

  }
  
  return (
    <tr className="py-[15px]">
      <td className="w-[2%]">{index + 1}</td>
      <td className="w-32 h-32">
        {data.eventImage ? (
          <img
            className="w-full h-full rounded"
            src={`http://localhost:8000/Storage/${data.eventImage}`}
            alt={data.eventImage}
          />
        ) : (
          <img
            className="w-full h-full rounded"
            src="https://via.placeholder.com/64"
            alt={data.eventImage}
          />
        )}
      </td>

      <td className="w-[15%]">
        {" "}
        <span> {data.title || "Untitled"}</span>
      </td>
      <td>{data.sold || "0"}</td>
      <td>{data.gross || "$ 0"}</td>
      <td>{data.status}</td>
      <td className="relative">
        <div
          className="cursor-pointer flex flex-col gap-[5px] justify-center items-start relative z-[10]"
          onClick={() => setContextMenu(!contextMenu)}
        >
          <div className="min-w-[4px] min-h-[4px] bg-[#473a3a] rounded-full"></div>
          <div className="min-w-[4px] min-h-[4px] bg-[#473a3a] rounded-full"></div>
          <div className="min-w-[4px] min-h-[4px] bg-[#473a3a] rounded-full"></div>
        </div>
        {contextMenu && (
          <motion.div
            initial={{ maxHeight: 0 }}
            animate={{ maxHeight: "1000px" }}
            style={{ boxShadow: "1px 2px 8px #00000030" }}
            className="absolute bg-white z-[2000]  w-[165px] h-[139px] right-[20%] "
          >
            <div className="flex flex-col justify-around m-auto w-[80%] h-full">
              <motion.p
                whileHover={{ color: "#FB4A04" }}
                className="font-[400] cursor-pointer text-[16px] leading-[26px] text-[black]"
              >
                Copy Event url
              </motion.p>
              <motion.p
                onClick={()=>{navigate(`/event-description/${data._id}`)}}

         
                whileHover={{ color: "#FB4A04" }}
                className="font-[400] cursor-pointer text-[16px] leading-[26px] text-[black]"
              >
                View
              </motion.p>

              <motion.p
                onClick={()=>{navigate(`/create-event/basic-info/${data._id}`)}}
                whileHover={{ color: "#FB4A04" }}
                className="font-[400] cursor-pointer text-[16px] leading-[26px] text-[black]"
              >
                Edit
              </motion.p>
              <motion.p
              onClick={onClickDelete}
              whileHover={{ color: "#FB4A04" }}
                className="font-[400] cursor-pointer text-[16px] leading-[26px] text-[black]"
              >
                delete
              </motion.p>
            </div>
          </motion.div>
        )}
      </td>
    </tr>
  );
}
