import { useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../style'
import { navLinks, socials } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [ active, setActive ] = useState("")
  const [ toggle, setToggle ] = useState(false)

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-30 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md`}
    >
      <div className="w-full flex justify-between items-center mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          <img 
            src={logo}
            alt="navLogo" 
            className="w-9 h-9 object-contain" 
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Faizahel Joasa Ariesta &nbsp; <span className="sm:block hidden">- Developer</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-20 border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white transition duration-300 ease-in-out text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="hidden sm:flex flex-row gap-5">
          {socials.map((socials) => (
            <a href={socials.link} key={socials.name}>
              <img 
                src={socials.src}
                alt={socials.name}
                key={socials.name}
                width={30}
                height={30}
                className="cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
              />
            </a>
          ))}
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
            src={toggle ? close : menu} 
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)} 
          />

          <div 
            className={
              `${!toggle ? 'hidden' : 'flex'} 
              p-6 shadow-lg shadow-[#7042f861]/50 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl flex flex-col gap-5`
            }
          >
            <div className="flex flex-row gap-5">
              {socials.map((socials) => (
                <a href={socials.link} key={socials.name}>
                  <img 
                    src={socials.src}
                    alt={socials.name}
                    key={socials.name}
                    width={30}
                    height={30}
                    className="cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
                  />
                </a>
              ))}
            </div>

            <ul className="list-none flex justify-end items-center flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-white"
                      : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(link.title)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar