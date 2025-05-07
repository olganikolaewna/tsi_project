import React, { PureComponent, ReactNode } from 'react';

interface Props {
}

interface State {
}

class About extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
    };
  }

  render(): ReactNode {
    return (
      <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>
        About page
      </div>
    );
  }
}

export default About;
