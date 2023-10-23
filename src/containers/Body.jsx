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
import roastBotLogo from '../assets/roast-bot-logo.png';
import treeOfSimulations from '../assets/tree-of-simulations.png';

const style = {
  marginLeft: '6vw',
  marginRight: '15vw',
};

function Body() {
  return (
    <div style={style}>
      <Section title="About Me">
        <p>
          {"I'm a software engineer at "}
          <SmallLink href="https://www.facebook.com">Facebook</SmallLink>
          {" currently working on the Recruiting Data and ML team. Prior to joining Facebook, I studied computer science at the "} <SmallLink href="https://ufl.edu">University of Florida</SmallLink>. {" Outside of work and school, I have taken interest in building products enabled by ML. "}
          {"See more about this work below. In addition to my project work, I've been building a wholistic knowledge of ML by reading about the economic, social, and legal issues affecting this new set of techniques."}
        </p>
        <p>
          {"In my free time, I enjoy biking around the San Francisco Bay Area and beyond. If you're interested in my workouts, check out my "}<SmallLink href="https://www.strava.com/athletes/45024992">Strava</SmallLink>
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
            icon={roastBotLogo}
            title="Roast Bot"
            stack={['React', 'JavaScript', 'Python', 'AWS Lambda', 'Clarifai', 'Convolutional Neural Network']}
            href="https://roastbot.lol"
          >
            A bot powered by AI which flames its users with computer vision
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
              company: 'Meta',
              items: ['Software engineer working on the Recruiting ML and Data team.', 'Lead initiatives to build out recruiting knowledge graphs for companies, skills, and other entity types.', 'Drove product improvements on surfaces like referrals tooling, the career site, and candidate search.', 'Aided ML model development by improving resume data features and improved overall resume data accuracy through resume standardization and merging techniques.'],
              location: 'San Francisco, CA',
              date: 'Feb 2020 - Current',
            },
            {
              company: 'Admiral',
              items: ['Worked at Admiral, an adblock recovery service, on the engineering team.', 'Trained and deployed a neural network to predict when to best engage a user with requests to turn off ad blocker.', 'Used features such as time of day and previous user behavior data to determine optimal engagement timing.', 'Improved adblock conversion rate by ~3% greatly increasing customer revenues.'],
              location: 'Gainesville, FL',
              date: 'Nov 2019 - Feb 2020',
            },
            {
              company: 'Facebook',
              items: ['Worked as an intern on the Graph Embeddings team.', 'Helped build out an ML graph embedding platform for internal use at Facebook.', 'Trained and benchmarked models on various graph-related tasks including link prediction and entity resolution.'],
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
                title="Are We Living in a Simulation?"
                img={treeOfSimulations}
                link="https://isaiahnields.medium.com/are-we-living-in-a-simulation-11c4716e29b"
                date="Sep 21, 2021"
              />
            </Col>
            <Col lg={6} md={6}>
              <Paper
                title="Neural Networks: why do they work so well?"
                img="https://raw.githubusercontent.com/isaiahnields/machine-learning-models/master/demos/results/2_spiral_neural_network.gif"
                link="https://towardsdatascience.com/neural-networks-why-do-they-work-so-well-part-i-22f0d3690511"
                date="Apr 3, 2019"
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6}>
              <Paper
                title="Linear Regression from Scratch"
                img="https://raw.githubusercontent.com/isaiahnields/machine-learning-models/master/demos/results/linear_regression_train.gif"
                link="https://towardsdatascience.com/linear-regression-from-scratch-977cd3a1db16"
                date="Feb 1, 2019"
              />
            </Col>
            <Col lg={6} md={6}>
              <Paper
                title="Cat Parasite Has Mind and Society Altering Effects"
                img="https://miro.medium.com/max/1400/0*AVpEcRMzzG8wZ8rl.jpg"
                link="https://medium.com/@isaiahnields/cat-parasite-has-mind-and-society-altering-effects-a54266f4a0ad"
                date="Oct 4, 2020"
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
