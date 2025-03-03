import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}

class Home extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <h1 style={{ backgroundColor: 'lightpink', padding: '20px' }}>Home</h1>
        )
    }
}

export default Home
