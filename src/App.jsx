import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import Header from './containers/Header';
import Body from './containers/Body';
import Footer from './containers/Footer';
import './App.css';


const style = {
  margin: 0,
  padding: 0,
  fontFamily: 'Nunito, san-serif',
  width: '100%',
  overflowX: 'hidden',
  opacity: 1,
};


function App(props) {
  const { dayStore } = props;
  return (
    <Spring
      to={{
        backgroundColor: dayStore.day ? 'white' : '#171c28',
        color: dayStore.day ? 'black' : 'white',
      }}
    >
      { bodyStyle => (
        <div style={{ ...bodyStyle, ...style }}>
          <Header dayStore={dayStore} />
          <Body />
          <Footer />
        </div>
      )
      }
    </Spring>
  );
}

App.propTypes = {
  dayStore: PropTypes.objectOf(Boolean).isRequired,
};

export default observer(App);
