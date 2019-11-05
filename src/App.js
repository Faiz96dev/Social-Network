import React, {Component} from "react";
import Nav from "./components/Nav/Nav";
import "./App.css";
import {Route, BrowserRouter, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/Common/preloader/Preloader";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialaized) {
            debugger
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className="App">
                    <HeaderContainer/>
                    <div className="container">
                        <Nav/>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/news" component={News}/>
                        <Route path="/login" component={() => <Login/>}/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => ({
    initialaized: state.app.initialaized
})
export default compose(
    // withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
