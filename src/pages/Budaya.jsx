import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoJabuBolon from "../assets/logojabubolon.png";
import ImgRumahBolon from "../assets/rumahbolon.png";
import ImgUlos from "../assets/ulos.png";
import ImgGondang from "../assets/gondang.png";
import ImgGorga from "../assets/gorga.png";
import ImgTortor from "../assets/tortor.png";

function Budaya() {
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
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="text-cyan-300 transition cursor-pointer bg-transparent border-none p-0 font-medium"
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
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setMenuOpen(false);
                  }}
                  className="cursor-pointer bg-transparent border-none p-0 text-left w-full text-cyan-300 text-lg font-medium"
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
            Kekayaan{" "}
            <span className="text-cyan-300 block sm:inline">Budaya Batak</span>
          </h1>
          <p
            className={`max-w-3xl mx-auto text-base md:text-lg text-gray-200 leading-relaxed ${isVisible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            Eksplorasi mahakarya peradaban Toba yang meliputi arsitektur megah,
            kain tenun bernilai spiritual tinggi, kesenian musik tradisi, ragam
            ukiran seni, hingga tarian sakral ritual leluhur.
          </p>
        </section>

        <div className="max-w-5xl mx-auto px-0 sm:px-5 space-y-12 relative z-10">
          <ContentBlock
            imageSrc={ImgRumahBolon}
            title="Arsitektur Rumah Bolon & Jabu Hatubuan"
            shortText="Rumah Bolon merupakan rumah panggung tradisional khas Batak Toba yang dibangun dari kayu pilihan tanpa paku. Desain bangunannya berbentuk menyerupai kerbau yang sedang berdiri kokoh menantang alam."
            fullText="Setiap elemen pada Rumah Bolon memiliki simbol filosofis mendalam. Atapnya yang melengkung tajam melambangkan garis kehidupan dan cita-cita yang tinggi. Kolom fondasi yang tinggi berfungsi sebagai kandang ternak sekaligus pelindung dari ancaman hewan buas di masa lampau. Rumah ini dibagi menjadi tiga bagian vertikal yang mewakili kosmologi kuno Batak: Banua Ginjang (dunia atas/atap tempat dewa), Banua Tonga (dunia tengah/lantai tempat manusia hidup), dan Banua Toru (dunia bawah/kolong rumah). Orientasi hadap rumah juga diatur matang menghadap poros matahari terbit untuk menyambut energi kehidupan yang baru. Kehebatan seni arsitektur purba ini terbukti secara ilmiah dari tingkat fleksibilitas sambungan pasak kayunya yang sangat adaptif dan tahan terhadap guncangan gempa bumi berskala besar selama berabad-abad."
            delay="0.3s"
          />

          <ContentBlock
            imageSrc={ImgUlos}
            title="Kain Tenun Ulos & Nilai Spiritual"
            shortText="Ulos adalah karya seni tekstil tenun tradisional suku Batak yang memegang peran sakral. Lebih dari sekadar pakaian pelindung tubuh, ulos menjadi simbol restu, status sosial, dan saluran kasih sayang."
            fullText="Proses pembuatan ulos membutuhkan ketelitian tingkat tinggi karena ditenun secara manual menggunakan alat tradisional tonun. Suku Batak mengenal tradisi 'Mangulosi', yaitu ritual mengalungkan kain ulos kepada seseorang dalam acara adat besar seperti pernikahan (Ulos Hela), melahirkan anak, hingga upacara kematian (Ulos Saput). Terdapat berbagai macam jenis ulos dengan fungsi adat ketat yang tidak boleh tertukar. Misalnya, Ulos Ragidup yang melambangkan peta kehidupan, rajutan restu orang tua, dan umur panjang; Ulos Sadum yang penuh dengan ornamen warna cerah dinamis untuk melambangkan suasana sukacita kegembiraan; serta Ulos Ragi Hotang yang sering diberikan secara khusus kepada sepasang pengantin baru sebagai simbol pengikat komitmen pernikahan yang kuat, kokoh, dan tak terputus oleh tantangan zaman."
            delay="0.4s"
          />

          <ContentBlock
            imageSrc={ImgGondang}
            title="Ansambel Musik Gondang Sabangunan"
            shortText="Gondang Sabangunan adalah seperangkat instrumen musik perkusi dan tiup tradisional Batak Toba yang dimainkan dalam upacara adat, ritual keagamaan kuno, maupun pesta riang gembira masyarakat."
            fullText="Ansambel spiritual ini terdiri dari kombinasi Ogung (gong besar penentu ketukan dasar), Taganing (satu set drum melodis yang berfungsi ganda sebagai pembawa melodi utama), Gordang (gendang tunggal besar pembawa ritme dinamik), serta Sarune Bolon (alat musik tiup berlidah tunggal yang menghasilkan nada melengking magis dan ekspresif). Di masa lalu, Gondang Sabangunan dianggap sebagai media komunikasi spiritual suci untuk memanggil roh-roh suci para leluhur serta menyampaikan bait doa permohonan kepada Mulajadi Nabolon. Musik yang dihasilkan memiliki karakteristik transisi tempo yang sangat bertenaga, cepat, sekaligus mampu menciptakan nuansa khidmat transendental yang bergetar hebat di dalam relung hati siapapun yang mendengarnya."
            delay="0.5s"
          />

          <ContentBlock
            imageSrc={ImgGorga}
            title="Seni Ukir Gorga & Ornamen Simbolis"
            shortText="Gorga adalah seni dekorasi pahat atau lukis khas Batak Toba yang biasa ditemukan menghiasi bagian luar Rumah Bolon maupun peralatan kayu adat lainnya dengan perpaduan warna yang sangat ikonik."
            fullText="Seni ukir Gorga secara konsisten hanya menggunakan tiga warna dasar tradisional yang disebut Tiga Bolit, yaitu Merah (melambangkan keberanian, darah, dan kekuatan kehidupan fisik), Hitam (melambangkan kewibawaan, keteguhan hati, dan dunia rahasia leluhur), serta Putih (melambangkan kesucian pikiran, kejujuran, dan kebenaran moral). Setiap motif pahatan Gorga diambil secara stilatif dari bentuk alam semesta, tanaman menjalar, hingga anatomi hewan. Contohnya motif Gorga Simeol-meol yang melambangkan keluwesan dan kegembiraan hidup; Gorga Ipon-ipon sebagai pagar penjaga visual pelindung rumah dari marabahaya luar; serta Gorga Ulu Paung berbentuk kepala makluk mistis perkasa yang diletakkan persis di puncak atap depan untuk memberikan aura kewibawaan tinggi dan menjaga ketenteraman seluruh penghuninya."
            delay="0.6s"
          />

          <ContentBlock
            imageSrc={ImgTortor}
            title="Tari Tortor & Gerakan Estetika Ritual"
            shortText="Tortor merupakan tarian seremonial masyarakat Batak yang gerakannya seirama dengan ketukan Gondang. Seni tari ini memiliki posisi esensial dalam mengekspresikan nilai sosial."
            fullText="Gerakan dasar tari Tortor berpusat penuh pada dinamika jari-jari tangan yang merapat khidmat, gerakan melambai perlahan naik-turun, serta hentakan tumit kaki yang ritmis konstan mengikuti tempo pukulan drum Taganing. Setiap penari Tortor wajib menyampirkan kain ulos sesuai aturan kedudukan adatnya. Tarian ini dikelompokkan menjadi beberapa jenis fungsional, seperti Tortor Pangurason yang berfungsi sebagai ritual pembersih area dari pengaruh roh jahat sebelum upacara dimulai; Tortor Sipitu Cawan yang dibawakan secara langka oleh penari suci dengan keseimbangan membawa cawan air di atas kepala mereka; serta Tortor Haroan Bolon untuk menyambut rombongan tamu kehormatan. Gerakan telapak tangan yang menghadap ke atas luar melambangkan doa pasrah memohon limpahan berkat Sang Pencipta."
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

export default Budaya;
