import React from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar'

import NavLinks from './components/NavBar/NavLinks/NavLinks';
import Layout from './hoc/Layout/Layout';
import DynamicStatDate from './components/DynamicStatData/DynamicStatData'
import Country from './components/CountryData/CountryData'
import NewsFeed from './components/NewsFeed/NewsFeed'
import Map from './Map/Map'
import classes from './App.module.css';
import RecoveryBar from './components/RatioRecoveryMeter/RecoveryRatioProgressBar';
import SpreadTrends from './components/SpreadTrends/SpreadTrends';
import Tweets from './components/Tweets/Tweets';

function App() {
  return (
    <Layout>
      <main className={classes.MainContainer}>
        <article className={classes.MainBody}>
          <DynamicStatDate />
          <div className={classes.CountryDetailSection}>
            <Country />
            <Map />
          </div>
          <div className = {classes.SocialInfo}>
            <SpreadTrends />
            <NewsFeed />
          </div>
        </article>
        <aside className={classes.SideBody}>
          <RecoveryBar />
          <Tweets />
        </aside>

      </main>



    </Layout>
  );
}

export default App;
