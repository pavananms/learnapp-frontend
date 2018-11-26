import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Background from './background.jpg';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import Button from '@material-ui/core/Button';
import Title from './Title';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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
        height: "100%",
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

class DemoCarousel extends Component {
  render() {
      return (
          <Carousel>
              <div>
                  <img src={img1} />
                  {/* <p className="legend">Legend 1</p> */}
              </div>
              <div>
                  <img src={img2} />
                  {/* <p className="legend">Legend 2</p> */}
              </div>
              <div>
                  <img src={img3} />
                  {/* <p className="legend">Legend 3</p> */}
              </div>
          </Carousel>
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
            <DemoCarousel>
            </DemoCarousel>
         </div>
      </div>
    )
  }
}
export default App;
