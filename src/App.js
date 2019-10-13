import React from "react";
import Nav from "./components/Nav/Nav";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = props => {
debugger
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container">
          <Nav  />

          <Route
            path="/profile"
            render={() => (
              <Profile
        
              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => <DialogsContainer />}
          />
          <Route path="/music" component={Music} />
          <Route path="/news" component={News} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
