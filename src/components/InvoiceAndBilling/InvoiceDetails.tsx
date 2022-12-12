import React, { useState } from 'react'
import TableRowOrder from '../EventsDashboard/TableRowOrder'
import Button from '../General/Button'
import LazyImage from '../General/LazyImage'
import Modal from '../General/Modal'
import InvoiceTableRow from './InvoiceTableRow'
import {motion} from "framer-motion"

type Props = {}

let data1: any = [
    {
        id: 1,
        no: "#FY6872T",
        date: "10/02/2022",
        event: "Conference",
        ticketPrice: "$16.00",
        qtySold: "100",
        ticketSales: "$1600",
        taxCollected: "$1600",
        status: "Pending"
    },
    {
        id: 2,
        no: "#FY6872T",
        date: "10/02/2022",
        event: "Conference",
        ticketPrice: "$16.00",
        qtySold: "100",
        ticketSales: "$1600",
        taxCollected: "$1600",
        status: "Pending"
    },
    {
        id: 3,
        no: "#FY6872T",
        date: "10/02/2022",
        event: "Conference",
        ticketPrice: "$16.00",
        qtySold: "100",
        ticketSales: "$1600",
        taxCollected: "$1600",
        status: "Cleared"
    },
]

export default function InvoiceDetails({ }: Props) {
    const [showModal, setShowModal] = useState<boolean>(false);

    const ShowModalhandler = () => {
        setShowModal(true);
    }
    const hideShowModalHandler = () => {
        setShowModal(false);
    }

    const [showModal1, setShowModal1] = useState<boolean>(false);

    const ShowModalhandler1 = () => {
        setShowModal1(true);
    }
    const hideShowModalHandler1 = () => {
        setShowModal1(false);
    }

    const [showModal2, setShowModal2] = useState<boolean>(false);

    const ShowModalhandler2 = () => {
        setShowModal2(true);
    }
    const hideShowModalHandler2 = () => {
        setShowModal2(false);
    }
    return (
        <>
            <Modal showModal={showModal} hideShowModalHandler={hideShowModalHandler}>
                <div className='relative w-[33.71757925072046vw] bg-white pt-[63px] pb-[126px] max-h-[90vh] overflow-auto'>
                    <img className='fixed bottom-0' src='./modal1.svg' alt='' />
                    <img className='fixed top-0 right-0' src='./modal2.svg' alt='' />
                    <h2 className='text-center font-[700] text-[36px] leading-[58.64px] text-[#473a3a]'>Invoice</h2>
                    <h3 className='text-center font-[700] text-[24px] leading-[39.09px] text-[#473a3a] mt-[32px]'>Fashion week</h3>
                    <div className='w-[20.69164265129683vw] m-auto mt-[57px] flex flex-col gap-[30px]'>
                        <div className='flex text-center font-[700] text-[20px] leading-[32.58px] text-[#473a3a]'>
                            <label >No :</label>
                            <p className='font-[400]' >#FGH1065</p>
                        </div>
                        <div className='flex text-center font-[700] text-[20px] leading-[32.58px] text-[#473a3a]'>
                            <label >Quantity Sold :</label>
                            <p className='font-[400]' >100</p>
                        </div>
                        <div className='flex  text-center font-[700] text-[20px] leading-[32.58px] text-[#473a3a]'>
                            <label >Ticket Price :</label>
                            <p className='font-[400]' > $16.00</p>
                        </div>
                        <div className='flex  text-center font-[700] text-[20px] leading-[32.58px] text-[#473a3a]'>
                            <label >Ticket Sales :</label>
                            <p className='font-[400]' >$1500</p>
                        </div>
                        <div className='flex h-[41px] items-center text-center font-[700] text-[20px] leading-[32.58px] text-[#fff] bg-[#FB4A04] pl-[2%] ml-[-2%]'>
                            <label >Tax :</label>
                            <p className='font-[400]' >$250</p>
                        </div>

                    </div>
                    <div className='flex flex-col items-center '>
                        <Button whileHover={{background:"#fff",color:"#FB4A04",border:"1px solid #FB4A04"}} width='13.544668587896254vw' height="61px" text="Pay with Stripe" style={{ borderRadius: "20px", background: "#FB4A04", marginTop: "68px" }} />
                        <Button whileHover={{background:"#FB4A04",color:"#fff",border:"1px solid #fff"}} onClick={() => { hideShowModalHandler(); ShowModalhandler1(); }} width='13.544668587896254vw' height="61px" text="Pay with Bank" style={{ borderRadius: "20px", background: "transparent", color: "#FB4A04", border: "1px solid #FB4A04", marginTop: "29px" }} />
                    </div>
                </div>
            </Modal>
            <Modal showModal={showModal1} hideShowModalHandler={hideShowModalHandler1}>
                <div className='relative w-[33.71757925072046vw] bg-white pt-[109px] pb-[219px] max-h-[90vh] overflow-auto'>
                    <img className='fixed bottom-0' src='/model31.svg' alt='' />
                    <h2 className='text-center font-[700] text-[36px] leading-[58.64px] text-[#473a3a]'>Pay with Bank Card</h2>
                    <div className='w-[27.953890489913544vw] m-auto mt-[94px] flex flex-col gap-[30px]'>
                        <div className='flex-1 flex flex-col'>
                            <label className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[26.06px] text-[#473a3a] mb-[0px]'>Card Number*</label>
                            <input className=' h-[61px] rounded-[20px] border-[1px] border-[#FB4A043D]' />
                        </div>
                        <div className="flex gap-[20px] mt-[20px]">
                            <div className='flex-1 flex flex-col'>
                                <label className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[26.06px] text-[#473a3a] mb-[0px]'>CVV</label>
                                <input className=' h-[61px] rounded-[20px] border-[1px] border-[#FB4A043D]' />
                            </div>
                            <div className='flex-1 flex flex-col'>
                                <label className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[26.06px] text-[#473a3a] mb-[0px]'>Expiry Date*</label>
                                <input className=' h-[61px] rounded-[20px] border-[1px] border-[#FB4A043D]' />
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col items-center '>
                        <Button whileHover={{background:"transparent",color:"#FB4A04",border:"1px solid #FB4A04"}} onClick={() => { hideShowModalHandler1(); ShowModalhandler2(); }} width='13.544668587896254vw' height="61px" text="Confirm" style={{ borderRadius: "20px", background: "#FB4A04", marginTop: "151px" }} />
                    </div>
                </div>
            </Modal>

            <Modal showModal={showModal2} hideShowModalHandler={hideShowModalHandler2}>
                <div className='relative w-[33.71757925072046vw] bg-white pt-[260px] pb-[126px] max-h-[90vh] overflow-auto  '>
                    <img className='fixed top-[27.75%]' src='./modal4.svg' alt='' />
                    <img className='fixed top-0 right-0' src='./modal5.svg' alt='' />
                    <div className='mb-[47px] flex justify-center'>
                        <LazyImage src='./modalMain.svg' />
                    </div>
                    <h2 className='text-center font-[700] text-[40px] leading-[65.16px] text-[#FB4A04] mb-[30px]'>Payment Successful</h2>
                    <div className='flex flex-col items-center '>
                        <Button whileHover={{background:"transparent",color:"#FB4A04",border:"1px solid #FB4A04"}} onClick={() => { hideShowModalHandler2() }} width='13.544668587896254vw' height="61px" text="Close" style={{ borderRadius: "20px", background: "#FB4A04",}} />
                    </div>
                </div>
            </Modal>

            <div className='w-[85.93659942363112vw]'>
                <div className='flex justify-between items-center ml-[10px] mt-[15px] xsm:flex-col sm:flex-col xsm:gap-[30px] sm:gap-[30px]'>
                    <div>
                        <p className='font-[700] text-[16px] text-[#666666B2] leading-[26.06px]'>Here is your monthly invoice for November - December 2022  </p>
                        <p className='font-[700] text-[16px] text-[#666666B2] leading-[26.06px]'>Kindly Pay up within the next 30 days.</p>
                    </div>
                    <motion.div whileHover={{scale:1.03}} className='w-[13.314121037463977vw] flex flex-col border-[1px] border-[#473a3a] xsm:min-w-[240px]'>
                        <label className='text-[12px] font-[400] leading-[19px] text-[#473a3a] mx-[24px]'>Data Range</label>
                        <select className='indent-[20px] outline-none text-[16px] font-[400] leading-[26px] text-[#473a3a]'>
                            <option>past 3 month</option>
                            <option>7 days</option>
                            <option>1 month</option>
                        </select>
                    </motion.div>
                </div>

                <div className='w-full whitespace-nowrap overflow-auto'>
                <table className="transition-all min-w-[1000px] table-fixed w-full mt-[43px] relative z-10 mb-[50px]">
                    <thead className='bg-[#fed4c3]'>
                        <tr className=''>
                            <th className='py-[17px]'>No</th>
                            <th className='py-[17px]'>Date</th>
                            <th className='py-[17px]'>Event</th>
                            <th className='py-[17px]'>Ticket Price</th>
                            <th className='py-[17px]'>Qty Sold</th>
                            <th className='py-[17px]'>Ticket sales</th>
                            <th className='py-[17px]'>Tax collected</th>
                            <th className='py-[17px]'>Status</th>
                        </tr>
                    </thead>
                    <tbody className='w-[78.32853025936599vw]'>
                        {data1.length > 0 && data1.map((d: any) => {
                            return (
                                <InvoiceTableRow data={d} ShowModalhandler={ShowModalhandler} />
                            )
                        })
                        }
                    </tbody>
                </table>
                </div>
            </div>
        </>
    )
}