import React, { useState } from 'react'

type Props = {}

export default function TableRowOrder({ data }: any) {
    return (
        <tr className='py-[15px] text-center border-collapse border border-slate-500'>
            <td className='border-collapse border border-slate-500'>{"data.events[0]"}</td>
            <td className='border-collapse border border-slate-500'><img src={"data.img"} alt='' /></td>
            <td className='border-collapse border border-slate-500'>{"data.sold"}</td>
            <td className='border-collapse border border-slate-500'>{"data.gross"}</td>
        </tr>
    )
}