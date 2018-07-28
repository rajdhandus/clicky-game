import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import images from "./images.json";

class App extends Component {
  state = { images };
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        {this.state.images.map(image => (
          <Container id={image.id} image={image.image} />
        ))}
        <Footer />
      </div>
    );
  }
}

export default App;
