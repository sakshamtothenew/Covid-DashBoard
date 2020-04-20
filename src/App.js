import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home'
import Faq from './containers/Faq/Faq'
import HelpfulLinks from './containers/HelpfulLinks/HelpfulLinks'



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
