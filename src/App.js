import React from 'react';
import logo from './logo.svg';
import  NavBar from './components/NavBar/NavBar'
import './App.css';
import NavLinks from './components/NavBar/NavLinks/NavLinks';
import Layout from './hoc/Layout/Layout';
import DynamicStatDate from './components/DynamicStatData/DynamicStatData'
import Country from './components/CountryData/CountryData'

function App() {
  return (
   <Layout> 
     <div>these are rest components</div>
     <DynamicStatDate  />
     <Country />
   </Layout>
  );
}

export default App;
