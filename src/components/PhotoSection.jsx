import React from 'react'

function PhotoSection() {
  return (
     <div className="mt-[100px] max-w-[1400px] mx-auto flex justify-center">
      <div className="w-[820px] bg-[#02012D] rounded-l-[40px] flex flex-col items-center justify-center gap-[20px]">
        <p className="font-medium text-[40px] text-white text-center">
          İdmanda tək qalma – <br /> dostlarınla əlaqə qur !
        </p>
        <button className="font-medium text-[14px] px-[24px] py-[10px] rounded-full text-white bg-[#6A94C8]">
          Daxil Ol
        </button>
      </div>
      <img
        src="imgs/Rectangle 9086.png"
        alt=""
        className="w-1/2 rounded-r-[40px]"
      />
    </div>
  )
}

export default PhotoSection