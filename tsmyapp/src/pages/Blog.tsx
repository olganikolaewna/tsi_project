import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}

class Blog extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <div style={{ backgroundColor: 'red', padding: '20px' }}>Blog</div>
        )
    }
}

export default Blog
