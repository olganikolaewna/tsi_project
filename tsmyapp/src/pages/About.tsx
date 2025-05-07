import React, { PureComponent, ReactNode } from 'react';
import { Helmet } from 'react-helmet';

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
        <>
        <Helmet>
                <title>About</title>
                <meta name = "description" content = "Cтраница о нас"></meta>
                <meta name = "keywords" content = "контакты, ключевые, слова, для, SEO"></meta>
        </Helmet>
      <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>
        About page
      </div>
      </>
    );
  }
}

export default About;
