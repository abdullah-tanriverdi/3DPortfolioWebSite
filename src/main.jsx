// React kütüphanesinden StrictMode bileşenini içe aktar
import { StrictMode } from 'react'
// ReactDOM kütüphanesinden createRoot fonksiyonunu içe aktar
import { createRoot } from 'react-dom/client'
// Uygulamanın ana bileşenini içe aktar
import App from './App.jsx'
// CSS stillerini içe aktar
import './index.css'

// Uygulamanın ana kökünü oluştur ve render et
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Ana uygulama bileşenini buraya yerleştir */}
    <App />
  </StrictMode>,
)
