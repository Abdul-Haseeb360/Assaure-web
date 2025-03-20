import React from 'react'
import AboutNavbar from "@/components/AboutNavbar"
import Footer from '@/components/Footer'
import AboutHeroSection from '@/components/AboutHeroSection'
import SolutionsProvider from '@/components/SolutionsProvider'
import Consultation from '@/components/Consultation'
import OurPhilosphy from '@/components/OurPhilosphy'
import OurTeam from '@/components/OurTeam'
function page() {
  return (
    <div>
        <AboutNavbar/>
        <AboutHeroSection/>
        <SolutionsProvider showLearnMoreButton={false} />
        <OurPhilosphy/>
        <OurTeam/>
        <Consultation/>
        <Footer/>
    </div>
  )
}

export default page