import React from 'react'
import Button from '../General/Button'
import InvoiceTableRow from '../InvoiceAndBilling/InvoiceTableRow'

type Props = {}

let data1: any[] = [
    {
        id: 1,
        appName: "mailer",
        description: "Marketing",
        installed: "2 weeks",
        delete: "/trash-2.svg"
    },
    {
        id: 1,
        appName: "mailer",
        description: "Marketing",
        installed: "2 weeks",
        delete: "/trash-2.svg"
    },
]

export default function AppInstallation({ }: Props) {
    return (
        <div className='w-[78.04034582132564vw] flex flex-col justify-center items-center'>
            <div className='w-full whitespace-nowrap overflow-auto'>
                <table className="transition-all table-fixed min-w-[400px] w-full mt-[43px] relative z-10 mb-[50px]">
                    <thead className='bg-[#FB4A04]'>
                        <tr className=''>
                            <th className='py-[17px] text-white pl-[1%] text-left w-[50%] sm:w-[25%] xsm:w-auto'>App Name</th>
                            <th className='py-[17px] text-white'>Description</th>
                            <th className='py-[17px] text-white'>Installed</th>
                            <th className='py-[17px] text-white'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data1.length > 0 && data1.map((d: any) => {
                            return (
                                <tr key={d.id} className='py-[15px] text-center'>
                                    <td className='py-[17px] pl-[1%] text-left w-[50%] sm:w-[25%] xsm:w-auto'>{d.appName}</td>
                                    <td className='py-[17px] '>{d.description}</td>
                                    <td className='py-[17px] '>{d.installed}</td>
                                    <td className='py-[17px] flex justify-center'><img src={d.delete} /></td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
            <Button whileHover={{background:"#fff",color:"#FB4A04",border:"1px solid #FB4A04"}} width="255px" height='47px' text="Browse Apps" style={{background:"#FB4A04", borderRadius: "0px", fontSize: "20px", alignSelf: "flex-end", marginTop: "150px" }} />
        </div>
    )
}