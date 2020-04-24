import React from 'react'
import DynamicStatDate from '../../components/DynamicStatData/DynamicStatData'
import Country from '../../components/CountryData/CountryData'
import NewsFeed from '../../components/NewsFeed/NewsFeed'
import Map from '../../components/Map/Map'
import RecoveryBar from '../../components/RatioRecoveryMeter/RecoveryRatioProgressBar';
import SpreadTrends from '../../components/SpreadTrends/SpreadTrends';
import Tweets from '../../components/Tweets/Tweets';
import classes from './Home.module.css'

const Home = () => {
  return (

    <main className={classes.MainContainer}>
      <article className={classes.MainBody}>
        <DynamicStatDate />
        <div className={classes.CountryDetailSection}>
          <Country />
          <Map />
        </div>
        <div className={classes.SocialInfo}>
          <SpreadTrends />
          <NewsFeed />
        </div>
      </article>
      <aside className={classes.SideBody}>
        <RecoveryBar />
        <Tweets />
      </aside>

    </main>
  )
}

export default Home;