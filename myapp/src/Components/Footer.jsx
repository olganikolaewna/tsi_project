import React, { PureComponent } from 'react'

class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
      return (
          <>
          <div className='fixed bottom-0 left-0 w-full bg-purple-300'>
              <div className="container mx-auto text-center">
              <h2 className="text-lg font-semibold">Магазин рукодельных украшений.</h2>
                <p className="mt-2">
                    
                </p>
                <p className="mt-4">&copy; {new Date().getFullYear()} Capybara Все права защищены.</p>
              </div>
          </div>
          </>
      );
    }
}

export default Footer