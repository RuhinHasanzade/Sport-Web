import React from 'react'

function TopSellerCrd() {
  return (
    <div>
         <div className="w-[368px] h-[367px] rounded-[20px] bg-white px-[20px] flex flex-col">
      <img
        src="imgs/Sports icon.png"
        alt="product"
        className="mt-[40px] ml-[60px]"
      />
      <div className="mt-[20px]">
        <h3 className="text-[18px] font-semibold text-[#050B20]">Tennis raketkası</h3>
        <p className="text-[14px] text-[#050B20]">Brend: XXXXXXXX</p>
        <p className="text-[14px] text-[#050B20]">Məlumat</p>
        <hr className="my-[6px]" />
      </div>
      <div className="flex justify-between mt-[30px]">
        <h4 className="text-[16px] font-semibold text-[#050B20]">₼10</h4>
        <p className="text-[14px] text-[#405FF2] cursor-pointer">Ətraflı →</p>
      </div>
    </div>
    </div>
  )
}

export default TopSellerCrd