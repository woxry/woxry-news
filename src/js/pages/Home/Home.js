import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import News from "../../components/News/News";
import styles from './styles.module.scss';

function Home(props) {
  return (
    <div className={styles.homeView}>
      <News />
    </div>
  );
}

export default withRouter(Home);
