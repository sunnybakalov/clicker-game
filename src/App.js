import React, { Component } from 'react';
import './App.css';
import Pictures from "./components/Pictures";
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import data from './data.json';

class App extends Component {
  state = {
    pictures: data,
    score: 0,
    topScore: 0
  }

  handleClick = (picId) => {
    let clickedTwice
    // severing the array reference with .slice()
    let newStateArray = this.state.pictures.slice();
    // shuffling array
    let shufflePictures = shuffleArray(newStateArray);
    // looping over array
    for (let i = 0; i < shufflePictures.length; i++) {
      // checking to see if the ID of our picture object matches
      // the ID of our picture
      if(picId === shufflePictures[i].id) {
        // checking if it has been clicked already
        if(shufflePictures[i].clicked === false) {
          // if it has not, update the "clicked" boolean to true
          // change state
          shufflePictures[i].clicked = true;
          this.setState({
            score: this.state.score + 1,
            topScore: (this.state.score >= this.state.topScore ? this.state.topScore + 1 : this.state.topScore)
          });
        } else {
          // restart the game if clickedTwice = true;
          clickedTwice = true;
        }
      }
    }
    // if a picture has been clicked twice, reset the game.
    if (clickedTwice) {
      this.setState({
        pictures: data,
        score: 0
      });
    } else {
      this.setState({
        pictures: shufflePictures
      });
    }

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }
  }
  render() {
  return (
    <div>
      <Jumbotron score={this.state.score} topScore={this.state.topScore} />
      <Pictures picturesData={this.state.pictures} handleClick={this.handleClick} />
      <Footer />
    </div>
    );
  }
}

export default App;
