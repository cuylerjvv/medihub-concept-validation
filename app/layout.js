import './globals.css'
import { Inter } from 'next/font/google'
import { AuthStateChangeContextProvider } from './context/AuthStateChangeContext'
import Head from 'next/head'
import Footer from '@components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Testing Next and Firebase',
  description: 'I am testing NextJS and Firebase authentication',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <main className='min-h-screen'>
          <AuthStateChangeContextProvider>
            <div>
              {children}
            </div>
          </AuthStateChangeContextProvider>
        </main>
        <Footer />
      </body>
    </html>
  )
}
