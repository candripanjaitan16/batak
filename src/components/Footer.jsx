import { useNavigate, useLocation } from "react-router-dom";
import LogoJabuBolon from "../assets/logojabubolon.png";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-cyan-950 text-white border-t border-cyan-900 relative z-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12">
        {/* Mengubah menjadi grid 3 kolom pada layar desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Kolom 1: Logo & Deskripsi */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div
              onClick={() => handleNav("/")}
              className="flex items-center gap-3 mb-4 cursor-pointer group"
            >
              <img
                src={LogoJabuBolon}
                alt="Logo"
                className="w-10 h-10 rounded-full object-cover border border-cyan-300 group-hover:scale-105 transition-transform duration-300"
              />
              <span className="font-bold text-xl tracking-wide">
                Budaya<span className="text-cyan-300">Batak</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Platform informasi digital untuk melestarikan dan memperkenalkan
              kekayaan warisan leluhur suku Batak ke seluruh dunia.
            </p>
          </div>

          {/* Kolom 2: Navigasi Halaman */}
          <div className="flex flex-col items-center text-center">
            <h3 className="font-semibold text-cyan-300 mb-4 text-base tracking-wider uppercase">
              Navigasi Halaman
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm font-medium text-gray-300">
              <li>
                <button
                  onClick={() => handleNav("/")}
                  className="hover:text-cyan-300 transition-colors duration-200 bg-transparent border-none p-0 text-gray-400 cursor-pointer"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("/sejarah")}
                  className="hover:text-cyan-300 transition-colors duration-200 bg-transparent border-none p-0 text-gray-400 cursor-pointer"
                >
                  Sejarah
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("/budaya")}
                  className="hover:text-cyan-300 transition-colors duration-200 bg-transparent border-none p-0 text-gray-400 cursor-pointer"
                >
                  Budaya
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("/tradisi")}
                  className="hover:text-cyan-300 transition-colors duration-200 bg-transparent border-none p-0 text-gray-400 cursor-pointer"
                >
                  Tradisi
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("/kuliner")}
                  className="hover:text-cyan-300 transition-colors duration-200 bg-transparent border-none p-0 text-gray-400 cursor-pointer"
                >
                  Kuliner
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("/destinasi")}
                  className="hover:text-cyan-300 transition-colors duration-200 bg-transparent border-none p-0 text-gray-400 cursor-pointer"
                >
                  Destinasi
                </button>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Pembuat (Portfolio Link) - Tanpa Informasi Kontak */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h3 className="font-semibold text-cyan-300 mb-4 text-base tracking-wider uppercase">
              Dikembangkan Oleh
            </h3>
            <p className="text-sm text-gray-400 mb-2">
              Proyek ini dirancang dan dibangun secara mandiri oleh:
            </p>
            <a
              href="https://candri.my.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold text-sm bg-cyan-900/50 hover:bg-cyan-900 px-4 py-2 rounded-lg border border-cyan-800 transition-all duration-300 hover:text-cyan-300"
            >
              candri.my.id
            </a>
          </div>
        </div>

        {/* Bagian Bawah / Copyright */}
        <div className="mt-12 pt-6 border-t border-cyan-900/60 text-center text-gray-500 text-xs tracking-wider">
          &copy; {new Date().getFullYear()} Budaya Batak Digital. Semua Hak
          Dilindungi.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
