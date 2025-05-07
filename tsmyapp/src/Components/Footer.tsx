import React, { PureComponent } from 'react';

interface FooterProps {
  // Определите любые пропсы, которые ваш компонент может принимать
}

interface FooterState {
  // Определите состояние, если оно вам нужно
}

class Footer extends PureComponent<FooterProps, FooterState> {
  constructor(props: FooterProps) {
    super(props);

    this.state = {
      // Инициализация состояния, если это необходимо
    };
  }

  render() {
    return (
      <>
        <div className='fixed bottom-0 left-0 w-full bg-pink-400'>
          <div className="container mx-auto text-center">
            <h2 className="text-black text-lg font-semibold">Ваш помощник по уходу за кожей.</h2>
            <p className="mt-2">
              {/* Здесь можно добавить дополнительный текст, если нужно */}
            </p>
            <p className="mt-4 text-black">&copy; {new Date().getFullYear()} skin care. Все права защищены.</p>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
