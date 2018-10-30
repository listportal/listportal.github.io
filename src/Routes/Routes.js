import React, {Component} from "react";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import ScrollToTop from './../Components/ScrollToTop';
import PrivateRoute from './PrivateRoute';
import Home from "./Home";
import Login from './LogIn/LogInContainer';
import SignUp from './SignUp/SignUpContainer';
import MainMenu from './../Components/MainMenu';
import EditList from './List/EditList';
import DeleteList from './List/DeleteIMainListModal';
import SubList from './List/SubList';
import EditSubList from './List/EditSubList';
import DeleteSubListModal from './List/DeleteSubListModal';
import Items from './List/Items';
import EditItem from './List/EditItem';
import DeleteItemModal from './List/DeleteItemModal';
import firebase from './../firebase';
import LoadingAnimation from 'react-loading-animation';

export default class Routes extends Component {
  constructor () {
    super()
    this.state = { loading: true, authenticated: false, user: null };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }
  render() {
    const { authenticated, loading } = this.state;

    if (loading) {
      return <LoadingAnimation/>;
    }
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <div>
            <Switch>
              <PrivateRoute
                exact
                path="/"
                component={Home}
                authenticated={authenticated}
              />
              {/*<Route exact path="/" component={Home}/>*/}
              <Route exact path="/LogIn" component={Login}/>
              <Route exact path="/SignUp" component={SignUp}/>
              <Route exact path="/MainMenu" component={MainMenu}/>
              <Route path="/Lists/*/Edit" component={EditList}/>
              <Route exact path="/DeleteList-*" component={DeleteList}/>
              <Route exact path="/Lists/*" component={SubList}/>
              <Route exact path="/SubLists/*" component={Items}/>
              <Route exact path="/EditSubList/*" component={EditSubList}/>
              <Route exact path="/DeleteSubList-*" component={DeleteSubListModal}/>
              <Route exact path="/EditItem/*" component={EditItem}/>
              <Route exact path="/DeleteItem/*" component={DeleteItemModal} />
            </Switch>
          </div>
        </ScrollToTop>
      </Router>
    )
  }
}