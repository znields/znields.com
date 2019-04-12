import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { observer } from 'mobx-react';
import Header from './containers/Header';
import Body from './containers/Body';
import Footer from './containers/Footer';
import dayStore from './store/day';
import './App.css';


const style = {
  margin: 0,
  padding: 0,
  fontFamily: 'Nunito, san-serif',
  width: '100%',
  overflowX: 'hidden',
  opacity: 1,
};


function App() {
  const { day } = dayStore;
  return (
    <Spring
      to={{
        backgroundColor: day ? 'white' : '#171c28',
        color: day ? 'black' : 'white',
      }}
    >
      { bodyStyle => (
        <div style={{ ...bodyStyle, ...style }}>
          <Header />
          <Body />
          <Footer />
        </div>
      )
      }
    </Spring>
  );
}

export default observer(App);
