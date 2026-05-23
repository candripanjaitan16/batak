import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LogoJabuBolon from "../assets/logojabubolon.png";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (path) => {
    setIsOpen(false);
    setSubmenuOpen(false);
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full text-white shadow-2xl transition-all duration-500 z-50 backdrop-blur-md ${
        isScrolled
          ? "bg-cyan-950/95 translate-y-0 opacity-100 border-b border-cyan-800/50"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            onClick={() => handleNav("/")}
            className="flex items-center min-w-0 flex-shrink-0 gap-3 cursor-pointer"
          >
            <img
              src={LogoJabuBolon}
              alt="Logo"
              className="w-12 h-12 rounded-full object-cover border-2 border-cyan-300 shadow-lg flex-shrink-0"
            />
            <h1 className="text-xl md:text-2xl font-bold truncate">
              Budaya
              <span className="text-cyan-300">Batak</span>
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8 font-medium whitespace-nowrap">
              <li>
                <button
                  onClick={() => handleNav("/")}
                  className={`transition cursor-pointer bg-transparent border-none p-0 font-medium ${
                    location.pathname === "/"
                      ? "text-cyan-300"
                      : "text-white hover:text-cyan-300"
                  }`}
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("/sejarah")}
                  className={`transition cursor-pointer bg-transparent border-none p-0 font-medium ${
                    location.pathname === "/sejarah"
                      ? "text-cyan-300"
                      : "text-white hover:text-cyan-300"
                  }`}
                >
                  Sejarah
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("/budaya")}
                  className={`transition cursor-pointer bg-transparent border-none p-0 font-medium ${
                    location.pathname === "/budaya"
                      ? "text-cyan-300"
                      : "text-white hover:text-cyan-300"
                  }`}
                >
                  Budaya
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("/tradisi")}
                  className={`transition cursor-pointer bg-transparent border-none p-0 font-medium ${
                    location.pathname === "/tradisi"
                      ? "text-cyan-300"
                      : "text-white hover:text-cyan-300"
                  }`}
                >
                  Tradisi
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("/kuliner")}
                  className={`transition cursor-pointer bg-transparent border-none p-0 font-medium ${
                    location.pathname === "/kuliner"
                      ? "text-cyan-300"
                      : "text-white hover:text-cyan-300"
                  }`}
                >
                  Kuliner
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("/destinasi")}
                  className={`transition cursor-pointer bg-transparent border-none p-0 font-medium ${
                    location.pathname === "/destinasi"
                      ? "text-cyan-300"
                      : "text-white hover:text-cyan-300"
                  }`}
                >
                  Destinasi
                </button>
              </li>
              <li className="relative">
                <button
                  onClick={() => setSubmenuOpen(!submenuOpen)}
                  className={`transition flex items-center gap-1 font-medium bg-transparent border-none cursor-pointer ${
                    location.pathname === "/perkembangan-teknologi" ||
                    location.pathname === "/potensi-modern"
                      ? "text-cyan-300"
                      : "text-white hover:text-cyan-300"
                  }`}
                >
                  Teknologi
                  <span
                    className={`text-sm transition-transform duration-200 ${
                      submenuOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {submenuOpen && (
                  <ul className="absolute left-0 mt-2 w-48 bg-cyan-950/95 backdrop-blur-md rounded-lg shadow-lg border border-cyan-800/50 z-50 overflow-hidden">
                    <li>
                      <button
                        onClick={() => handleNav("/perkembangan-teknologi")}
                        className={`w-full text-left block px-4 py-3 text-sm transition bg-transparent border-none cursor-pointer ${
                          location.pathname === "/perkembangan-teknologi"
                            ? "bg-cyan-300 text-cyan-950 font-bold"
                            : "text-white hover:bg-cyan-300 hover:text-cyan-950"
                        }`}
                      >
                        Perkembangan Teknologi
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleNav("/potensi-modern")}
                        className={`w-full text-left block px-4 py-3 text-sm transition bg-transparent border-none cursor-pointer ${
                          location.pathname === "/potensi-modern"
                            ? "bg-cyan-300 text-cyan-950 font-bold"
                            : "text-white hover:bg-cyan-300 hover:text-cyan-950"
                        }`}
                      >
                        Potensi Modern
                      </button>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  onClick={() => handleNav("/peta")}
                  className="bg-cyan-300 text-cyan-950 px-5 py-2 rounded-full font-bold hover:bg-white hover:scale-105 transition duration-200 cursor-pointer border-none"
                >
                  Peta
                </button>
              </li>
            </ul>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-3xl text-white bg-transparent border-none cursor-pointer"
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed top-0 right-0 h-screen w-[270px] bg-cyan-950/95 backdrop-blur-md z-50 p-8 shadow-2xl overflow-y-auto border-l border-cyan-800/50">
          <div className="flex justify-end items-center mb-10">
            <button
              onClick={() => setIsOpen(false)}
              className="text-3xl text-white bg-transparent border-none cursor-pointer"
            >
              ✕
            </button>
          </div>

          <ul className="flex flex-col gap-8 text-lg font-medium text-white">
            <li>
              <button
                onClick={() => handleNav("/")}
                className={`text-left w-full bg-transparent border-none cursor-pointer text-lg font-medium transition ${
                  location.pathname === "/"
                    ? "text-cyan-300"
                    : "text-white hover:text-cyan-300"
                }`}
              >
                Beranda
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav("/sejarah")}
                className={`text-left w-full bg-transparent border-none cursor-pointer text-lg font-medium transition ${
                  location.pathname === "/sejarah"
                    ? "text-cyan-300"
                    : "text-white hover:text-cyan-300"
                }`}
              >
                Sejarah
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav("/budaya")}
                className={`text-left w-full bg-transparent border-none cursor-pointer text-lg font-medium transition ${
                  location.pathname === "/budaya"
                    ? "text-cyan-300"
                    : "text-white hover:text-cyan-300"
                }`}
              >
                Budaya
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav("/tradisi")}
                className={`text-left w-full bg-transparent border-none cursor-pointer text-lg font-medium transition ${
                  location.pathname === "/tradisi"
                    ? "text-cyan-300"
                    : "text-white hover:text-cyan-300"
                }`}
              >
                Tradisi
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav("/kuliner")}
                className={`text-left w-full bg-transparent border-none cursor-pointer text-lg font-medium transition ${
                  location.pathname === "/kuliner"
                    ? "text-cyan-300"
                    : "text-white hover:text-cyan-300"
                }`}
              >
                Kuliner
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav("/destinasi")}
                className={`text-left w-full bg-transparent border-none cursor-pointer text-lg font-medium transition ${
                  location.pathname === "/destinasi"
                    ? "text-cyan-300"
                    : "text-white hover:text-cyan-300"
                }`}
              >
                Destinasi
              </button>
            </li>
            <li>
              <button
                onClick={() => setSubmenuOpen(!submenuOpen)}
                className={`flex items-center gap-2 w-full text-lg font-medium bg-transparent border-none text-left cursor-pointer transition ${
                  location.pathname === "/perkembangan-teknologi" ||
                  location.pathname === "/potensi-modern"
                    ? "text-cyan-300"
                    : "text-white hover:text-cyan-300"
                }`}
              >
                Teknologi
                <span
                  className={`text-sm transition-transform duration-200 ${
                    submenuOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {submenuOpen && (
                <ul className="mt-4 ml-4 flex flex-col gap-3 border-l-2 border-cyan-300 pl-4">
                  <li>
                    <button
                      onClick={() => handleNav("/perkembangan-teknologi")}
                      className={`text-left w-full bg-transparent border-none cursor-pointer text-sm transition ${
                        location.pathname === "/perkembangan-teknologi"
                          ? "text-cyan-300 font-bold"
                          : "text-white hover:text-cyan-300"
                      }`}
                    >
                      Perkembangan Teknologi
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNav("/potensi-modern")}
                      className={`text-left w-full bg-transparent border-none cursor-pointer text-sm transition ${
                        location.pathname === "/potensi-modern"
                          ? "text-cyan-300 font-bold"
                          : "text-white hover:text-cyan-300"
                      }`}
                    >
                      Potensi Modern
                    </button>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => handleNav("/peta")}
                className="w-full text-center bg-cyan-300 text-cyan-950 py-2.5 rounded-full font-bold hover:bg-white transition cursor-pointer border-none"
              >
                Peta
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
