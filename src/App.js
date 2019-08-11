import React from 'react';
import {Switch , Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shoppage.component'
import Header from './components/header/header-component'
import SignInAndSignOutPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up-component'
import { auth } from '../src/firebase/firebase.utils'


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(user => {
      this.setState({currentUser : user})
      console.log(user)
  })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

 
  render(){
  return (
    <div>
      <Header currentUser = {this.state.currentUser}></Header>
      <Switch>
        <Route exact path="/" component = {HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route path="/signin" component={SignInAndSignOutPage}></Route>
      </Switch>
    </div>
  );
}
}

export default App;
