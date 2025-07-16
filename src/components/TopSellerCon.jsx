import React from 'react'
import TopSellerCrd from './TopSellerCrd'

function TopSellerCon() {
  return (
     <section class="w-full h-screen bg-[#E3F4FB] mt-[100px] overflow-hidden">
  <div class="max-w-[1150px] mx-auto pt-[80px] flex justify-between items-center">
    <h2 class="mt-[10px] font-medium text-[30px] text-[#050B20]">
      Ən çox satılanlar
    </h2>
    <p class="cursor-pointer text-[#050B20] font-medium text-[15px]">
      Daha çox →
    </p>
  </div>


  <div class="mt-[80px] max-w-[1400px] mx-auto flex gap-[20px] overflow-x-auto whitespace-nowrap px-4 scroll-smooth">
    

    <div class="w-[368px] h-[367px] rounded-[20px] bg-white px-[20px] inline-block flex-shrink-0">
      <img src="imgs/Sports icon.png" alt="" class="mt-[40px] ml-[60px]" />
      <div class="mt-4">
        <h3 class="text-[20px] font-semibold">Tennis raketkası</h3>
        <p class="text-[14px]">Brend: XXXXXXXX</p>
        <p class="text-[14px]">Məlumat</p>
        <hr class="mt-1" />
      </div>
      <div class="flex justify-between mt-[30px]">
        <h4 class="font-semibold">₼10</h4>
        <p class="cursor-pointer">Ətraflı →</p>
      </div>
    </div>

  
    <div class="w-[368px] h-[367px] rounded-[20px] bg-white px-[20px] inline-block flex-shrink-0">
      <img src="imgs/Sports icon.png" alt="" class="mt-[40px] ml-[60px]" />
      <div class="mt-4">
        <h3 class="text-[20px] font-semibold">Tennis raketkası</h3>
        <p class="text-[14px]">Brend: XXXXXXXX</p>
        <p class="text-[14px]">Məlumat</p>
        <hr class="mt-1" />
      </div>
      <div class="flex justify-between mt-[30px]">
        <h4 class="font-semibold">₼10</h4>
        <p class="cursor-pointer">Ətraflı →</p>
      </div>
    </div>
    <div class="w-[368px] h-[367px] rounded-[20px] bg-white px-[20px] inline-block flex-shrink-0">
      <img src="imgs/Sports icon.png" alt="" class="mt-[40px] ml-[60px]" />
      <div class="mt-4">
        <h3 class="text-[20px] font-semibold">Tennis raketkası</h3>
        <p class="text-[14px]">Brend: XXXXXXXX</p>
        <p class="text-[14px]">Məlumat</p>
        <hr class="mt-1" />
      </div>
      <div class="flex justify-between mt-[30px]">
        <h4 class="font-semibold">₼10</h4>
        <p class="cursor-pointer">Ətraflı →</p>
      </div>
    </div><div class="w-[368px] h-[367px] rounded-[20px] bg-white px-[20px] inline-block flex-shrink-0">
      <img src="imgs/Sports icon.png" alt="" class="mt-[40px] ml-[60px]" />
      <div class="mt-4">
        <h3 class="text-[20px] font-semibold">Tennis raketkası</h3>
        <p class="text-[14px]">Brend: XXXXXXXX</p>
        <p class="text-[14px]">Məlumat</p>
        <hr class="mt-1" />
      </div>
      <div class="flex justify-between mt-[30px]">
        <h4 class="font-semibold">₼10</h4>
        <p class="cursor-pointer">Ətraflı →</p>
      </div>
    </div>
  </div>
</section>

  )
}

export default TopSellerCon