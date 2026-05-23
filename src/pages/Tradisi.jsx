import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoJabuBolon from "../assets/logojabubolon.png";
import ImgMangongkalHoli from "../assets/mangongkalholi.png";
import ImgMartumpol from "../assets/martumpol.png";
import ImgMarariSabtu from "../assets/mararisabtu.png";
import ImgManulangi from "../assets/manulangi.png";
import ImgSopoGadang from "../assets/sopogadang.png";

function Tradisi() {
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
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="text-cyan-300 transition cursor-pointer bg-transparent border-none p-0 font-medium"
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
                  onClick={() => navigate("/sejarah")}
                  className="cursor-pointer bg-transparent border-none p-0 text-left w-full text-white text-lg font-medium"
                >
                  Sejarah
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/budaya")}
                  className="cursor-pointer bg-transparent border-none p-0 text-left w-full text-white text-lg font-medium"
                >
                  Budaya
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
            Siklus Kehidupan &{" "}
            <span className="text-cyan-300 block sm:inline">Tradisi Adat</span>
          </h1>
          <p
            className={`max-w-3xl mx-auto text-base md:text-lg text-gray-200 leading-relaxed ${isVisible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            Menyelami rangkaian upacara sakral dan ritual warisan leluhur yang
            terus dijaga ketat oleh masyarakat Batak sebagai bentuk penghormatan
            silsilah darah dan kebersamaan komunal.
          </p>
        </section>

        <div className="max-w-5xl mx-auto px-0 sm:px-5 space-y-12 relative z-10">
          <ContentBlock
            imageSrc={ImgMangongkalHoli}
            title="Upacara Mangongkal Holi (Gali Kubur Leluhur)"
            shortText="Mangongkal Holi adalah tradisi pembongkaran makam kuno untuk mengambil tulang-belulang leluhur, membersihkannya, lalu memindahkannya ke tempat baru berupa tugu batu megah."
            fullText="Ritual ini merupakan puncak tertinggi penghormatan terhadap orang tua atau leluhur dalam keluarga besar Batak. Pemindahan ini bertujuan untuk menyatukan seluruh jasad keluarga dalam satu tempat (tugu) agar garis keturunan mereka tetap terikat erat di masa depan. Mangongkal Holi membutuhkan dana yang sangat besar dan persetujuan seluruh anggota marga karena melibatkan pesta adat yang berlangsung berhari-hari lengkap dengan penyembelihan hewan ternak besar dan permainan musik Gondang Sabangunan. Secara sosiologis, keberhasilan menggelar upacara ini meningkatkan prestise, derajat, serta membawa keberkatan (hasangapon) bagi seluruh keluarga."
            delay="0.3s"
          />

          <ContentBlock
            imageSrc={ImgMartumpol}
            title="Tradisi Perjanjian Pranikah Martumpol"
            shortText="Martumpol adalah tahap ritual pranikah dalam adat Batak Toba yang menyerupai upacara pertunangan resmi, di mana kedua calon mempelai mengikat janji setia di hadapan jemaat gereja dan para tetua adat."
            fullText="Upacara ini dilakukan beberapa minggu sebelum pesta pernikahan besar digelar. Selama prosesi Martumpol, dilakukan penandatanganan dokumen perjanjian bersama serta pembahasan mendalam mengenai teknis adat perkawinan berikutnya, termasuk penentuan jumlah sinamot (mahar atau mas kawin) yang akan diserahkan oleh pihak laki-laki kepada keluarga perempuan. Tradisi ini sangat sakral karena berfungsi sebagai jaminan hukum sosial dan moral bahwa kedua belah pihak secara bulat berkomitmen melangkah ke jenjang pernikahan adat seutuhnya tanpa adanya unsur paksaan atau rahasia masa lalu."
            delay="0.4s"
          />

          <ContentBlock
            imageSrc={ImgMarariSabtu}
            title="Sistem Kepercayaan Ritual Parmalim"
            shortText="Parmalim adalah sebutan bagi para penghayat ajaran keagamaan tradisional Ugamo Malim, sebuah sistem spiritual murni suku Batak yang berpusat pada pemujaan kepada Debata Mulajadi Nabolon."
            fullText="Meskipun mayoritas masyarakat Batak modern memeluk agama monoteistik dunia, komunitas Parmalim di kawasan Huta Tinggi, Laguboti, tetap teguh menjalankan ritus spiritual nenek moyang mereka. Ajaran Parmalim sangat menekankan harmoni moral dengan alam, kejujuran perilaku, dan kebersihan jiwa. Ritual tahunan terbesar mereka dinamakan Sipaha Lima, sebuah upacara syukur massal atas hasil panen bumi melimpah yang diiringi persembahan khusus, tarian Tortor sakral, serta pelantunan bait doa kuno berirama magis untuk memohon perlindungan dari mara bahaya."
            delay="0.5s"
          />

          <ContentBlock
            imageSrc={ImgManulangi}
            title="Tradisi Manulangi Orang Tua (Menyuapi Makanan Adat)"
            shortText="Manulangi Ni Natua-tua adalah tradisi memberikan makanan khusus dengan menyuapi orang tua yang sudah lanjut usia secara khidmat oleh anak-anak kandung dan seluruh menantunya."
            fullText="Tradisi yang penuh tetesan air mata kebahagiaan ini dilakukan ketika orang tua sudah menginjak usia sangat senja atau sedang sakit berat, namun semua anak-anaknya dinilai sudah sukses mandiri (merantau atau berumah tangga). Makanan yang disajikan berupa hidangan adat terbaik, seperti ikan mas arsik utuh (Dengke). Satu per satu anak menyuapi orang tua sambil menyampaikan kata-kata berisi permohonan maaf, ungkapan terima kasih yang mendalam atas jasa membesarkan mereka, serta melantunkan doa tulus agar orang tua diberikan kesehatan dan umur yang panjang. Tradisi ini adalah perwujudan tertinggi dari nilai bakti anak dalam kebudayaan Batak."
            delay="0.6s"
          />

          <ContentBlock
            imageSrc={ImgSopoGadang}
            title="Hukum Adat Peradilan Sopo Godang"
            shortText="Sopo Godang secara fungsional merupakan balai sidang adat utama yang digunakan oleh para penatua adat dan para Raja Marga untuk membahas tatanan hukum kemasyarakatan."
            fullText="Di dalam bangunan semi-terbuka yang megah inilah seluruh kebijakan hukum sipil tradisional digodok secara musyawarah mufakat. Sopo Godang menjadi saksi isu penyelesaian berbagai konflik sosial penting seperti sengketa kepemilikan tanah ulayat, pelanggaran pantangan pernikahan satu marga, hingga penentuan sanksi moral bagi warga yang melanggar adat. Setiap keputusan yang diketuk di dalam balai musyawarah ini bersifat mengikat penuh dan wajib dipatuhi oleh seluruh anggota komunitas demi menjaga ketenteraman tatanan internal kehidupan desa."
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

export default Tradisi;
