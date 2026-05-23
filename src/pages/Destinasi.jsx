import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoJabuBolon from "../assets/logojabubolon.png";
import ImgPusukBuhit from "../assets/puncakpusukbuhit.png";
import ImgSiallagan from "../assets/siallagan.png";
import ImgSipisopiso from "../assets/sipisopiso.png";
import ImgHolbung from "../assets/holbung.png";
import ImgSitumurun from "../assets/situmurun.png";
import ImgBakkara from "../assets/bakkara.png";

function Destinasi() {
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
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="text-cyan-300 transition cursor-pointer bg-transparent border-none p-0 font-medium"
                >
                  Destinasi
                </button>
              </li>
              <li className="relative">
                <button
                  onClick={() => setSubmenuOpen(!submenuOpen)}
                  className="hover:text-cyan-300 transition flex items-center gap-1 text-white font-medium bg-transparent border-none"
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
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setMenuOpen(false);
                  }}
                  className="cursor-pointer bg-transparent border-none p-0 text-left w-full text-cyan-300 text-lg font-medium"
                >
                  Destinasi
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSubmenuOpen(!submenuOpen)}
                  className="flex items-center gap-2 w-full text-white text-lg font-medium bg-transparent border-none text-left"
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
            Situs &{" "}
            <span className="text-cyan-300 block sm:inline">
              Destinasi Toba
            </span>
          </h1>
          <p
            className={`max-w-3xl mx-auto text-base md:text-lg text-gray-200 leading-relaxed ${isVisible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            Eksplorasi keajaiban lanskap vulkanik purba yang berpadu dengan
            situs-situs suci peninggalan leluhur, menciptakan pengalaman
            perjalanan yang magis di jantung Sumatera Utara.
          </p>
        </section>

        <div className="max-w-5xl mx-auto px-0 sm:px-5 space-y-12 relative z-10">
          <ContentBlock
            imageSrc={ImgPusukBuhit}
            title="Gunung Pusuk Buhit: Puncak Suci Leluhur"
            shortText="Pusuk Buhit adalah gunung vulkanik aktif setinggi 1.980 mdpl yang diyakini sebagai tempat turunnya Siraja Batak, leluhur pertama bangsa Batak ke bumi."
            fullText="Gunung ini merupakan geosite penting dalam Kaldera Toba yang diselimuti nilai spiritual tinggi. Bagi masyarakat Batak, mendaki Pusuk Buhit bukan sekadar aktivitas olahraga, melainkan perjalanan ziarah. Di lerengnya terdapat desa Sianjur Mula-mula yang legendaris, di mana terdapat Rumah Parsaktian (tempat doa) dan mata air Aek Sipitu Dai yang dianggap sakral. Dari puncaknya, wisatawan dapat menikmati panorama 360 derajat kemegahan Danau Toba yang seringkali tertutup kabut tipis, memberikan atmosfer mistis yang menenangkan jiwa."
            delay="0.3s"
          />

          <ContentBlock
            imageSrc={ImgSiallagan}
            title="Huta Siallagan: Situs Hukum Batu Kuno"
            shortText="Terletak di Desa Ambarita, Pulau Samosir, situs ini merupakan perkampungan Batak kuno yang menyimpan peninggalan kursi batu persidangan berusia ratusan tahun."
            fullText="Huta Siallagan dikelilingi tembok batu setinggi 2 meter yang dulunya ditanami bambu berduri untuk pertahanan. Di tengah kampung berdiri megah Ruma Bolon, namun daya tarik utamanya adalah Batu Parsidangan. Di meja batu ini, Raja Laga Siallagan bersama para penasihat adat mengadili pelanggar hukum berat. Situs ini menjadi bukti nyata bahwa suku Batak telah mengenal sistem peradilan yang terstruktur jauh sebelum hukum modern masuk. Pengunjung dapat melihat langsung lokasi eksekusi dan makam para raja yang masih terjaga keasliannya di bawah naungan pohon Hariara yang suci."
            delay="0.4s"
          />

          <ContentBlock
            imageSrc={ImgSipisopiso}
            title="Air Terjun Sipiso-piso: Sang Penjaga Kaldera"
            shortText="Sipiso-piso merupakan air terjun tertinggi di Indonesia yang mengalir deras dari sungai bawah tanah lalu jatuh vertikal sejauh 120 meter ke bibir Danau Toba."
            fullText="Nama Sipiso-piso diambil dari bahasa Karo yang berarti 'seperti pisau', menggambarkan derasnya aliran air yang seolah-olah membelah tebing curam. Terletak di Tongging, destinasi ini menawarkan pemandangan dramatis dari gardu pandang atas yang memperlihatkan garis air terjun yang lurus sempurna berlatar belakang hamparan biru Danau Toba. Bagi wisatawan yang memiliki stamina kuat, terdapat jalur tangga seribu untuk turun ke dasar air terjun guna merasakan langsung hempasan uap air yang segar dan melihat vegetasi pinus yang rimbun di sekeliling tebing vulkanik tersebut."
            delay="0.5s"
          />

          <ContentBlock
            imageSrc={ImgHolbung}
            title="Bukit Holbung: Panorama Teletubbies Samosir"
            shortText="Bukit Holbung dikenal sebagai 'Bukit Teletubbies' karena kontur perbukitannya yang bergelombang hijau memikat, menawarkan sudut pandang terbaik Danau Toba dari ketinggian."
            fullText="Bukit ini menjadi viral setelah menjadi lokasi syuting film nasional dan semakin populer bagi para pecinta camping. Terletak di Desa Janji Martahan, akses pendakian ke puncaknya relatif mudah dan landai. Saat musim hujan, bukit ini akan berwarna hijau pekat, sementara di musim kemarau akan terlihat eksotis dengan warna cokelat kekuningan. Di sisi bukit, pengunjung dapat melihat desa-desa di lereng gunung dan kapal-kapal nelayan yang tampak kecil di permukaan danau. Waktu terbaik berkunjung adalah saat matahari terbit atau terbenam untuk mendapatkan cahaya keemasan yang sempurna."
            delay="0.6s"
          />

          <ContentBlock
            imageSrc={ImgSitumurun}
            title="Air Terjun Situmurun: Fenomena Aliran Langsung"
            shortText="Air terjun unik setinggi 70 meter ini memiliki keistimewaan luar biasa karena alirannya tidak jatuh ke tanah, melainkan langsung terjun ke dalam air Danau Toba."
            fullText="Hanya bisa diakses menggunakan kapal motor dari Parapat atau Balige, Situmurun menawarkan sensasi berenang di tepi danau tepat di bawah curahan air terjun. Nama Situmurun diambil dari kata 'Binangalom' yang berarti air penyejuk hati. Airnya sangat jernih dan segar karena berasal dari hutan lindung di atas perbukitan. Wisatawan seringkali menyewa kapal untuk berpiknik di depan air terjun ini sambil menikmati ikan bakar khas Toba, menciptakan momen santai yang sangat eksklusif dengan suara gemuruh air sebagai latarnya."
            delay="0.7s"
          />

          <ContentBlock
            imageSrc={ImgBakkara}
            title="Lembah Bakkara: Tanah Kelahiran Sang Raja"
            shortText="Lembah hijau di pinggiran Danau Toba ini merupakan tempat kelahiran Pahlawan Nasional Raja Sisingamangaraja XII, pimpinan perang legendaris suku Batak."
            fullText="Bakkara diapit oleh dua aliran sungai besar, Aek Silang dan Aek Simangira, yang membelah lembah subur ini sebelum bermuara ke Toba. Di sini terdapat istana kuno peninggalan dinasti Sisingamangaraja dan pemandian Aek Sipangolu yang dipercaya muncul karena hentakan tongkat sakral sang raja. Lanskapnya yang diapit tebing tinggi membuat Bakkara memiliki iklim mikro yang sejuk dan tanah yang sangat subur untuk pertanian bawang merah dan kakao. Kunjungan ke lembah ini memberikan perspektif mendalam mengenai sejarah perlawanan Batak terhadap kolonialisme Belanda."
            delay="0.8s"
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
          className="w-full lg:w-1/3 h-48 sm:h-64 lg:h-52 object-cover rounded-2xl border border-cyan-300/20 bg-cyan-950/50 flex-shrink-0"
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

export default Destinasi;
