import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

function Social() {
  return (
    <div className="mx-3 mb-8 flex flex-col md:items-start items-center">
      <div>
      <h3 className="font-bold text-xl text-white mb-5">Find us on</h3>
      </div>

      <div>
      <ul className="social-icons flex justify-start">
      <li className="mx-2">
          <a href="https://www.youtube.com/c/babynama/" className="footer-icon hover:bg-red-600">
            <FaYoutube />
          </a>
        </li>
        <li className="mx-2">
          <a href="https://www.facebook.com/groups/203625581851750/" className="footer-icon hover:bg-blue-600">
            <FaFacebook />
          </a>
        </li>
        <li className="mx-2">
          <a href="https://www.instagram.com/babynamahq/" className="footer-icon hover:bg-red-500">
            <FaInstagram />
          </a>
        </li>
        <li className="mx-2">
          <a href="https://twitter.com/BabyNama/" className="footer-icon hover:bg-blue-400">
            <FaTwitter />
          </a>
        </li>
        <li className="mx-2">
          <a href="https://www.linkedin.com/company/babynama/" className="footer-icon hover:bg-blue-600">
            <FaLinkedin />
          </a>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Social
