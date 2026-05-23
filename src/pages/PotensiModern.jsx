import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoJabuBolon from "../assets/logojabubolon.png";
import ImgModernUlos from "../assets/modernulos.png";
import ImgModernMusic from "../assets/modernmusic.png";
import ImgTaromboApp from "../assets/taromboapp.png";
import ImgAndalimanTech from "../assets/andalimantech.png";
import ImgCreativeHub from "../assets/creativehub.png";

function PotensiModern() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-950 via-blue-900 to-sky-800 text-white pb-20 overflow-hidden relative">
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-visible { animation: fadeInDown 0.8s ease-out forwards; }
        .animate-fade-up { animation: fadeInUp 0.8s ease-out forwards; }
      `}</style>

      <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[350px] h-[350px] bg-blue-500/10 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-6 relative z-10">
        <div
          className={`flex items-center justify-between ${isVisible ? "fade-in-visible" : ""}`}
        >
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src={LogoJabuBolon}
              alt="Logo"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-cyan-300 shadow-lg"
            />
            <h1 className="text-xl md:text-2xl font-bold">
              Budaya<span className="text-cyan-300">Batak</span>
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8 font-medium">
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="hover:text-cyan-300 transition cursor-pointer bg-transparent border-none p-0 text-white font-medium"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/sejarah")}
                  className="hover:text-cyan-300 transition cursor-pointer bg-transparent border-none p-0 text-white font-medium"
                >
                  Sejarah
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/budaya")}
                  className="hover:text-cyan-300 transition cursor-pointer bg-transparent border-none p-0 text-white font-medium"
                >
                  Budaya
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/tradisi")}
                  className="hover:text-cyan-300 transition cursor-pointer bg-transparent border-none p-0 text-white font-medium"
                >
                  Tradisi
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/kuliner")}
                  className="hover:text-cyan-300 transition cursor-pointer bg-transparent border-none p-0 text-white font-medium"
                >
                  Kuliner
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/destinasi")}
                  className="hover:text-cyan-300 transition cursor-pointer bg-transparent border-none p-0 text-white font-medium"
                >
                  Destinasi
                </button>
              </li>
              <li className="relative">
                <button
                  onClick={() => setSubmenuOpen(!submenuOpen)}
                  className="text-cyan-300 transition flex items-center gap-1 font-medium bg-transparent border-none"
                >
                  Teknologi{" "}
                  <span
                    className={`text-sm transition-transform ${submenuOpen ? "rotate-180" : ""}`}
                  >
                    ▼
                  </span>
                </button>
                {submenuOpen && (
                  <ul className="absolute left-0 mt-2 w-48 bg-cyan-950/95 backdrop-blur-md rounded-lg shadow-lg z-50 border border-cyan-800/50 overflow-hidden">
                    <li>
                      <button
                        onClick={() => {
                          setSubmenuOpen(false);
                          navigate("/perkembangan-teknologi");
                        }}
                        className="w-full text-left block px-4 py-3 hover:bg-cyan-300 hover:text-cyan-950 transition text-sm bg-transparent border-none text-white"
                      >
                        Perkembangan Teknologi
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          setSubmenuOpen(false);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="w-full text-left block px-4 py-3 bg-cyan-300 text-cyan-950 transition text-sm border-none font-medium"
                      >
                        Potensi Modern
                      </button>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  onClick={() => navigate("/peta")}
                  className="hover:text-cyan-300 transition cursor-pointer bg-transparent border-none p-0 text-white font-medium"
                >
                  Peta
                </button>
              </li>
            </ul>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-3xl text-white bg-transparent border-none cursor-pointer"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="fixed top-0 right-0 h-screen w-[270px] bg-cyan-950/95 backdrop-blur-md z-50 p-8 shadow-2xl overflow-y-auto border-l border-cyan-800/50">
            <div className="flex justify-end items-center mb-10">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-3xl text-white bg-transparent border-none cursor-pointer"
              >
                ✕
              </button>
            </div>
            <ul className="flex flex-col gap-8 text-lg font-medium text-white">
              <li>
                <button
                  onClick={() => {
                    navigate("/");
                    setMenuOpen(false);
                  }}
                  className="cursor-pointer bg-transparent border-none p-0 text-left w-full text-white text-lg font-medium"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/sejarah");
                    setMenuOpen(false);
                  }}
                  className="cursor-pointer bg-transparent border-none p-0 text-left w-full text-white text-lg font-medium"
                >
                  Sejarah
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/budaya");
                    setMenuOpen(false);
                  }}
                  className="cursor-pointer bg-transparent border-none p-0 text-left w-full text-white text-lg font-medium"
                >
                  Budaya
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/tradisi");
                    setMenuOpen(false);
                  }}
                  className="cursor-pointer bg-transparent border-none p-0 text-left w-full text-white text-lg font-medium"
                >
                  Tradisi
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/kuliner");
                    setMenuOpen(false);
                  }}
                  className="cursor-pointer bg-transparent border-none p-0 text-left w-full text-white text-lg font-medium"
                >
                  Kuliner
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/destinasi");
                    setMenuOpen(false);
                  }}
                  className="cursor-pointer bg-transparent border-none p-0 text-left w-full text-white text-lg font-medium"
                >
                  Destinasi
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSubmenuOpen(!submenuOpen)}
                  className="flex items-center gap-2 w-full text-cyan-300 text-lg font-medium bg-transparent border-none text-left"
                >
                  Teknologi{" "}
                  <span
                    className={`text-sm transition-transform ${submenuOpen ? "rotate-180" : ""}`}
                  >
                    ▼
                  </span>
                </button>
                {submenuOpen && (
                  <ul className="mt-4 ml-4 flex flex-col gap-3 border-l-2 border-cyan-300 pl-4">
                    <li>
                      <button
                        onClick={() => {
                          setMenuOpen(false);
                          setSubmenuOpen(false);
                          navigate("/perkembangan-teknologi");
                        }}
                        className="text-left bg-transparent border-none text-white text-sm"
                      >
                        Perkembangan Teknologi
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          setMenuOpen(false);
                          setSubmenuOpen(false);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="text-left bg-transparent border-none text-cyan-300 text-sm font-medium"
                      >
                        Potensi Modern
                      </button>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/peta");
                    setMenuOpen(false);
                  }}
                  className="cursor-pointer bg-transparent border-none p-0 text-left w-full text-white text-lg font-medium"
                >
                  Peta
                </button>
              </li>
            </ul>
          </div>
        )}

        <section className="relative pt-24 pb-16 text-center max-w-7xl mx-auto z-10">
          <h1
            className={`text-4xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          >
            Potensi{" "}
            <span className="text-cyan-300 block sm:inline">
              Ekonomi Kreatif
            </span>
          </h1>
          <p
            className={`max-w-3xl mx-auto text-base md:text-lg text-gray-200 leading-relaxed ${isVisible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            Membangun masa depan peradaban Toba dengan mengintegrasikan kearifan
            lokal ke dalam industri fashion global, musik kontemporer, dan
            ekonomi digital berskala internasional.
          </p>
        </section>

        <div className="max-w-5xl mx-auto px-0 sm:px-5 space-y-12 relative z-10">
          <ContentBlock
            imageSrc={ImgModernUlos}
            title="Ulos dalam Industri Fashion Global"
            shortText="Kain tenun Ulos kini bertransformasi dari sekadar atribut ritual adat menjadi material fesyen premium (high-end fashion) yang diminati oleh pasar mancanegara."
            fullText="Para desainer fashion kelas dunia mulai melirik Ulos sebagai tekstil eksotis yang memiliki nilai filosofis dan keberlanjutan (sustainable). Melalui sentuhan modern, Ulos kini diaplikasikan ke dalam gaun haute couture, jas formal, hingga aksesoris mewah yang dipamerkan di panggung mode internasional seperti Paris Fashion Week. Langkah revitalisasi ini tidak hanya mengangkat derajat kebudayaan Batak, tetapi juga memberikan dampak ekonomi signifikan bagi para pengrajin tenun di desa-desa sekitar Danau Toba melalui konsep perdagangan adil (fair trade) dan ekspansi pasar digital global."
            delay="0.3s"
          />

          <ContentBlock
            imageSrc={ImgModernMusic}
            title="Ekspor Musik Etnik Kontemporer"
            shortText="Kolaborasi instrumen tradisional seperti Taganing dan Sarune dengan genre musik modern menciptakan gelombang baru World Music yang kompetitif."
            fullText="Seni musik Batak tidak lagi dipandang sebagai musik etnik statis. Musisi muda kontemporer kini menggabungkan ritme Gondang Sabangunan yang bertenaga dengan aransemen Jazz, Rock, hingga Electronic Dance Music (EDM). Hasilnya adalah karya audio visual imersif yang mampu menarik jutaan pendengar di platform streaming digital dunia. Festival musik berskala internasional di kawasan Toba juga menjadi magnet pariwisata baru yang memperkenalkan kekayaan nada pentatonis Batak kepada audiens global, menciptakan identitas budaya yang dinamis dan relevan dengan tren industri hiburan masa kini."
            delay="0.4s"
          />

          <ContentBlock
            imageSrc={ImgTaromboApp}
            title="Digitalisasi Tarombo & Sistem Kekerabatan"
            shortText="Pemanfaatan aplikasi mobile dan teknologi cloud untuk mendokumentasikan silsilah garis keturunan (Tarombo) agar tetap terjaga di tengah arus urbanisasi."
            fullText="Bagi masyarakat Batak, Tarombo adalah fondasi identitas. Dalam era modern, tantangan urbanisasi seringkali membuat komunikasi antar-generasi terputus. Kehadiran aplikasi Tarombo Digital berbasis grafis interaktif memudahkan setiap individu untuk melacak silsilah darah mereka, mencari hubungan kekerabatan (partuturan), dan memahami posisi adat mereka secara instan. Teknologi ini berperan sebagai jembatan pelestarian nilai kekeluargaan Dalihan Na Tolu di kalangan diaspora Batak yang tersebar di seluruh dunia, memastikan bahwa jati diri sebagai 'anak ni raja' tetap terpatri kuat meski jauh dari kampung halaman."
            delay="0.5s"
          />

          <ContentBlock
            imageSrc={ImgAndalimanTech}
            title="Gastronomi & Food Tech: Globalisasi Andaliman"
            shortText="Bumbu rempah endemik andaliman mulai diekspor ke berbagai negara sebagai bahan baku industri kuliner mewah, farmasi, dan kosmetik internasional."
            fullText="Andaliman, yang dikenal sebagai 'Lada Batak', kini mendapatkan pengakuan dunia sebagai superfood dan rempah eksotis dengan profil rasa yang unik. Melalui riset food technology, andaliman kini diolah menjadi produk turunan bernilai tinggi seperti minyak esensial, bumbu instan gourmet, hingga bahan baku parfum mewah. Potensi ini memicu pertumbuhan industri pengolahan rempah di Sumatera Utara yang dikelola secara modern oleh koperasi petani lokal, menjadikannya salah satu komoditas ekspor unggulan yang membawa aroma khas tana Toba ke meja makan restoran berbintang di berbagai belahan dunia."
            delay="0.6s"
          />

          <ContentBlock
            imageSrc={ImgCreativeHub}
            title="Smart Tourism & Kawasan Kreatif Toba"
            shortText="Pengembangan Danau Toba sebagai Destinasi Super Prioritas yang didukung oleh infrastruktur cerdas dan pusat inkubasi kreatif bagi pemuda lokal."
            fullText="Transformasi kawasan Toba menuju 'Smart Destination' melibatkan integrasi teknologi geospasial untuk pemetaan situs sejarah dan infrastruktur konektivitas yang masif. Pembangunan Creative Hub di berbagai titik strategis menjadi wadah bagi komunitas kreatif lokal untuk belajar teknologi digital, desain produk, dan pemasaran global. Kawasan ini diproyeksikan menjadi pusat ekonomi kreatif baru di Indonesia Barat, di mana tradisi dipelihara lewat inovasi, dan pariwisata dikelola secara berkelanjutan (sustainable tourism) untuk memberikan kemakmuran jangka panjang bagi masyarakat lingkar Danau Toba."
            delay="0.7s"
          />
        </div>

        <div className="mt-16 text-center relative z-10">
          <button
            onClick={() => navigate("/")}
            className="bg-white/10 border border-cyan-300/30 hover:bg-cyan-300 hover:text-cyan-950 px-8 py-3.5 rounded-full font-bold transition duration-300 shadow-xl cursor-pointer"
          >
            ← Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
}

function ContentBlock({ imageSrc, title, shortText, fullText, delay }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="bg-cyan-900/20 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-cyan-300/10 shadow-2xl opacity-0 animate-fade-up"
      style={{ animationDelay: delay }}
    >
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <img
          src={imageSrc}
          alt={title}
          className="w-full lg:w-1/3 h-48 sm:h-64 lg:h-44 object-cover rounded-2xl border border-cyan-300/20 bg-cyan-950/50 flex-shrink-0"
        />

        <div className="flex-1 w-full">
          <h2 className="text-xl md:text-2xl font-bold text-cyan-300 mb-4">
            {title}
          </h2>
          <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-4 transition-all duration-300">
            <p>{shortText}</p>

            {isExpanded && (
              <p className="pt-4 border-t border-cyan-300/10 text-gray-200 animate-fade-in">
                {fullText}
              </p>
            )}
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 text-cyan-300 font-bold flex items-center gap-1.5 hover:text-white transition-all text-sm md:text-base bg-transparent border-none cursor-pointer p-0"
          >
            {isExpanded ? "Sembunyikan" : "Lihat Selengkapnya"}
            <span>{isExpanded ? "↑" : "↓"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PotensiModern;
