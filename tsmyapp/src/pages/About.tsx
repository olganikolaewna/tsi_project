import React, { PureComponent, ReactNode } from 'react';

interface Props {
  // Определите пропсы, если они нужны
}

interface State {
  // Определите состояние, если оно вам нужно
}

class About extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      // Инициализация состояния, если это необходимо
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
