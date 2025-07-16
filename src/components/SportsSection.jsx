import React from 'react'
import SportCard from './SportCard'

function SportsSection() {
    const cardsData  = [
        { title: "Futbol", date: "15 İyun 2025", info: "Məlumat tablosu futbol üçün" },
        { title: "Voleybol", date: "20 İyun 2025", info: "Voleybol haqqında məlumat" },
        { title: "Basketbol", date: "25 İyun 2025", info: "Basketbol məlumatları" },
        { title: "Futbol", date: "15 İyun 2025", info: "Məlumat tablosu futbol üçün" },
        { title: "Voleybol", date: "20 İyun 2025", info: "Voleybol haqqında məlumat" },
        { title: "Basketbol", date: "25 İyun 2025", info: "Basketbol məlumatları" },
    ]
  return (
     <section className="w-full h-screen bg-[#E3F4FB] mt-[100px] overflow-hidden">
      <div className="max-w-[1150px] mx-auto pt-[80px] flex justify-between items-center px-4">
        <h2 className="font-medium text-[40px]">Yarışlar</h2>
        <p className="font-medium text-[15px] text-[#050B20] cursor-pointer">
          Daha çox &rarr;
        </p>
      </div>
      <div className="max-w-[1440px] mx-auto flex gap-[50px] whitespace-nowrap overflow-hidden px-4">
        {cardsData.map((card, index) => (
          <SportCard
            key={index}
            title={card.title}
            date={card.date}
            info={card.info}
          />
        ))}
      </div>
      <div className="max-w-[1440px] mx-auto flex gap-[50px] whitespace-nowrap overflow-hidden px-4  ">
        {cardsData.map((card, index) => (
          <SportCard
            key={index}
            title={card.title}
            date={card.date}
            info={card.info}
          />
        ))}
      </div>
    </section>
  )
}

export default SportsSection