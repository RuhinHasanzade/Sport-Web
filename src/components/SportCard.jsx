import React from 'react'

function SportCard({title , date , info}) {

  return (
    <section>
          <div className="mt-[80px] w-[388px] h-[193px] bg-white pt-[20px] rounded-[16px] inline-block flex-shrink-0">
      <div className="flex justify-around">
        <h2 className="font-medium text-[20px] text-[#050B20]">{title}</h2>
        <p className="font-medium text-[20px] text-gray-500">{date}</p>
      </div>
      <div className="mt-[70px] mx-[50px]">
        <p className="text-[18px]">{info}</p>
        <hr />
      </div>
      <h4 className="font-medium text-[15px] text-[#405FF2] cursor-pointer text-end mr-[50px] mt-[15px]">
        Ətraflı &rarr;
      </h4>
    </div>
    </section>
  )
}

export default SportCard