import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoJabuBolon from "../assets/logojabubolon.png";
import ImgPusukBuhit from "../assets/pusukbuhit.png";
import ImgDalihan from "../assets/dalihan.png";
import ImgSisingamangaraja from "../assets/sisingamangaraja.png";
import ImgPustaha from "../assets/pustaha.png";
import ImgModernisasi from "../assets/modernisasi.png";

function Sejarah() {
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
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="text-cyan-300 transition cursor-pointer bg-transparent border-none p-0 font-medium"
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
                  className="hover:text-cyan-300 transition flex items-center gap-1 text-white font-medium bg-transparent border-none"
                >
                  Teknologi
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
                  onClick={() => navigate("/")}
                  className="cursor-pointer bg-transparent border-none p-0 text-left w-full text-white text-lg font-medium"
                >
                  Beranda
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
                  className="flex items-center gap-2 w-full text-white text-lg font-medium bg-transparent border-none text-left"
                >
                  Teknologi
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
            Jejak Langkah{" "}
            <span className="text-cyan-300 block sm:inline">Bangsa Batak</span>
          </h1>
          <p
            className={`max-w-3xl mx-auto text-base md:text-lg text-gray-200 leading-relaxed ${isVisible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            Menelusuri ribuan tahun peradaban murni leluhur, mulai dari puncak
            sakral gunung Pusuk Buhit hingga bertransformasi menjadi salah satu
            pilar kebudayaan terbesar di Nusantara.
          </p>
        </section>

        <div className="max-w-5xl mx-auto px-0 sm:px-5 space-y-12 relative z-10">
          <ContentBlock
            imageSrc={ImgPusukBuhit}
            title="Asal-Usul & Legenda Pusuk Buhit"
            shortText="Berdasarkan mitologi turun-temurun, seluruh garis keturunan suku Batak berasal dari satu leluhur yaitu Siraja Batak, yang diyakini pertama kali diturunkan oleh Mulajadi Nabolon di puncak Gunung Pusuk Buhit, wilayah barat Danau Toba."
            fullText="Pusuk Buhit dipandang sebagai titik awal kosmologis kehidupan peradaban Batak. Berdasarkan penelitian sejarah dan antropologi modern, kelompok masyarakat pendahulu suku Batak merupakan bagian dari gelombang migrasi rumpun Proto-Melayu (Melayu Tua). Mereka bergerak dari daratan Asia Tenggara, khususnya wilayah Yunan di Cina Selatan dan Indochina, menyeberangi lautan hingga mendiami pedalaman pegunungan Sumatera Utara sekitar 2.500 hingga 3.000 tahun sebelum masehi. Di tempat baru yang terisolasi secara geografis inilah mereka melahirkan kebudayaan agraris yang sangat kuat serta tasanan hukum adat yang independen. Isolasi geologis ini membentuk struktur sosial yang tidak terpengaruh oleh kerajaan Hindu-Buddha besar di sekitarnya pada masa awal berkembang."
            delay="0.3s"
          />

          <ContentBlock
            imageSrc={ImgDalihan}
            title="Sistem Marga & Dalihan Na Tolu"
            shortText="Identitas jati diri seorang perantau atau masyarakat Batak bertumpu sepenuhnya pada marga. Lebih dari sekadar pelengkap nama keluarga belakang, marga mengikat hukum darah yang diatur melalui sistem kekerabatan filosofis Dalihan Na Tolu."
            fullText="Dalihan Na Tolu secara harfiah berarti 'Tungku Beraki Tiga', sebuah konsep susunan kemasyarakatan yang kokoh dan seimbang. Tiga pilar utamanya meliputi: Somba Marhula-hula (menghormati keluarga pihak istri sebagai sumber berkat), Elek Marboru (bersikap lemah lembut dan mengayomi pihak keluarga yang menerima istri), serta Manat Mardongan Tubu (berhati-hati dan menjaga kerukunan dengan saudara laki-laki satu marga). Aturan adat ini mendikte seluruh ritual peradaban Batak, mulai dari sistem silsilah pernikahan, tata cara pemakaman, hingga penyelesaian perselisihan hukum adat secara internal tanpa campur tangan pihak luar. Kedudukan ketiganya fungsional dan dinamis dalam struktur kehidupan bermasyarakat."
            delay="0.4s"
          />

          <ContentBlock
            imageSrc={ImgSisingamangaraja}
            title="Era Kepemimpinan & Heroisme Sisingamangaraja XII"
            shortText="Sejarah panjang peradaban Batak mencatat perlawanan bersenjata paling gigih menentang upaya kolonisasi asing. Raja Sisingamangaraja XII memimpin Perang Batak selama tiga dekade penuh demi menjaga kemerdekaan tanah Toba."
            fullText="Sisingamangaraja XII bukan sekadar penguasa monarki sekuler, melainkan pemimpin spiritual tertinggi yang memegang teguh amanah kepercayaan kuno. Ketika pihak kolonial Belanda mulai memaksakan dominasi politik dan jalur monopoli perdagangan ke wilayah pedalaman Toba pada akhir abad ke-19, beliau mengobarkan perang gerilya yang dahsyat (1877–1907). Dengan memanfaatkan benteng pertahanan alam pegunungan batu yang curam serta kecintaan rakyat yang loyal, pasukan Batak berhasil menyulitkan taktik militer modern Belanda. Perjuangan tanpa lelah tersebut akhirnya berakhir secara tragis saat beliau gugur dalam pertempuran di pedalaman Dairi pada tahun 1907, menandai akhir dari kedaulatan politik independen tanah Batak."
            delay="0.5s"
          />

          <ContentBlock
            imageSrc={ImgPustaha}
            title="Sistem Literasi Aksara Kuno & Pustaha Laklak"
            shortText="Suku Batak merupakan satu dari sedikit komunitas suku asli di Nusantara yang telah berhasil mengembangkan sistem tulisan dan literasi mandiri sejak abad kuno, membuktikan tingginya peradaban intelektual mereka."
            fullText="Aksara Batak atau yang sering diistilahkan sebagai 'Surat Batak' merupakan sistem penulisan silabis yang diturunkan dari aksara Brahmi kuno India. Tulisan ini diaplikasikan untuk mencatat naskah-naskah penting di atas media kulit kayu pohon alim yang dilipat sedemikian rupa, yang dinamakan Pustaha Laklak. Dokumen rahasia kuno ini berisi kumpulan catatan mendalam mengenai formula obat-obatan herbal tradisional, ilmu astronomi kuno untuk memprediksi hari baik dan buruk (Parhalaan), hukum adat dasar, hingga mantra-mantra spiritual religius. Keberadaan naskah beraksara asli ini menjadi bukti otentik bahwa pola pikir masyarakat Batak kuno sudah sangat maju, terdokumentasi, dan terstruktur dengan sangat rapi."
            delay="0.6s"
          />

          <ContentBlock
            imageSrc={ImgModernisasi}
            title="Transformasi Sosial & Era Modernisasi"
            shortText="Memasuki awal abad ke-20 setelah runtuhnya pertahanan politik Toba, tatanan sosial keagamaan masyarakat Batak mengalami perubahan masif seiring meluasnya pengaruh dunia luar dan misi pengabaran injil."
            fullText="Kedatangan para misionaris Eropa, yang dipelopori secara signifikan oleh Dr. Ludwig Ingwer Nommensen asal Jerman, membuka gerbang baru bagi modernisasi masyarakat Batak Toba. Melalui pembangunan jaringan institusi pendidikan formal modern, fasilitas layanan kesehatan medis, serta peletakan fondasi organisasi keagamaan formal, masyarakat Batak bertransformasi dengan cepat menjadi kaum terpelajar. Bekal tingkat literasi pendidikan tinggi ini memicu gelombang urbanisasi besar-besaran (merantau) ke berbagai kota besar di Indonesia. Di era modern saat ini, diaspora masyarakat Batak telah memegang peran-peran vital di panggung nasional, mulai dari sektor hukum, pemerintahan, militer, hingga dunia industri kreatif global."
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

export default Sejarah;
