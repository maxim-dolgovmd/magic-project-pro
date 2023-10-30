import '@/components/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Header from '../components/header/header'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import React from 'react'
import ScrollComponent from '../components/scroll/scrollComponent'

export default function App({ Component, pageProps }: AppProps) {
  
return (
    <Provider store={store}>
      <div style={inter.style}>
        <header>
          <Header />
        </header>
        <Component {...pageProps} />
        <ScrollComponent/>
      </div>
    </Provider>
)}
