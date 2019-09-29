import React from "react";
import Nav from "./components/Nav/Nav";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";

const App = props => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container">
          <Nav friends={props.state.sidebar} />

          <Route
            path="/profile"
            render={() => (
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => <Dialogs data={props.state.messagePage} />}
          />
          <Route path="/music" component={Music} />
          <Route path="/news" component={News} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
