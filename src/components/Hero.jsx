import { motion } from "framer-motion"; // Framer Motion kütüphanesinden animasyon bileşenini içe aktar

import { styles } from "../styles"; // Stil dosyasını içe aktar
import { ComputersCanvas } from "./canvas"; // Bilgisayar görselini içeren bileşeni içe aktar

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* Üst kısımda içerik için bir konteyner */}
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Sol tarafta bir gösterge ve dikey bir çizgi */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' /> {/* Gösterge için daire */}
          <div className='w-1 sm:h-80 h-40 violet-gradient' /> {/* Dikey çizgi */}
        </div>

        {/* Ana içerik alanı */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Abdullah</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software Engineer<br className='sm:block hidden' />
             {/* Mobil uygulama ve kullanıcı arayüzleri hakkında bilgi */}
          </p>
        </div>
      </div>

      {/* Bilgisayar görselinin bulunduğu bileşen */}
      <ComputersCanvas />

      {/* Aşağıdaki 'hakkında' kısmına kaydırma bağlantısı */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            {/* Animasyonlu ok simgesi */}
            <motion.div
              animate={{
                y: [0, 24, 0], // Yukarı ve aşağı hareket eden animasyon
              }}
              transition={{
                duration: 1.5, // Animasyon süresi
                repeat: Infinity, // Sonsuz tekrar
                repeatType: "loop", // Döngü tipi
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1' // Ok simgesi
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero; // Hero bileşenini dışa aktar
