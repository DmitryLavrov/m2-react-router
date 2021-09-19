import React from 'react'
import {Route, Switch} from 'react-router-dom'

import NavBar from './components/navBar'
import Dashboard from './components/dashboard'
// import Posts from './components/posts'
import Login from './components/login'
import Home from './components/home'
import Stats from './components/stats'
import Posts from './components/posts'

function App() {
  return (
    <div>
      <NavBar/>
      <h1>App</h1>
      <Switch>
        <Route path="/dashboard/stats" component={Stats}/>
        {/*<Route path="/dashboard" render={({...props}) => {*/}
        {/*  return true && <Dashboard isAdmin={false} {...props}/>*/}
        {/*}}/>*/}
        <Route path="/dashboard">
          {({...props}) => true && <Dashboard isAdmin={false}  {...props}/>}
        </Route>
        {/*<Route path="/posts/:postId" render={({...props}) => <Post posts={posts} {...props}/>}/>*/}
        {/*<Route path="/posts" render={({...props}) => <PostsList posts={posts} {...props}/>}/>*/}
        <Route path="/posts/:postId?" component={Posts}/>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  )
}

export default App
