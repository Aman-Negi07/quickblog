import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import BlogList from '../components/BlogList'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <BlogList></BlogList>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  )
}

export default Home
