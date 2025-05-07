import React, { PureComponent } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';


interface HeaderProps {
  
}


interface HeaderState {
  
}

class Header extends PureComponent<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <header className='fixed top-0 left-0 w-full bg-pink-400 py-4 z-50'>
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-mono text-gray-800 mr-4">
            skin care
          </h1>
          
          <nav className="flex space-x-6 mr-32">
            <a 
              className="text-gray-800 hover:text-gray-600 flex items-center" 
              href="/"
            >
              домой
            </a>
            <a 
              className="text-gray-800 hover:text-gray-600 flex items-center" 
              href="/about"
            >
              о нас
            </a>
            <a 
              className="text-gray-800 hover:text-gray-600 flex items-center" 
              href="/blog"
            >
              блог
            </a>
          </nav>
          
          <div className="flex space-x-6 ml-78">
            <a 
              className="text-gray-800 hover:text-gray-600 flex items-center" 
              href="https://www.instagram.com/lalullka?igsh=MWhzandod3ZhbHl5NQ%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a 
              className="text-gray-800 hover:text-gray-600 flex items-center" 
              href="https://chat.whatsapp.com/BayLVcXdddTINx22SLP6fD" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;