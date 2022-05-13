import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

function Contact() {
    return (
        <div className="justify-center text-2xl flex">
            <div className="sm:ml-0 flex flex-col items-center md:w-full text-white">
              <h2 className="uppercase  mb-5">Get In Touch</h2>
              <div>
              
                <div className="flex flex-wrap mb-6 items-center">
                  <div className="contact-icon">
                    <FaEnvelope/>
                  </div>
                  <p className="pl-3">
                    <a href="#" className="block">contact@fitfactory.com</a>
                  </p>
                </div>
                <div className="flex flex-wrap mb-6 items-center">
                  <div className="contact-icon">
                    <FaPhone/>
                  </div>
                  <p className="pl-3">
                    <a href="#" className="block">+91 xxxxxxx730</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
    )
}

export default Contact
