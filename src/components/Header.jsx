import React from 'react'

function Header() {
  return (
   <header
  className="w-full h-screen pt-8 font-[Nunito_Sans]"
  style={{
    backgroundImage: `url('./imgs/Rectangle 1.png')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "top",
  }}
>
  <div className="flex flex-col items-center">
    {/* Header Top */}
    <div className="flex justify-around items-center w-full mb-5">
      <img src="imgs/İdmanhub.png" alt="" />

      {/* Glass Navbar */}
      <nav
        className="w-[979px] h-[86px] bg-white/75 backdrop-blur-[2px] border border-white/25 rounded-[40px] flex items-center justify-center"
      >
        <ul className="flex gap-7">
          {["Ana Səhifə", "Yarışlar", "Xəritə", "Mağaza", "Chat", "Əlaqə"].map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="text-[#14522E] font-semibold text-[20px] no-underline px-2.5 py-1.5 rounded-lg transition duration-300 hover:bg-[#14522E]/10"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <img src="imgs/feather_menu.png" alt="" />
    </div>

    {/* Header Text */}
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-white text-[128px] font-extrabold mt-[70px]">
        Seç. Oyna. Fəth et.
      </h1>
      <button
        className="mt-8 bg-white/75 backdrop-blur-[2px] text-[#14522E] font-medium text-[64px] px-[100px] py-2.5 rounded-[40px] hover:bg-white"
      >
        Başla
      </button>
    </div>
  </div>
</header>

  )
}

export default Header