import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Character from "./components/Character";
import images from "./images.json";

class App extends Component {
  state = {
    images,
    score: 0,
    topScore: 0,
    clickedImages: [],
    statusMessage: "Click an image to begin!",
    result: ""
  };

  incrementScore = id => {
    if (this.state.clickedImages.includes(id)) {
      this.setState({
        score: 0,
        statusMessage: "You guessed wrongly!",
        clickedImages: [],
        result: "incorrect"
      });
      setTimeout(() => {
        this.setState({ result: "" });
      }, 1000);
    } else {
      this.state.clickedImages.push(id);
      if (this.state.score >= this.state.topScore) {
        this.setState({ topScore: this.state.topScore + 1 });
      }
      this.setState({
        score: this.state.score + 1,
        statusMessage: "You guessed correctly!",
        result: "correct"
      });
      setTimeout(() => {
        this.setState({ result: "" });
      }, 1000);
    }
    this.shuffle(this.state.images);
  };

  shuffle = array => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    this.forceUpdate();
  };

  render() {
    return (
      <div className="App">
        <Navbar
          statusMessage={this.state.statusMessage}
          score={this.state.score}
          topScore={this.state.topScore}
          result={this.state.result}
        />
        <Header />
        <Container>
          {this.state.images.map(image => (
            <Character
              key={image.id}
              id={image.id}
              result={this.state.result}
              image={image.image}
              incrementScore={this.incrementScore}
            />
          ))}
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
