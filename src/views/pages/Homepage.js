import React  from 'react';

import UserContext from '../../shared/user.context';
import { logo, bottle, phone, trophy } from '../../images/index.js';
import '../../App.css';



class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            welcome: "Welcome To our Food App Menu",
            posts: []
        };
    }
    render() {
        return (
            <>
            <UserContext.Consumer>
                { ({user}) => (
                    <>
            <div className="wrapper_homepage">
                <section className="homepage_intro" style={{
                    backgroundImage: "url(https://buyer-static.postmates.com/dist/prod/postmates-share-image.9672924ea0390b5463f04664b04867d45837a47343a9a4a270746e3a4942cfa37d375ee60417eb26803966e4be663705fd86e7bdc1ff8e6c8a97a4f5bb30fa28.png)",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}>
                <div className="homepage_user">
                    <p>Welcome, {user.name}</p>
                </div>
                </section>
                <section className="homepage_middle">
                    <h2>Why order with Delivery Food</h2>
                    <div className="homepage_image_middle">
                        <img src={bottle} alt="Bottle" />
                        <img src={phone} alt="Phone" />
                        <img src={trophy} alt="Trophy" />
                    </div>
                </section>
            </div>
            </>
            )}
            </UserContext.Consumer>
            </>
        );
    }
}


export default HomePage;
