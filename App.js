import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import List from './components/List'
class App extends Component{
    render(){
        return (
            <BrowserRouter>
             <div className = "App">

                 <Navbar/>
                   <Switch>
                       <Route exact path = "/" component = {Home}/>
                       <Route path = "/list" component = {List}/>
                   </Switch>
             </div>
            </BrowserRouter>
        )
    }
}
export default App;
