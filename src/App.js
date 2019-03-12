import React from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import MainMenu from './shared/mainMenu';
import UserContext from './shared/user.context';
import { Homepage, Login } from './views/pages';
import "bootstrap/dist/css/bootstrap.min.css";


class App extends  React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };

    this.handleUserChange = this.handleUserChange.bind(this);
  }

  handleUserChange(user) {
    console.warn(user);
    this.setState({ user });
  }

  render() {
    return (
      <BrowserRouter>
        <UserContext.Provider value={ {user: this.state.user, handleUserChange: this.handleUserChange} }>
          <div className="App">
              <MainMenu site_name="Delivery Food App"/>
              <h1>Delivery Food App</h1>
            
              <Route exact path="/" component={ Homepage } />
              {/* <Route exact path="/order" component={ OrderList } />*/}
              <Route exact path="/login" component={ Login } />          
          </div>
        </UserContext.Provider>
    </BrowserRouter>
    );
  }
}

export default App;
