import React from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import MainMenu from './shared/mainMenu';
import UserContext from './shared/user.context';
import  Footer from './shared/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, fas } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, fab, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Homepage, Order, Login, OrderMenu, ModalLogin } from './views/pages';
import "bootstrap/dist/css/bootstrap.min.css";

library.add(fas, fab, faCheckSquare, faGoogle, faFacebook);

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
              <MainMenu site_name="Your Menu App"/>
              <Route exact path="/" component={ Homepage } />
              <Route exact path="/order" component={ Order } />
              <Route exact path="/login" component={ Login } />
              <Route exact path="/ordermenu/:id" component={ OrderMenu } />
          </div>
          <div>
            <Footer site_name="Your Menu"/>

          </div>
        </UserContext.Provider>
    </BrowserRouter>
    );
  }
}
// export function FontAwesomeIcon(props) {
//   return <i className="fa" />
// }
export default App;
