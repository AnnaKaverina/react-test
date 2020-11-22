import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Home from './pages/Home';
import News from './pages/News';
import Profile from './pages/Profile';
import Login from './pages/Login';
import styled from 'styled-components';
import {store} from './redux/store';
import {connectToStore} from './redux/store';

const Container = styled.div`
  width: 900px;
  height: 700px;
  background-color: #ebebeb;
  margin: 0 auto;
  border-radius: 6px;
`;

const Header = styled.header`
  height: 70px;
  padding: 15px 0 0 0;
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  width: 90%;
  border-radius: 3px;
  margin: 0 auto;
  padding: 0;
  list-style-type: none;
  background-color: #fff8eb;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  font-size: 18px;
  font-weight: 500;
`;

const MainScreen = styled.section`
  padding: 10px;
`;

class App extends React.Component {

  render() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return (
      <Router>
        <Container>
          <Header>
            <nav>
              <List>
                <li>
                  <NavLink to="/">На главную</NavLink>
                </li>
                <li>
                  <NavLink to="/news">Новости</NavLink>
                </li>
                <li>
                  <NavLink to="/profile">Профиль</NavLink>
                </li>
              </List>
            </nav>
          </Header>
          
          <MainScreen>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/news">
                <News />
              </Route>
              <Route path="/profile">
                {isLoggedIn ? <Profile /> : <Redirect to="/login" />}
              </Route>
              <Route path="/login">
                <Login store={store}/>
              </Route>
            </Switch>
          </MainScreen>
  
        </Container>
      </Router>
    );
  }
}

export default connectToStore(App);