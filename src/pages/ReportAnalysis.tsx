import React from 'react'
import BarChart from '../components/ReportAnalysis/BarChart'
import Layout from '../components/General/Layout'
import SingleBarChart from '../components/ReportAnalysis/SingleBarChart';
import PieChart from '../components/ReportAnalysis/PieChart';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import LineChart from '../components/ReportAnalysis/LineChart';

type Props = {}

interface Data {
    label: string;
    value: number;
}

const DATA: Data[] = [
    { label: "Apples", value: 100 },
    { label: "Bananas", value: 200 },
    { label: "Oranges", value: 50 },
    { label: "Kiwis", value: 150 }
];

export default function ReportAnalysis({ }: Props) {
    return (
        <Layout>
            <div className='w-[85.76368876080691vw] ml-[6.974063400576369vw] xsm:ml-0 sm:ml-0 mt-[51px]'>
                <div className='w-full'>
                    <div className='flex gap-[39px] ml-[2.4207492795389047vw]'>
                        <label className='font-[400] text-[20px] leading-[32.58px] text-[#000000]'>Filter by Date</label>
                        <select className='w-[155px] h-[39px] rounded-[10px] border-[1px] border-[#CCCCCC] px-[34px] font-[400] text-[15px] leading-[24.43px] text-[#000000]'>
                            <option>7 days</option>
                            <option>1 month</option>
                            <option>3 month</option>
                        </select>
                    </div>
                    <div className='flex xsm:items-center sm:items-center gap-[32.5px] mt-[47px] justify-center xsm:flex-col sm:flex-col'>
                        <div className='flex flex-col justify-center items-center w-[22.997118155619596vw] xsm:w-[80%] sm:w-[80%] h-[173px] rounded-[10px] bg-[#FB4A043D]'>
                            <h2 className='font-[700] text-[20px] leading-[32.58px] text-[#000000]'>Total Revenue</h2>
                            <h1 className='font-[700] text-[36px] leading-[58.64px] text-[#000000]'>$20,000</h1>
                            <div className='flex gap-[10px]'>
                                <img src='./updropdown.svg' alt='' />
                                <p className='font-[400] text-[15px] leading-[24.43px] text-[#000000]'>2.00%</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[22.997118155619596vw] xsm:w-[80%] sm:w-[80%] h-[173px] rounded-[10px] bg-[#FB4A04B8]'>
                            <h2 className='font-[700] text-[20px] leading-[32.58px] text-[#000000]'>Ticket sales </h2>
                            <h1 className='font-[700] text-[36px] leading-[58.64px] text-[#fff]'>$20,000</h1>
                            <div className='flex gap-[10px]'>
                                <img src='./updropdown.svg' alt='' />
                                <p className='font-[400] text-[15px] leading-[24.43px] text-[#000000]'>2.00%</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[22.997118155619596vw] xsm:w-[80%] sm:w-[80%] h-[173px] rounded-[10px] bg-[#FBB60491]'>
                            <h2 className='font-[700] text-[20px] leading-[32.58px] text-[#000000]'>Live Streaming</h2>
                            <h1 className='font-[700] text-[36px] leading-[58.64px] text-[#fff]'>$20,000</h1>
                            <div className='flex gap-[10px]'>
                                <img src='./updropdown.svg' alt='' />
                                <p className='font-[400] text-[15px] leading-[24.43px] text-[#000000]'>2.00%</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full h-[578px] xsm:h-auto sm:h-auto flex gap-[18px] mt-[95px] xsm:flex-col sm:flex-col'>
                    <div className='w-[48.5878962536023vw] xsm:w-[100%] sm:w-[80%] h-full rounded-[20px]'>
                        <h2 className='font-[700] text-[32px] leading-[52.13px] text-[#000000]'>Total Revenues</h2>
                        <BarChart />
                    </div>
                    <div className='w-[36.138328530259365vw] xsm:w-[100%] sm:w-[80%] h-full  rounded-[20px]'>
                        <h2 className='font-[700] text-[32px] leading-[52.13px] text-[#000000]'>Customers Insight</h2>
                        <LineChart />
                    </div>
                </div>


                <div className='w-full h-[578px] xsm:h-auto sm:h-auto flex gap-[18px] mt-[95px] xsm:flex-col sm:flex-col'>
                    <div className='w-[48.5878962536023vw] xsm:w-[100%] sm:w-[80%] h-full  rounded-[20px]'>
                        <h2 className='font-[700] text-[32px] leading-[52.13px] text-[#000000]'>Vibe Check</h2>
                        <div className='flex'>
                            <div className='h-[580px] flex xsm:hidden sm:hidden flex-col justify-between py-[5%]'>
                                <p className='font-[400] text-[14px] leading-[32.58px] text-[#000000]'>Excellent Vibe</p>
                                <p className='font-[400] text-[14px] leading-[32.58px] text-[#000000]'>Good Vibe</p>
                                <p className='font-[400] text-[14px] leading-[32.58px] text-[#000000]'>Ok Vibe</p>
                                <p className='font-[400] text-[14px] leading-[32.58px] text-[#000000]'>Bad Vibe</p>
                            </div>
                            <div className='h-[580px] w-full xsm:w-[100%] sm:w-[80%]'>
                                <SingleBarChart />
                            </div>
                        </div>
                    </div>
                    <div className='w-[36.138328530259365vw] xsm:w-[100%] sm:w-[80%] h-full  rounded-[20px]'>
                        <h2 className='font-[700] text-[32px] leading-[52.13px] text-[#000000]'>Events Analysis </h2>
                        <PieChart />
                    </div>
                </div>
            </div>
        </Layout>
    )
}