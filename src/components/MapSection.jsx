import React from "react";

function MapSection() {
  return (
    <section>
      <div className="flex items-center justify-center gap-[100px] mt-[100px]">
        <div className="map_text">
          <h2 className="text-[#295263] font-normal text-[64px] leading-tight">
            Səninlə hər addımda,
            <br /> hər yerdə
          </h2>
          <button className="bg-[#6A94C8] text-white font-medium text-[20px] px-10 py-3 mt-6 rounded-[12px] outline-none border-none cursor-pointer">
            Başla
          </button>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d73933.46960425247!2d50.110196515383976!3d40.44953841201313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1str!2saz!4v1752611372053!5m2!1str!2saz"
          width="663"
          height="579"
          className="rounded-[20px]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default MapSection;
