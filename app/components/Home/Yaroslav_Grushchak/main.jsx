import React from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';

import Project_1 from './Projects/Project_1/Project_1.jsx';
import "./style.styl";


const Links = () => (
    <nav className="navigationLinks">
        <Link to="/">Main page</Link>
        <Link to="/html/Yaroslav_Grushchak/Project_1">Project 1 (React website)</Link>
        <Link to="/html/Yaroslav_Grushchak/Future_project">Future project</Link>
    </nav>
);

class Yaroslav_Grushchak extends React.Component {
    render(){
        return (
            <div>
                <Links/>

                <Switch>                                                              {/* Switch рендерит только первый Route, который подходит под условие */}
                    <Route exact path="/html/Yaroslav_Grushchak" render={() => <h1 className="home container">Yaroslav Grushchak Directory</h1>} />
                    <Route path="/html/Yaroslav_Grushchak/Project_1" component={Project_1} />
                    <Route path="/html/Yaroslav_Grushchak/Future_project" render={() => <h1 className="future_project">Here will be next project :)</h1>} />
                    <Route render={() => <h1>Page not found</h1>}/>                   {/* Route без path будет вызываться для любой страницы(как для той, которой не существует, так и для существующих) */}
                </Switch>
            </div>
            // <Project_1/>
        );
    }
}

export default Yaroslav_Grushchak;