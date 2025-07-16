import React from 'react'

function Footer() {
  return (
      <footer className="bg-blue-50 mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sol - Logo və təsvir */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Sporthub</h2>
            <p className="text-gray-600 mb-4">
              Ən son qiymət yenilikləri və idmanla bağlı faydalı məlumatlar üçün
              abunə olun!
            </p>
          </div>

          {/* Ortada - Linklər */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Şirkət</h3>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <a href="#">Haqqımızda</a>
                </li>
                <li>
                  <a href="#">Yarışlar</a>
                </li>
                <li>
                  <a href="#">Canlı tv</a>
                </li>
                <li>
                  <a href="#">Chat</a>
                </li>
                <li>
                  <a href="#">Əlaqə</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">İdmanlar</h3>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <a href="#">Brendlər</a>
                </li>
                <li>
                  <a href="#">Xəritə</a>
                </li>
                <li>
                  <a href="#">Mağaza</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Sağ - Email Subscription */}
          <div>
            <h3 className="font-semibold mb-2">Abunə ol</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-r-md"
              >
                Abunə ol
              </button>
            </form>
          </div>
        </div>

        {/* Aşağı - Sosial ikonlar və copyright */}
        <div className="border-t border-gray-200 py-6 px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">© 2025</p>
          <div className="flex space-x-4 my-4 md:my-0">
            {/* TODO: Sosial media ikonlarını əlavə et */}
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <p className="text-gray-600 text-sm">
            Terms & Conditions • Privacy Notice
          </p>
        </div>
      </footer>
    
  )
}

export default Footer