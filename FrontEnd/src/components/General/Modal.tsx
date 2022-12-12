import React from 'react'

type Props = {  
    showModal:boolean,
    children:any,
    hideShowModalHandler:any
}

export default function Modal({ showModal,children,hideShowModalHandler }: Props) {

    console.log(showModal);

    if(!showModal){
        return null
    }
    return (
        <div className='fixed z-[1999] top-0 left-0 w-[calc(100vw - 100%)] min-h-[100vh] overflow-auto'>
            <div onClick={()=>hideShowModalHandler()} style={{background:"rgba(22, 19, 19, 0.6)"}} className='w-[calc(100vw - 100%)] h-[100vh] min-w-[100vw]'>
            </div>
            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                {children}
            </div>
        </div>
    )
}