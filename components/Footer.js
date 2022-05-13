import React from 'react'
import About from './Footer/About'
import Contact from './Footer/Contact'
import Social from './Footer/Social'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <footer id="footer" className="bg-[#081158] py-16">
      <div className="md:px-24 px-2">
        <div className="flex flex-col lg:flex-row items-center justify-even">
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
            <div className="mx-3 mb-8">
            <div className="text-white font-bold text-4xl mb-4">
                FitFactory
            </div>
              <p className="text-gray-300 font-odia text-lg font-light">
                Get immediate answer to your questions about your baby from
                trusted and curated pediatricians!
              </p>
              
            </div>
            <Social />
          </div>
          <div className='flex items-center flex-col md:flex-row  font-odia w-full justify-center'>
          <div className="w-full flex flex-col sm:w-1/2 md:w-1/2 lg:w-1/4">
              <div className="mx-3 flex flex-col text-white mb-8">
                <h3 className="font-bold text-left text-xl mb-5">LICENCING</h3>
                <ul className='text-xl font-light'>
                  <li><a href="" className="footer-links">Copyright Flow Ninja</a></li>
                  <li><a href="" className="footer-links">Powered By Me</a></li>
                  <li><a href="" className="footer-links">Licencing</a></li>
                  <li><a href="" className="footer-links">Support</a></li>
                </ul>
              </div>
            </div>
          <div className="w-full flex flex-col sm:w-1/2 md:w-1/2 lg:w-1/4">
              <div className="mx-3 flex flex-col text-white mb-8">
                <h3 className="font-bold text-left text-xl mb-5">Explore</h3>
                <ul className='text-xl font-light'>
                  <li><a href="" className="footer-links">Premium Courses</a></li>
                  <li><a href="" className="footer-links">Free Courses</a></li>
                  <li><a href="" className="footer-links">Blogs</a></li>
                  <li><a href="" className="footer-links">About</a></li>
                  <li><a href="" className="footer-links">Contact</a></li>
                  <li><a href="" className="footer-links">Features</a></li>
                </ul>
              </div>
            </div>
          
          <Contact />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
