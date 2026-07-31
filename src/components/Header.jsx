import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import HanyLawrenceLogo from '../assets/HanyLawrenceLogo.png';

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  const scrollToSection = (href) => {
    setIsOpenMenu(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="relative z-50 px-6 py-1 bg-[#b35f6b]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo - Scrolls to Home */}
        <div 
          onClick={() => scrollToSection('#home')}
          className="text-white text-3xl font-black cursor-pointer select-none hover:opacity-90 transition-opacity"
        >
          <span className="text-pink-200">
            <img 
              src={HanyLawrenceLogo} 
              alt="Logo"
              width="150px"
              loading="lazy"
              className="brightness-0 invert"
            />
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-pink-100 hover:text-white text-base font-medium transition-colors cursor-pointer"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Contact Button - Updated with requested properties */}
          <button
            onClick={() => scrollToSection('#contact')}
            className="bg-linear-to-r from-[#F5D061] via-[#c08c2a] to-[#D4AF37] hover:scale-105 transition-all duration-300 ease-in-out text-white px-6 py-2.5 rounded-lg text-base font-semibold shadow-md active:scale-95 cursor-pointer"
          >
            Contact Me
          </button>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white focus:outline-none cursor-pointer"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          aria-label="Toggle menu"
        >
          {isOpenMenu ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Backdrop Overlay */}
      {isOpenMenu && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-40"
          onClick={() => setIsOpenMenu(false)}
        />
      )}

      {/* Mobile Slide-out Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#5e2230] z-50 transition-transform duration-300 md:hidden p-8 flex flex-col ${
          isOpenMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="self-end text-white mb-10 focus:outline-none cursor-pointer"
          onClick={() => setIsOpenMenu(false)}
          aria-label="Close menu"
        >
          <X size={32} />
        </button>
        <ul className="flex flex-col gap-8">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollToSection(item.href)}
                className="text-white text-xl font-semibold hover:text-pink-200 transition-colors w-full text-left cursor-pointer"
              >
                {item.name}
              </button>
            </li>
          ))}

          {/* Mobile Contact Button */}
          <li className="pt-6">
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full bg-linear-to-r from-[#F5D061] via-[#c08c2a] to-[#D4AF37] hover:scale-105 transition-all duration-300 ease-in-out text-white py-4 rounded-xl text-lg font-bold shadow-md active:scale-95 cursor-pointer"
            >
              Contact Me
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;