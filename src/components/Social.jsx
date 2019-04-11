import React from 'react';
import { SocialIcon } from 'react-social-icons';


const style = {
  container: {
    float: 'left',
    marginBottom: '3vh',
    marginLeft: '7vw',
  },
  icon: {
    width: '20pt',
    height: '20pt',
    marginRight: '10px',
    boxShadow: '0px',
  },
};

function Social(props) {
  const { sites } = props;

  return (
    <div style={style.container}>
      { sites.map(url => <SocialIcon key={url} style={style.icon} bgColor="#007bff" url={url} />)}
    </div>
  );
}

export default Social;
