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

function App() {
  return (
    <Layout>
      <DynamicStatDate />
      <div className = {classes.CountryDetailSection}>
        <Country />
        <Map />
      </div>


    </Layout>
  );
}

export default App;
