import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Components/Home.js';
import HealthNews from './Components/HealthNews.js';
import BusinessNews from './Components/BusinessNews.js';
import About from './Components/About.js';
import { Provider } from 'react-redux';
import store from './Redux/store.js';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      title: 'HEBI',
      menus: [
        {        
          id: '1',    
          pathlink:'healthNews',
          menu: 'Health'    
        },
        {        
          id: '2',
          pathlink:'businessNews',    
          menu: 'Business'    
        },
        {        
          id: '3',
          pathlink:'about',    
          menu: 'About'    
        },
      ],        
    }
  }

  render() {
    let { title, menus } = this.state;
    return (
        <Provider store={store}>
          <BrowserRouter>
            <React.Fragment>
                <NavBar title={title} menus={menus}/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/healthNews" component={HealthNews} />
                    <Route path="/businessNews" component={BusinessNews} />
                    <Route path="/about" component={About} />
                </Switch>  
            </React.Fragment>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;

