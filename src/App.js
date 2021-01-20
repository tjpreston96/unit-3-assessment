import React, { Component } from "react";
import "./App.css";
import Circles from "./components/Circles/Circles";
import CircleSelector from "./components/CircleSelector/CircleSelector";
const circleNum = ["0", "1", "2", "3"];

class App extends Component {
  state = {
    selectedCircleIdx: null,
  };

  handleCircleSelection = (newIdx) => {
    this.setState({ selectedCircleIdx: newIdx });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 3 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            handleCircleSelection={this.handleCircleSelection}
            circleNum={circleNum}
            selectedCircleIdx={this.state.selectedCircleIdx}
          />
          <Circles
            handleCircleSelection={this.handleCircleSelection}
            circleNum={circleNum}
            selectedCircleIdx={this.state.selectedCircleIdx}
          />
        </main>
      </div>
    );
  }
}

export default App;
