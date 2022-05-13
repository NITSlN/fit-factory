import React from 'react'

function About() {
    return (
        <div className="w-full flex flex-col items-center sm:w-1/2 md:w-1/2 lg:w-1/4">
              <div className="mx-3 flex flex-col text-white mb-8">
                <h3 className="font-bold  text-xl mb-5">Quick Links</h3>
                <ul className='text-xl font-light'>
                  <li><a href="#hero-area" className="footer-links">Home</a></li>
                  <li><a href="#about" className="footer-links">About</a></li>
                  <li><a href="#feature" className="footer-links">Features</a></li>
                  <li><a href="#blogs" className="footer-links">Blogs</a></li>
                </ul>
              </div>
            </div>
    )
}

export default About
