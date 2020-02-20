import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import News from "../../components/News/News";

function Home(props) {
  
  return (
    <div>
      <h1>Woxry News</h1>
      <News />
    </div>
  );
}

export default withRouter(Home);
