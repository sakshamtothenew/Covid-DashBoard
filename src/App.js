import React from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar'

import NavLinks from './components/NavBar/NavLinks/NavLinks';
import Layout from './hoc/Layout/Layout';
import DynamicStatDate from './components/DynamicStatData/DynamicStatData'
import Country from './components/CountryData/CountryData'
import NewsFeed from './components/NewsFeed/NewsFeed'
import Map from './components/Map/Map'
import classes from './App.module.css';
import RecoveryBar from './components/RatioRecoveryMeter/RecoveryRatioProgressBar';
import SpreadTrends from './components/SpreadTrends/SpreadTrends';
import Tweets from './components/Tweets/Tweets';
import Home from './containers/Home/Home'
import Faq from './containers/Faq/Faq'
import HelpfulLinks from './containers/HelpfulLinks/HelpfulLinks'
import { Route, Switch, Redirect } from 'react-router-dom'
import { ReactFragment } from 'react'
import Aux from './hoc/Aux/Aux';


function App() {

  let route = (
    <div>
      <Redirect to='/' />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Faq' component={Faq} />
        <Route path='/helpfulLink' component={HelpfulLinks} />
        <Redirect to='/' />
      </Switch>
    </div>

  )
  return (
    <Layout>
      {route}
    </Layout>
  );
}

export default App;
