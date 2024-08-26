import Image from 'next/image'
import React from 'react'

const Top = () => {
  return (
    <div className="flex w-screen  text-white justify-center items-center gap-2">
    <Image src={"/top.svg"} width={2000} alt="title" height={100} className="w-full"></Image>
  </div>
  )
}

export default Top