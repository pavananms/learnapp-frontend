import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Background from './background.jpg';
import Button from '@material-ui/core/Button';
import Title from './Title';

//class App extends Component {
//  render() {
//    return (
//      <div className="App">
//        <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <p>
//            Edit <code>src/App.js</code> and save to reload.
//          </p>
//          <a
//            className="App-link"
//            href="https://reactjs.org"
//            target="_blank"
//            rel="noopener noreferrer"
//          >
//            Learn React
//          </a>
//        </header>
//      </div>
//    );
//  }
//}
//

var sectionStyle = {
        width: "100%",
        height: "720px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
  backgroundImage: `url(${Background})`
};

class Section extends Component {
  render() {
    return (
      <section style={ sectionStyle }>
      </section>
    );
  }
}
function MenuButtons(props){
        //props.MenuItems
        console.log(props.buttons);
        var buttons = props.buttons.map((Item) => <Button>{Item}</Button>)
        return <div>{buttons}</div>
}
class App extends Component {
  render(){
    const MenuItems = ["Login","FAQ","Ask A Question"];
    return(
      <div id="id1" className="Something" style={ sectionStyle }>
          <div id="id2">
          <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
              <Toolbar>
                <Typography variant="title" color="transparent">
                  <MenuButtons  buttons = {MenuItems}/>
                </Typography>
              </Toolbar>
          </AppBar>
        </div>
    </div>
    )
  }
}
export default App;
