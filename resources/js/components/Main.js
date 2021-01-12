import React from "react";
import ReactDOM from "react-dom";

//importar componentes

import Nav from "./Nav";
import Form from "./customer/Form";
import Edit from "./customer/Edit";
import List from "./customer/List";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function Main(){
    return (
        <Router>
           <main>
               <Nav />
               <Switch>
                    <Route path="/customer/index" exact component={List}/>
                    <Route path="/customer/form" exact component={Form}/>
                    <Route path="/customer/edit/:id" exact component={Edit}/>
               </Switch>
               </main> 
        </Router>
    )
}

export default Main;
ReactDOM.render(<Main />,document.getElementById("component-main"));