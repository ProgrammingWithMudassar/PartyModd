import React, { useState } from 'react'

type Props = {}

export default function TableRowOrder({ data }: any) {
    return (
        <tr className='py-[15px] text-center border-collapse border border-slate-500'>
            <td className='border-collapse border border-slate-500'>{data.ticketName} </td>
            <td className='border-collapse border border-slate-500'> {data._id} </td>
            <td className='border-collapse border border-slate-500'> {data.email} </td>
            <td className='border-collapse border border-slate-500'> {data.username} </td>
            <td className='border-collapse border border-slate-500'> {data.quantity} </td>
            <td className='border-collapse border border-slate-500'> {data.status} </td>
            <td className='border-collapse border border-slate-500'> {data.price}$ </td>
        </tr>
    )
}