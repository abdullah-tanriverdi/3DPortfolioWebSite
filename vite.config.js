import { defineConfig } from 'vite' // Vite yapılandırmasını tanımlamak için gerekli fonksiyon içe aktarılıyor
import react from '@vitejs/plugin-react' // React uygulamaları için gerekli Vite eklentisi içe aktarılıyor

// https://vitejs.dev/config/ // Vite yapılandırması hakkında daha fazla bilgi için referans

export default defineConfig({
  // Vite yapılandırma nesnesi
  plugins: [react()], // React eklentisi yapılandırmaya ekleniyor
})
