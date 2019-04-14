import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Tabs from '../components/Tabs';
import Section from '../components/Section';
import SmallLink from '../components/SmallLink';
import Project from '../components/Project';
import Paper from '../components/Paper';
import List from '../components/List';
import Emoji from '../components/Emoji';

import secondPlace from '../assets/second-place.png';
import trophy from '../assets/trophy.png';
import cloud from '../assets/cloud.png';
import basketball from '../assets/basketball.png';
import books from '../assets/books.png';
import face from '../assets/face.png';

const style = {
  marginLeft: '6vw',
  marginRight: '15vw',
};

function Body() {
  return (
    <div style={style}>
      <Section title="About Me">
        <p>
          {"I'm currently a 2nd-year computer science undergrad at the "}
          <SmallLink href="http://www.ufl.edu/">University of Florida</SmallLink>
          {". While I'm not big on going to class, I enjoy learning through personal projects and self-study. "}
          { "Recently, I've developed an interest in machine learning and its potential applications. "}
          {'Pursuing that interest, I have been reading, writing, and coding about many different ML models. '}
          {'In addition, I have built a few applied ML projects. '}
          {"This summer I'm super excited to continue developing these skills as a software engineer in "}
          <SmallLink href="https://www.facebook.com">Facebook's</SmallLink>
          {' applied machine learning division.'}
        </p>
        <p>
          {"When I'm not in in front of a computer, I enjoy playing basketball "}
          <Emoji src={basketball} style={{ width: '13pt', height: '13pt' }} />
          {', reading '}
          <Emoji src={books} style={{ width: '13pt', height: '13pt' }} />
          {', and building new connections '}
          <Emoji src={face} style={{ width: '13pt', height: '13pt' }} />
          .
        </p>


      </Section>

      <Section title="Projects">
        <Row>
          <Project
            title="DeepTrash"
            icon="https://raw.githubusercontent.com/isaiahnields/deep-trash/master/icon.png"
            stack={['Keras', 'Tensorflow', 'Python', 'Arduino', 'Raspberry Pi']}
            href="https://github.com/isaiahnields/deep-trash"
            award={(
              <span>
                <Emoji src={trophy} style={{ width: '13pt', height: '13pt' }} />
                &nbsp;1st Place - MakeHarvard 2019&nbsp;
                <Emoji src={trophy} style={{ width: '13pt', height: '13pt' }} />
              </span>
)}
          >
            An intelligent trashcan that automatically sorts your waste for you
          </Project>

          <Project
            icon="https://raw.githubusercontent.com/isaiahnields/danger.ai/master/logo.png"
            title="Danger.ai"
            stack={['OpenPose', 'Python', 'JavaScript', 'HTML', 'CSS', 'Google Cloud Platform']}
            href="https://github.com/isaiahnields/danger.ai"
            award={(
              <span>
                <Emoji src={secondPlace} style={{ width: '13pt', height: '13pt' }} />
                  &nbsp;2nd Place - SwampHacks V&nbsp;
                <Emoji src={secondPlace} style={{ width: '13pt', height: '13pt' }} />
              </span>
)}
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
            award={(
              <span>
                <Emoji src={cloud} style={{ width: '13pt', height: '13pt' }} />
                &nbsp;950+ downloads&nbsp;
                <Emoji src={cloud} style={{ width: '13pt', height: '13pt' }} />
              </span>
)}
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

      <Section title="Experience">
        <Tabs
          jobs={[
            {
              company: 'Facebook',
              items: ['Will be working on applied machine learning projects for the Video ASR team.', 'Super pumped for my first day—May 28.'],
              location: 'Menlo Park, CA',
              date: 'May 2019 - Aug 2019',
            },
            {
              company: 'iMobile3',
              items: ['Built machine learning models to predict merchant churn.', 'Analyzed data about 22 competitor POS applications.', 'Created tools to automate business tasks which saved hours for team.'],
              location: 'Jacksonville, FL',
              date: 'Jan 2018 - Jan 2019',
            },
            {
              company: 'Coleman Lab',
              items: ['Developed a low-cost operant chamber for mouse behavior experiments.', 'Created object tracking script to record mouse (x, y) position.', 'Received 1st place at Florida State Science Fair for work.'],
              location: 'Gainesville, FL',
              date: 'May 2016 - May 2017',
            },
          ]}
        />
      </Section>

      <Section title="Writing">
        <Container>
          <Row>
            <Col lg={6} md={6}>
              <Paper
                title="Neural Networks: why do they work so well? Part I"
                img="https://raw.githubusercontent.com/isaiahnields/machine-learning-models/master/demos/results/2_spiral_neural_network.gif"
                link="https://towardsdatascience.com/neural-networks-why-do-they-work-so-well-part-i-22f0d3690511"
                date="Apr 3, 2019"
              />
            </Col>
            <Col lg={6} md={6}>
              <Paper
                title="Linear Regression from Scratch"
                img="https://raw.githubusercontent.com/isaiahnields/machine-learning-models/master/demos/results/linear_regression_train.gif"
                link="https://towardsdatascience.com/linear-regression-from-scratch-977cd3a1db16"
                date="Feb 1, 2019"
              />
            </Col>
          </Row>
        </Container>

      </Section>

      <Section title="Skills">
        <Row>
          <Col xl={3} md={6} sm={6} xs={12}>
            <List
              title="Languages"
              items={['Python', 'JavaScript', 'Java', 'C++', 'HTML', 'CSS', 'SQL']}
            />
          </Col>
          <Col xl={3} md={6} sm={6} xs={12}>
            <List
              title="Tools"
              items={['Bash', 'Git & GitHub', 'Postman', 'Chrome DevTools', 'MongoDB']}
            />
          </Col>
          <Col xl={3} md={6} sm={6} xs={12}>
            <List
              title="Libraries"
              items={['TensorFlow', 'PyTorch', 'Keras', 'Pandas', 'React', 'Node.js', 'Electron']}
            />
          </Col>
          <Col xl={3} md={6} sm={6} xs={12}>
            <List
              title="Machine Learning"
              items={['Feedforward NN', 'Recurrent NN', 'Convolutional NN', 'Gradient Descent', 'Regression', 'Gradient Boosting']}
            />
          </Col>
        </Row>
      </Section>
    </div>
  );
}

export default Body;
