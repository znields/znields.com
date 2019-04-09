import React from 'react';
import { Row, Col } from 'react-grid-system';
import Section from '../components/Section';
import SmallLink from '../components/SmallLink';
import Project from '../components/Project';

const style = {
  paddingLeft: '8vw',
  paddingRight: '8vw',
  paddingTop: '4vh',
};

function Body() {
  return (
    <div style={style}>
      <Section title="About Me">
        {"I'm a 2nd-year computer science undergrad at the "}
        <SmallLink href="http://www.ufl.edu/">University of Florida</SmallLink>
        {". While I'm not big on going to class, I enjoy learning and creating  "}
        {' In addition to side projects, I like good design, efficiency, and utility. '}
        {"While I'm not in in front of a computer, I enjoy playing basketball and reading."}
      </Section>

      <Section title="Projects" style={{ width: '100vh' }}>
        <Row>
          <Project
            title="DeepTrash"
            icon="https://raw.githubusercontent.com/isaiahnields/deep-trash/master/icon.png"
            stack={['Arduino', 'Keras', 'Tensorflow', 'Raspberry Pi']}
          >
            An intelligent trashcan that automatically sorts your waste for you!
          </Project>
        </Row>
      </Section>

      <Section title="Writing" style={{ width: '100vh' }}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat consequat mauris nunc congue. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Cursus sit amet dictum sit. Tellus in metus vulputate eu scelerisque felis. Sit amet justo donec enim. Sit amet cursus sit amet dictum sit amet. Gravida quis blandit turpis cursus in hac habitasse platea. Consequat interdum varius sit amet. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Euismod elementum nisi quis eleifend quam. Turpis in eu mi bibendum neque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Nullam vehicula ipsum a arcu cursus vitae. At in tellus integer feugiat scelerisque varius morbi enim. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Eu facilisis sed odio morbi quis commodo odio aenean. Donec ac odio tempor orci dapibus ultrices in. At imperdiet dui accumsan sit amet nulla.</p>
      </Section>

      <Section title="Experience" style={{ width: '100vh' }}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat consequat mauris nunc congue. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Cursus sit amet dictum sit. Tellus in metus vulputate eu scelerisque felis. Sit amet justo donec enim. Sit amet cursus sit amet dictum sit amet. Gravida quis blandit turpis cursus in hac habitasse platea. Consequat interdum varius sit amet. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Euismod elementum nisi quis eleifend quam. Turpis in eu mi bibendum neque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Nullam vehicula ipsum a arcu cursus vitae. At in tellus integer feugiat scelerisque varius morbi enim. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Eu facilisis sed odio morbi quis commodo odio aenean. Donec ac odio tempor orci dapibus ultrices in. At imperdiet dui accumsan sit amet nulla.</p>
      </Section>

      <Section title="Skills" style={{ width: '100vh' }}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat consequat mauris nunc congue. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Cursus sit amet dictum sit. Tellus in metus vulputate eu scelerisque felis. Sit amet justo donec enim. Sit amet cursus sit amet dictum sit amet. Gravida quis blandit turpis cursus in hac habitasse platea. Consequat interdum varius sit amet. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Euismod elementum nisi quis eleifend quam. Turpis in eu mi bibendum neque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Nullam vehicula ipsum a arcu cursus vitae. At in tellus integer feugiat scelerisque varius morbi enim. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Eu facilisis sed odio morbi quis commodo odio aenean. Donec ac odio tempor orci dapibus ultrices in. At imperdiet dui accumsan sit amet nulla.</p>
      </Section>
    </div>
  );
}

export default Body;
