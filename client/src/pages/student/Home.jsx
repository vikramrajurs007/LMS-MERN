import React from 'react'
import Hero from '../../components/student/Hero'
import SearchBar from '../../components/student/SearchBar'
import Companies from '../../components/student/Companies'
import CoursesSection from '../../components/student/CoursesSection'
import TestimonialSection from '../../components/student/TestimonialSection'
import CallToAction from '../../components/student/CallToAction'
import Footer from '../../components/student/Footer'

const Home = () => {
  return (
    <div className='mb-0  flex flex-col  items-center space-y-7 text-center '>
      <Hero/>
      <Companies/>
      <CoursesSection/>
      <TestimonialSection/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default Home