import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import NavBar from '@/components/shared/NavBar'
import HeroSection from '@/components/homePage/HeroSection'
import StepsSection from '@/components/homePage/StepsSection'
import RatingSwiper from '@/components/homePage/RatingSwiper'
import Footer from '@/components/shared/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>ExaView | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
          <HeroSection/>
          <StepsSection/>
          <RatingSwiper/>
          <Footer/>
      </main>
    </>
  )
}
