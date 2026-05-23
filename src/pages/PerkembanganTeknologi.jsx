import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoJabuBolon from "../assets/logojabubolon.png";
import ImgDigitalisasiAksara from "../assets/digitalisasiaksara.png";
import ImgTenunModern from "../assets/tenunmodern.png";
import ImgEcomMarga from "../assets/ecommarga.png";
import ImgGeospasialToba from "../assets/geospasialtoba.png";

function PerkembanganTeknologi() {
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
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="w-full text-left block px-4 py-3 bg-cyan-300 text-cyan-950 transition text-sm border-none font-medium"
                      >
                        Perkembangan Teknologi
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          setSubmenuOpen(false);
                          navigate("/potensi-modern");
                        }}
                        className="w-full text-left block px-4 py-3 hover:bg-cyan-300 hover:text-cyan-950 transition text-sm bg-transparent border-none text-white"
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
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="text-left bg-transparent border-none text-cyan-300 text-sm font-medium"
                      >
                        Perkembangan Teknologi
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          setMenuOpen(false);
                          setSubmenuOpen(false);
                          navigate("/potensi-modern");
                        }}
                        className="text-left bg-transparent border-none text-white text-sm"
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
            Perkembangan{" "}
            <span className="text-cyan-300 block sm:inline">
              Teknologi Culture
            </span>
          </h1>
          <p
            className={`max-w-3xl mx-auto text-base md:text-lg text-gray-200 leading-relaxed ${isVisible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            Melihat bagaimana inovasi digital, kecerdasan buatan, dan
            modernisasi manufaktur diaplikasikan untuk melestarikan serta
            menyebarluaskan identitas budaya Batak ke kancah global.
          </p>
        </section>

        <div className="max-w-5xl mx-auto px-0 sm:px-5 space-y-12 relative z-10">
          <ContentBlock
            imageSrc={ImgDigitalisasiAksara}
            title="Digitalisasi Surat Batak (Unicode & AI)"
            shortText="Digitalisasi aksara kuno melalui standardisasi Unicode internasional dan pemanfaatan sistem kecerdasan buatan untuk membaca manuskrip kuno (Pustaha Laklak)."
            fullText="Aksara Batak kini tidak hanya tersimpan di dalam dokumen kulit kayu kuno, melainkan telah berhasil diintegrasikan ke dalam sistem komputasi modern melalui pengkodean Unicode. Hal ini memungkinkan papan ketik ponsel pintar dan komputer untuk memproses karakter Surat Batak secara langsung. Selain itu, para peneliti kini mengembangkan teknologi Optical Character Recognition (OCR) berbasis Artificial Intelligence untuk menerjemahkan teks-teks kuno secara otomatis, mempercepat pelestarian sejarah literasi Batak agar dapat diakses dengan mudah oleh generasi muda digital."
            delay="0.3s"
          />

          <ContentBlock
            imageSrc={ImgTenunModern}
            title="Inovasi Alat Tenun Non-Mesin (ATBM) & Eco-System Ulos"
            shortText="Penerapan modifikasi teknologi alat tenun untuk meningkatkan efisiensi produksi kain ulos tanpa merusak nilai filosofis dan keaslian motif tradisional."
            fullText="Untuk menyeimbangkan tingginya permintaan pasar mode global dengan kapasitas produksi pengrajin lokal, adopsi Alat Tenun Non-Mesin (ATBM) yang dimodifikasi mulai diterapkan di sentra tenun Toba. Inovasi ini memangkas waktu pengerjaan basis kain tanpa menghilangkan detail anyaman tangan yang rumit. Bersamaan dengan itu, pemanfaatan teknologi pewarnaan berbasis limbah organik ramah lingkungan (eco-friendly) diaplikasikan guna mendukung ekosistem fesyen berkelanjutan, menaikkan nilai jual Ulos di pasar internasional sebagai produk budaya premium."
            delay="0.4s"
          />

          <ContentBlock
            imageSrc={ImgEcomMarga}
            title="Aplikasi Tarombo Digital & Marketplace Budaya"
            shortText="Sistem basis data terintegrasi yang mendokumentasikan silsilah garis keturunan (Tarombo) serta platform e-commerce khusus produk ekonomi kreatif Batak."
            fullText="Hubungan kekerabatan marga yang kompleks kini dikelola melalui aplikasi Tarombo digital berbasis cloud. Aplikasi ini membantu masyarakat Batak di perantauan untuk melacak silsilah darah, mencari kekerabatan, dan memahami posisi adat mereka secara akurat lewat visualisasi pohon keluarga interaktif. Di sisi ekonomi, marketplace khusus kebudayaan hadir sebagai agregator teknologi yang menghubungkan langsung para perajin ulas, pemahat patung gorga, dan produsen kuliner lokal dengan konsumen global, memotong jalur distribusi tengkulak secara signifikan."
            delay="0.5s"
          />

          <ContentBlock
            imageSrc={ImgGeospasialToba}
            title="Sistem Monitoring Geospasial Kaldera Danau Toba"
            shortText="Pemanfaatan teknologi satelit, pemetaan GIS, dan sensor IoT untuk menjaga kelestarian lingkungan serta situs sejarah di kawasan super prioritas Toba."
            fullText="Sebagai kawasan UNESCO Global Geopark, kelestarian lingkungan Danau Toba dipantau ketat menggunakan teknologi Geographic Information System (GIS) dan sensor Internet of Things (IoT) yang mendeteksi kualitas air serta deforestasi hutan secara real-time. Peta geospasial interaktif ini juga diintegrasikan ke dalam aplikasi pariwisata pintar (smart tourism) untuk memetakan jalur situs geologi, koordinat situs sejarah terpencil, serta mengarahkan wisatawan secara presisi melalui teknologi Augmented Reality (AR) guna memberikan pengalaman edukasi budaya yang imersif."
            delay="0.6s"
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

export default PerkembanganTeknologi;
