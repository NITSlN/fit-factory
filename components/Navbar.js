import Button from './Button'
import { useState, useEffect } from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import { AiOutlineAlignLeft, AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'

function Navbar() {
  const [fixNav, setFixNav] = useState(false)
  const [sideNav, setSideNav] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', changeNavBackground)
    window.addEventListener('resize', reportWindowSize)
    return () => {
      window.removeEventListener('scroll', changeNavBackground)
      window.removeEventListener('resize', reportWindowSize)
    }
  }, [])

  const reportWindowSize = () => {
    if (window.innerWidth >= 768 && sideNav === true) {
      setSideNav(false)
      console.log('set false')
    }
  }
  const changeNavBackground = () => {
    if (window.scrollY >= 50) {
      setFixNav(true)
    } else {
      setFixNav(false)
    }
  }

  return (
    <div
      className={`flex justify-center items-center h-[80px] z-10 fixed bg-white/20 backdrop-blur-md w-full top-0 ${
        fixNav ? 'bg-white' : ''
      } `}
    >
      <div className="flex z-10 justify-between w-[95%]">
        <Link href="/" >
        <a className="text-blue-900 font-bold text-2xl">
          FitFactory
        </a>
        </Link>
        <div className="gap-1 flex text-blue-900">
          <div className="md:flex items-center hidden">
            <Link href="/">
              <a className="px-6 py-2">About</a>
            </Link>
            <Link href="/">
              <a className="px-6 py-2" href="">
                Free Workouts
              </a>
            </Link>

            <Link href="/">
              <a className="px-6 py-2" href="">
                Shop
              </a>
            </Link>
            <Button text={'BOOK A CALL'} />
          </div>
          <div
            onClick={() => setSideNav(true)}
            className="md:hidden items-center cursor-pointer flex "
          >
            <AiOutlineAlignLeft className="scale-150" />
          </div>
          <a className="mx-6 my-2 scale-125 self-center" href="">
            <BsFillCartFill />
          </a>
        </div>
        <div
          className={`fixed md:hidden right-0 flex-col top-0 h-[100vh] duration-[0.7s] ease-in-out ${
            sideNav ? '' : 'translate-x-[100%]'
          } flex items-center py-24 px-12 bg-[#cfddee] w-full sm:w-1/2`}
        >
          <div
            className="flex text-center flex-col"
            onClick={() => setSideNav(false)}
          >
            <AiOutlineClose className="scale-[200%] text-gray-600 cursor-pointer" />
          </div>
          <div className="text-center my-12">
            <div className="px-6 py-5 tracking-wider cursor-pointer">About</div>
            <div className="px-6 py-5 tracking-wider cursor-pointer">Free Workouts</div>
            <div className="px-6 py-5 tracking-wider cursor-pointer">Shop</div>
            <Button text={'BOOK A CALL'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
