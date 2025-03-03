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
              <div>
      <a href="/home">Home</a>
    </div>
    <div>
      <a href="/about">About</a>
    </div>
    <div>
      <a href="/blog">Blog</a>
    </div>
              
            </>
        )
    }
}

export default Footer