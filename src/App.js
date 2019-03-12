import React from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import MainMenu from './shared/mainMenu';
import HomePage from './views/pages/Homepage';
import Login from './views/pages/Login';
import "bootstrap/dist/css/bootstrap.min.css";


class App extends  React.Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
          <MainMenu site_name="Delivery Food App"/>
          <h1>Delivery Food App</h1>
         
          <Route exact path="/" component={ HomePage } />
          {/* <Route exact path="/order" component={ OrderList } />*/}
           <Route exact path="/login" component={ Login } />          
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
