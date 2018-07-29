import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Character from "./components/Character";
import images from "./images.json";

class App extends Component {
  state = { images };
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Container>
          {this.state.images.map(image => (
            <Character key={image.id} image={image.image} />
          ))}
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
