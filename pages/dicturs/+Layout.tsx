import './tailwind.css'

import { MotionConfig } from 'motion/react'
import { useEffect, type ReactNode } from 'react'
import { Footer } from './src/components/Footer'
import { Navbar } from './src/components/Navbar'
import { I18nextProvider } from 'react-i18next'
import i18n, { detectLanguage, setLanguage } from './src/i18n'

export function Layout({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lang = detectLanguage()
    if (lang !== 'en') setLanguage(lang)
  }, [])

  return (
    <I18nextProvider i18n={i18n}>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-base-100 text-base-content">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </MotionConfig>
    </I18nextProvider>
  )
}
