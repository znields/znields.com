import React from 'react';
import { Row } from 'react-grid-system';
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
        <p>
          {"I'm a 2nd-year computer science undergrad at the "}
          <SmallLink href="http://www.ufl.edu/">University of Florida</SmallLink>
          {". While I'm not big on going to class, I enjoy learning through my personal projects. "}
          {' For my projects, I focus on simplicity, efficiency, and utility. '}
        </p>
        <p>
          {"When I'm not in in front of a computer, I enjoy playing basketball and reading."}
        </p>

      </Section>

      <Section title="Projects" style={{ width: '100vh' }}>
        <Row>
          <Project
            title="DeepTrash"
            icon="https://raw.githubusercontent.com/isaiahnields/deep-trash/master/icon.png"
            stack={['Keras', 'Tensorflow', 'Python', 'Arduino', 'Raspberry Pi']}
            href="https://github.com/isaiahnields/deep-trash"
          >
            An intelligent trashcan that automatically sorts your waste for you
          </Project>

          <Project
            icon="https://raw.githubusercontent.com/isaiahnields/danger.ai/master/logo.png"
            title="Danger.ai"
            stack={['OpenPose', 'Python', 'JavaScript', 'HTML', 'CSS', 'Google Cloud Platform']}
            href="https://github.com/isaiahnields/danger.ai"
          >
            A video monitoring system powered by deep learning
          </Project>

          <Project
            icon="https://raw.githubusercontent.com/isaiahnields/machine-learning-models/master/icon.png"
            title="Machine Learning Models"
            stack={['Python', 'NumPy', 'SciPy', 'Matplotlib', 'Seaborn', 'ImageMagick']}
            href="https://github.com/isaiahnields/machine-learning-from-scratch"
          >
            A collection of machine learning models implemented from scratch
          </Project>

          <Project
            icon="https://raw.githubusercontent.com/isaiahnields/csv-to-sqlite/master/build/icons/icon.png"
            title="CSV to SQLite"
            stack={['Electron', 'JavaScript', 'HTML', 'CSS', 'SQLite', 'Material UI']}
            href="https://github.com/isaiahnields/csv-to-sqlite"
          >
            A desktop app to convert CSV files to SQLite databases
          </Project>

          <Project
            icon="https://raw.githubusercontent.com/isaiahnields/business-classifier/master/logo.png"
            title="Business Classifier"
            stack={['Python', 'Tkinter', 'Selenium', 'Yelp API', 'Facebook Graph API']}
            href="https://github.com/isaiahnields/business-classifier"
          >
            A business classifier that uses data from Facebook, Google, and Yelp
          </Project>

          <Project
            icon="https://raw.githubusercontent.com/isaiahnields/web-loader/master/logo.png"
            title="Web Loader"
            stack={['JavaScript', 'PhantomJS']}
            href="https://github.com/isaiahnields/web-loader"
          >
            A website downloader with a built-in JavaScript engine
          </Project>

          <Project
            icon="https://raw.githubusercontent.com/isaiahnields/app-scraper/master/logo.png"
            title="App Scraper"
            stack={['JavaScript', 'NodeJS', 'Google Sheets API']}
            href="https://github.com/isaiahnields/app-scraper"
          >
            A scraper that saves Google Play and App Store data to a spreadsheet
          </Project>

          <Project
            icon="https://raw.githubusercontent.com/isaiahnields/search-queue/master/resources/images/icon.png"
            title="Search Queue"
            stack={['JavaScript', 'HTML', 'CSS', 'Chrome Extension']}
            href="https://github.com/isaiahnields/search-queue"
          >
            A queue for searching the web
          </Project>
        </Row>
      </Section>

      <Section title="Experience" style={{ width: '100vh' }}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat consequat mauris nunc congue. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Cursus sit amet dictum sit. Tellus in metus vulputate eu scelerisque felis. Sit amet justo donec enim. Sit amet cursus sit amet dictum sit amet. Gravida quis blandit turpis cursus in hac habitasse platea. Consequat interdum varius sit amet. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Euismod elementum nisi quis eleifend quam. Turpis in eu mi bibendum neque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Nullam vehicula ipsum a arcu cursus vitae. At in tellus integer feugiat scelerisque varius morbi enim. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Eu facilisis sed odio morbi quis commodo odio aenean. Donec ac odio tempor orci dapibus ultrices in. At imperdiet dui accumsan sit amet nulla.</p>
      </Section>

      <Section title="Writing" style={{ width: '100vh' }}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat consequat mauris nunc congue. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Cursus sit amet dictum sit. Tellus in metus vulputate eu scelerisque felis. Sit amet justo donec enim. Sit amet cursus sit amet dictum sit amet. Gravida quis blandit turpis cursus in hac habitasse platea. Consequat interdum varius sit amet. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Euismod elementum nisi quis eleifend quam. Turpis in eu mi bibendum neque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Nullam vehicula ipsum a arcu cursus vitae. At in tellus integer feugiat scelerisque varius morbi enim. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Eu facilisis sed odio morbi quis commodo odio aenean. Donec ac odio tempor orci dapibus ultrices in. At imperdiet dui accumsan sit amet nulla.</p>
      </Section>


      <Section title="Skills" style={{ width: '100vh' }}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat consequat mauris nunc congue. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Cursus sit amet dictum sit. Tellus in metus vulputate eu scelerisque felis. Sit amet justo donec enim. Sit amet cursus sit amet dictum sit amet. Gravida quis blandit turpis cursus in hac habitasse platea. Consequat interdum varius sit amet. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Euismod elementum nisi quis eleifend quam. Turpis in eu mi bibendum neque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Nullam vehicula ipsum a arcu cursus vitae. At in tellus integer feugiat scelerisque varius morbi enim. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Eu facilisis sed odio morbi quis commodo odio aenean. Donec ac odio tempor orci dapibus ultrices in. At imperdiet dui accumsan sit amet nulla.</p>
      </Section>
    </div>
  );
}

export default Body;
