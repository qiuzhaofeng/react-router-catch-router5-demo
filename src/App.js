import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Item from './components/item';
import Results from './components/results';
import './App.css';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'

class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        bbb: ""
      }
    }
  componentDidMount () {
    //imitating fetch here
   
  }
  to=()=>{
      console.log(this.props)
  }
  aaa=(props)=>{
    console.log(props,888)
    if(props.location.pathname==="/home") {
        return false
    } else {
        return true
    }
  }
  render() {
    return (
      <Router>
            <div className="App clear">
                <div className="left">
                    <Link to="/home" >home</Link>
                    <br/>
                    <Link to="/results" >results</Link>
                    <br/>
                </div>
                <div className="right ">
                    <CacheSwitch>
                        <Route exact path='/' render={ ({match}) =>
                            <Redirect to="/home" ></Redirect>
                            }
                        />
                        <Route path='/home' render={ ({match}) =>
                            <Link to="/results">goResults</Link>
                            }
                        />
                        <CacheRoute exact when={this.aaa} cacheKey={this.bbb} path='/results' component={Results}
                        />
                        <Route path='/:id' render={ ({match}) =>
                            <Item
                                key={match.url}
                            />}
                        />
                    </CacheSwitch>
                </div>
            </div>
      </Router>
    );
  }
}

export default App;
