import React, { Component } from 'react';
import Layout from './component/Layout/layout';
import Builder from './container/BuilderBurger/BuilderBurger'
import Checkout from './container/Checkout/Checkout'
import {Route} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div>
        <Layout>

        <Route path="/" exact component = {Builder}/>
        <Route path="/checkout" component = {Checkout}/>
         
        </Layout>
        <button className="btn btn-primary">Primary</button>
      </div>
    );
  }
}

export default App;
