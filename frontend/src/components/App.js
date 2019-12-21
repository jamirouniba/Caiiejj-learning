// frontend/src/components/App.js
import ReactDOM from 'react-dom'
import React, {Component} from 'react';
import store from '../store';
import Dipartimento from './Dipartimento/GetAll'
import history from '../utils/historyUtils';
import Login from "./Account/Login";
import Cdl from "./Cdl/Cdl";
import Signup from "./Account/Signup";
import Corso from "./Corso/Corso";
import Syllabo from "./Syllabo/Syllabo";
import Media from "./Media/Media";
import Player from "./Player/Player";
import {connect, Provider} from "react-redux";
import {Route, Router, Switch} from "react-router-dom";
import Footer from "./layout/footer";
import Header_desktop from "./layout/header";
import SignupDone from "./Account/SignupDone";
import AccountActivation from "./Account/AccountActivation";
import PasswordResetDone from "./Account/PasswordResetDone";
import PasswordReset from "./Account/PasswordReset";
import UserProfile from "./Account/UserProfile";
import UserProfileEdit from "./Account/UserProfileEdit";
import PasswordChange from "./Account/PasswordChange";
import RequireAuth from "./Account/RequireAuth";
import {loadUser} from "../actions/authActions";
import DeleteAccount from "./Account/DeleteAccount";
import PasswordResetChange from "./Account/PasswordResetChange";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebook,faTwitter,faGithub,faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faFacebook,faTwitter,faGithub,faGooglePlusG);
class App extends Component {
 componentDidMount() {
     store.dispatch(loadUser)
 }

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <div className="Site">
                        <Header_desktop classname="Site-header"/>
                        <div className="main">
                            <Switch>
                                <Route exact path='/' component={Dipartimento}/>

                                <Route path="/login" component={Login}/>
                                <Route path="/signup" component={Signup}/>
                                <Route path="/users/activation/" component={AccountActivation}/>
                                <Route path="/signup_done" component={SignupDone}/>
                                <Route path="/reset_password" component={PasswordReset}/>
                                <Route path="/password-reset/change/" component={PasswordResetChange}/>
                                <Route path="/reset_password_done" component={PasswordResetDone}/>
                                <Route path="/profile" component={RequireAuth(UserProfile)}/>
                                <Route path="/profile_edit" component={RequireAuth(UserProfileEdit)}/>
                                <Route path="/change_password" component={RequireAuth(PasswordChange)}/>
                                <Route path="/delete_account" component={RequireAuth(DeleteAccount)}/>


                                <Route exact path='/:dip' component={Cdl}/>
                                <Route exact path="/:dip/:cdl" component={Corso}/>
                                <Route exact path="/:dip/:cdl/:syllabo" component={Syllabo}/>
                                <Route exact path="/:dip/:cdl/:syllabo/:lezione/" component={RequireAuth(Media)}/>
                                <Route exact path="/:dip/:cdl/:syllabo/:lezione/:media"
                                       component={RequireAuth(Player)}/>
                            </Switch>
                        </div>
                        <Footer/>
                    </div>
                </Router>
            </Provider>
        );
    }


}

connect(null, {loadUser})(App);
ReactDOM.render(
    <App/>
    , document.querySelector('#app'));
