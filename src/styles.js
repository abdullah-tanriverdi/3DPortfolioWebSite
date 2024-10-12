const styles = {
  // Yatay padding ayarları
  paddingX: "sm:px-16 px-6", // Küçük ekranlarda 16 birim, diğer ekranlarda 6 birim padding
  // Dikey padding ayarları
  paddingY: "sm:py-16 py-6", // Küçük ekranlarda 16 birim, diğer ekranlarda 6 birim padding
  // Genel padding ayarları
  padding: "sm:px-16 px-6 sm:py-16 py-10", // Küçük ekranlarda yatay ve dikey 16 birim, diğer ekranlarda yatay 6 birim ve dikey 10 birim padding

  // Ana başlık stili
  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  // Alt başlık stili
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  // Bölüm başlığı stili
  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  // Bölüm alt başlığı stili
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};

// Stilleri dışa aktar
export { styles };
