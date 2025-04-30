import React, { PureComponent } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Импорт иконок Instagram и WhatsApp из Font Awesome

class Header extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            // Здесь можно добавить переменные состояния, если необходимо
        };
    }

    render() {
        return (
            <>
                <div className='fixed top-0 left-0 w-full bg-pink-400 py-4'>
                    <div className="container mx-auto flex justify-between items-center px-4">
                        <h1 className="text-2xl font-mono text-gray-800 mr-4">
                            skin care
                        </h1>
                        <div className="flex space-x-6 mr-32">
                            <a className="text-gray-800 hover:text-gray-600 flex items-center" href="/home">
                                домой
                            </a>
                            <a className="text-gray-800 hover:text-gray-600 flex items-center" href="/about">
                                о нас
                            </a>
                            <a className="text-gray-800 hover:text-gray-600 flex items-center" href="/contacts">
                                контакты
                            </a>
                           
                            
                        </div>
                        <div className="flex space-x-6 ml-78">
                        <a className="text-gray-800 hover:text-gray-600 flex items-center" href="https://www.instagram.com/lalullka?igsh=MWhzandod3ZhbHl5NQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="w-6 h-6" />
                            </a>
                            <a className="text-gray-800 hover:text-gray-600 flex items-center" href="https://chat.whatsapp.com/BayLVcXdddTINx22SLP6fD" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="w-6 h-6" />
                            </a>
                            
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;