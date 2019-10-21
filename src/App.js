import React from "react";
import Nav from "./components/Nav/Nav";
import "./App.css";
import {Route, BrowserRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = props => {

    return (
        <BrowserRouter>
            <div className="App">
                <HeaderContainer/>
                <div className="container">
                    <Nav/>

                    <Route
                        path='/profile/:userId?'
                        render={() => (
                            <ProfileContainer

                            />
                        )}
                    />
                    <Route
                        path="/dialogs"
                        render={() => <DialogsContainer/>}
                    />
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/news" component={News}/>
                    <Route path="/login" component={() => <Login/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
