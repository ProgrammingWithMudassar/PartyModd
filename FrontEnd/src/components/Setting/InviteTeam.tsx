import React, { useState } from 'react'
import Button from '../General/Button'
import Modal from '../General/Modal'

type Props = {}

export default function InviteTeam({ }: Props) {
    const [showModal, setShowModal] = useState<boolean>(false);

    const ShowModalhandler = () => {
        setShowModal(true);
    }
    const hideShowModalHandler = () => {
        setShowModal(false);
    }
    return (
        <>
            <Modal showModal={showModal} hideShowModalHandler={hideShowModalHandler}>
                <div className='w-[49.106628242074926vw] h-[473px] bg-white'>
                    <div className='w-[38.38616714697406vw] m-auto'>
                        <input className='indent-[28px] mt-[79px] font-[400] text-[16px] leading-[26.06px] text-[#231414D4] border-[1px] border-[#231414D4] w-full h-[68px]' placeholder='Users Email address' />
                        <select className='indent-[28px] mt-[30px] font-[400] text-[16px] leading-[26.06px] text-[#231414D4] border-[1px] border-[#231414D4] w-full h-[68px]'>
                            <option>Roles</option>
                        </select>
                        <Button whileHover={{background:"#fff",color:"#FB4A04",border:"1px solid #FB4A04"}} width='254px' height='61px' text="Send Invite" style={{background:"#FB4A04", borderRadius: "0px",marginTop:"88px" }} />
                    </div>
                </div>
            </Modal>
            <div className='w-full xsm:w-[80%] flex flex-col justify-center items-center xsm:m-auto sm:m-auto'>
                <div className='flex justify-center items-center w-[137px] h-[134px] rounded-full bg-[#F5F5F5]'>
                    <img src='/mailIcon.svg' alt='' />
                </div>
                <h2 className='mt-[8px] font-[700] text-[24px] leading-[24px] text-[#231414D4] text-center'>Build your team</h2>
                <p className='mt-[25px] w-[34.46685878962536vw] xsm:w-[100%] sm:w-[85%] text-center font-[400] text-[16px] leading-[26.06px] text-[#231414D4]'>Create new custom roles and assign them to team members, or invite users into an all access role.</p>
                <Button whileHover={{background:"#fff",color:"#FB4A04",border:"1px solid #FB4A04"}}  onClick={() => ShowModalhandler()} width="158px" height='47px' text="Invite Users" style={{background:"#FB4A04", borderRadius: "0px", fontSize: "20px", marginTop: "22px" }} />
            </div>
        </>
    )
}