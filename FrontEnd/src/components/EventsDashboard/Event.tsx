import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../General/Button'
import SearchBar from '../General/SearchBar'
import TableRow from './TableRow'
import axios from 'axios'
import { useEvent } from '../../Context/EventProvider'

type Props = {}

const data: any = [
  {
    id: 1,
    events: ["Nov", "18"],
    img: "./tableDefault.svg",
    sold: "0/100",
    gross: "$000",
    status: "Draft"
  },
  {
    id: 2,
    events: ["Nov", "18"],
    img: "./upcommingEvent.svg",
    sold: "50/100",
    gross: "$1000",
    status: "Published"
  },
]

export default function Events({ }: Props) {
  const {allEvents, setRefresh, refresh} = useEvent();

  useEffect(()=>{

    refresh == true? setRefresh(false) : setRefresh(true);

  },[])


  return (

    <div className='w-full xsm:w-[75.93659942363112vw] sm:w-[75.93659942363112vw]'>
      <div className='flex gap-[20px] xsm:flex-col sm:flex-col'>
        <SearchBar whileHover={{scale:1.03}} style={{ width: "27.780979827089336vw", height: "47px", borderRadius: "0px", border: "3px solid #f6ccbb", minWidth: "240px" }} />
        <Link to={"/create-event"}>
          <Button initial={{scale:1.03,background:"#FB4A04",border:"0px solid #fff",color:"#fff"}} whileHover={{scale:1.03,background:"#fff",border:"1px solid #FB4A04",color:"#FB4A04"}} width='150px' height='47px' text="Create Event" style={{ borderRadius: "0px", fontSize: "16px" }}></Button>
        </Link>
      </div>
     
      <div className='w-full whitespace-nowrap xsm:overflow-auto sm:overflow-auto md:overflow-auto'>

        <table className="table-auto w-[78.32853025936599vw] min-w-[500px] mt-[83px] relative z-10">
          
          <thead className='bg-[#fed4c3]'>
            <tr className='text-left'>
              <th className='py-[17px]'>#</th>
              <th className='py-[17px]'>Event Image</th>
              <th className='py-[17px]'>Name</th>

              <th className='py-[17px]'>Sold</th>
              <th className='py-[17px]'>Gross</th>
              <th className='py-[17px]'>Status</th>
              <th className='py-[17px]'>Actions</th>
            </tr>
          </thead>
          <tbody className='divide-y-2 w-[78.32853025936599vw]'>
            {allEvents.length > 0 && allEvents.map((d: any, index: any) => {
              return (
                <TableRow data={d}  index={index}  />
              )
            })
            }
          </tbody>
        </table>
      </div>
      {allEvents.length === 0 &&
        <div className='w-[78.32853025936599vw] flex justify-center items-center'>
          <div className='mt-[129px] flex flex-col justify-center items-center'>
            <img src='noData.png' alt='' />
            <p className='mt-[32px] font-[400] text-[16px] leading-[26px] text-[#949494]'>No Event Created Yet</p>
          </div>
        </div>
      }
    </div>
  )
}