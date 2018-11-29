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
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './overrides.css'

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
var card= {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: "center",
};
var cardMedia = {
  paddingTop: '56.25%', // 16:9
};
var cardContent = {
  flexGrow: 1,
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
          <Carousel showThumbs={false} autoPlay={true} interval={10} infiniteLoop={true}>
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
const cards = [1, 2, 3, 4 ,5 ,6];
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
            <Grid container spacing={40}>
            {cards.map(card => (
              <Grid item key={card} sm={6} md={3} lg={2}>
                <Card className={card}>
                  <CardMedia
                    className={cardMedia}
                    image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                    title="Image title"
                  />
                  <CardContent className={cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
         </div>
      </div>
    )
  }
}
export default App;
