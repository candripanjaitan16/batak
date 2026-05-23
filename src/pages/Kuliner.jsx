import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoJabuBolon from "../assets/logojabubolon.png";
import ImgArsik from "../assets/arsik.png";
import ImgSaksang from "../assets/saksang.png";
import ImgNaniura from "../assets/naniura.png";
import ImgMieGomak from "../assets/miegomak.png";
import ImgLappet from "../assets/lappet.png";

function Kuliner() {
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
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="text-cyan-300 transition cursor-pointer bg-transparent border-none p-0 font-medium"
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
                  onClick={() => navigate("/tradisi")}
                  className="cursor-pointer bg-transparent border-none p-0 text-left w-full text-white text-lg font-medium"
                >
                  Tradisi
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
            Cita Rasa{" "}
            <span className="text-cyan-300 block sm:inline">Kuliner Batak</span>
          </h1>
          <p
            className={`max-w-3xl mx-auto text-base md:text-lg text-gray-200 leading-relaxed ${isVisible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            Menjelajahi keunikan warisan dapur Toba yang kaya akan bumbu rempah
            endemik hutan, mulai dari seni olahan ikan sakral hingga kudapan
            tradisional pengiring ritual.
          </p>
        </section>

        <div className="max-w-5xl mx-auto px-0 sm:px-5 space-y-12 relative z-10">
          <ContentBlock
            imageSrc={ImgArsik}
            title="Dengke Mas Na Niarsik (Ikan Mas Arsik)"
            shortText="Arsik adalah kuliner tradisional berbahan utama ikan mas yang dimasak perlahan bersama bumbu kuning khas bertenaga, menjadi simbol berkat dalam siklus adat Batak."
            fullText="Sajian ini wajib disajikan dalam kondisi utuh dari kepala hingga ekor tanpa dipotong-potong, melambangkan keutuhan rezeki dan kelancaran jalur kehidupan yang lurus. Kekhasan rasa arsik bersumber langsung dari perpaduan bumbu lokal endemik tanah Toba, seperti andaliman yang memberikan sensasi getar getir di lidah, asam gelugur, asam jungga, serta batang kecombrang (asam cekala). Dalam upacara pernikahan adat, pemberian Dengke Simudur-mudur (arsik) dari orang tua kepada sepasang pengantin membawa pesan filosofis yang dalam agar keduanya selalu seiring sejalan, rukun, dan harmonis dalam membangun rumah tangga baru."
            delay="0.3s"
          />

          <ContentBlock
            imageSrc={ImgNaniura}
            title="Dengke Mas Na Niura (Sashimi Khas Toba)"
            shortText="Naniura adalah hidangan ikan mas mentah yang dimatangkan murni melalui proses fermentasi asam buah alami, tanpa sentuhan api atau proses memasak konvensional."
            fullText="Pada masa lalu, naniura merupakan kuliner eksklusif kenegaraan yang hanya boleh dibuat dan disajikan khusus untuk menjamu para raja. Proses pembuatannya menuntut tingkat higienitas dan kesabaran tinggi. Lembaran daging ikan mas segar yang telah dibersihkan secara detail akan direndam di dalam perasan air asam jungga selama berjam-jam hingga tekstur dagingnya melunak dan matang secara kimiawi. Setelah itu, ikan dilumuri dengan gilingan bumbu halus kaya rempah seperti andaliman, kemiri bakar, unte jungga, dan lengkuas. Hidangan ini sering disebut sebagai mahakarya kuliner karena menyajikan perpaduan rasa asam, gurih, dan getir yang sangat segar."
            delay="0.4s"
          />

          <ContentBlock
            imageSrc={ImgSaksang}
            title="Saksang (Olahan Rempah Autentik)"
            shortText="Saksang adalah hidangan daging tradisional khas Batak yang dimasak bersama paduan rempah-rempah pekat dan kelapa gongseng, menjadi menu wajib dalam pesta adat."
            fullText="Sajian ini umumnya menggunakan potongan daging yang dimasak secara perlahan bersama racikan bumbu dapur lengkap, termasuk andaliman, ketumbar, serai, dan bawang. Terdapat dua variasi pengolahan yang dikenal di masyarakat, yaitu masakan saksang yang dicampur dengan kuah darah dari daging itu sendiri untuk memperkuat cita rasa gurih yang khas, serta variasi saksang na margota yang murni diolah menggunakan racikan bumbu rempah tanpa campuran darah. Tekstur kuahnya yang kental dan aromanya yang tajam menjadikan hidangan ini sebagai pilar utama menu jamuan bersosialisasi komunal di tengah masyarakat."
            delay="0.5s"
          />

          <ContentBlock
            imageSrc={ImgMieGomak}
            title="Mie Gomak (Spageti Eksotis Tanah Batak)"
            shortText="Mie Gomak adalah hidangan mie kuah atau goreng khas tepian Danau Toba yang menggunakan bahan baku mie lidi berukuran tebal, sering dijuluki spageti lokal."
            fullText="Penamaan 'Gomak' diambil dari cara penyajian tradisional masa lalu di mana mie ini ditakar dan digenggam langsung menggunakan tangan (*dijomak*) ke dalam wadah piring. Racikan kuah mie gomak sangat istimewa karena menggunakan kaldu santan encer yang telah dibumbui dengan ulekan andaliman, kunyit, serai, dan cabai merah, menghasilkan sensasi hangat yang sangat pas dengan iklim dingin pegunungan Toba. Hidangan ini merupakan menu sarapan legendaris yang sangat merakyat dan mudah dijumpai di seluruh pasar tradisional maupun warung kopi di kawasan Tapanuli."
            delay="0.6s"
          />

          <ContentBlock
            imageSrc={ImgLappet}
            title="Kue Lappet & Ombus-ombus (Kudapan Tradisional)"
            shortText="Lappet dan Ombus-ombus adalah kue basah tradisional berbahan dasar tepung beras atau ketan yang diisi dengan parutan kelapa manis bercampur gula merah."
            fullText="Kedua kue ini dibungkus menggunakan daun pisang segar berbentuk kerucut meruncing lalu dimatangkan dengan cara dikukus. Perbedaan utamanya terletak pada tekstur kerapatan adonan dan bentuk cetakan pembungkusnya. Ombus-ombus memiliki tradisi penyajian yang unik, di mana kue ini wajib dihidangkan dalam kondisi yang masih mengepul panas (*diombus* atau ditiup) berdampingan dengan secangkir kopi hitam tanpa gula. Kudapan manis ini memegang peran sosial penting sebagai hidangan pembuka informal untuk menjamu para kerabat yang datang berkumpul dalam sela-sela persiapan sebuah pesta adat besar."
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

export default Kuliner;
