import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

// ESLint yapılandırma dizisi
export default [
  // 'dist' dizinini yok say
  { ignores: ['dist'] },
  
  {
    // JavaScript ve JSX dosyalarını hedefle
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      // ECMAScript sürümünü belirt
      ecmaVersion: 2020,
      // Tarayıcıda global değişkenleri tanımla
      globals: globals.browser,
      parserOptions: {
        // En son ECMAScript sürümünü kullan
        ecmaVersion: 'latest',
        // JSX kullanımını etkinleştir
        ecmaFeatures: { jsx: true },
        // Modül sistemi kullan
        sourceType: 'module',
      },
    },
    // React versiyonunu ayarla
    settings: { react: { version: '18.3' } },
    // Kullanılan eklentiler
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    // Kurallar
    rules: {
      // Önerilen kuralları dahil et
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      // Yeni sayfa açarken _blank hedefini yasakla
      'react/jsx-no-target-blank': 'off',
      // Sadece bileşenleri dışa aktarın uyarısını ayarla
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
