import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FilterQueryParamsProvider } from '@/contexts/FilterQueryParamsContext'
import { TransitionProvider } from '@/contexts/TransitionContext'

import theme from '../config/theme'
import '../css/globals.css'

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Brew Mates - A beer for friends',
  description: 'A beer for friends'
}

// Google Analytics Measurement ID
const MEASUREMENT_ID = 'G-MKB0B2SXXB'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${MEASUREMENT_ID}');
      `}
            </Script>
          </>
        )}
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <ThemeProvider theme={theme}>
            <TransitionProvider>
              <FilterQueryParamsProvider>
                <Header />
                <Toolbar />
                <Box component="main" sx={{ minHeight: '100vh' }}>
                  {children}
                </Box>
                <Footer />
              </FilterQueryParamsProvider>
            </TransitionProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
