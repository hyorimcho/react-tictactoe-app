import React from "react";
import "./App.css";
import Board from "./components/Board.js";

export default class App extends React.Component {
  render() {
    return (
      <div className="game">
        game
        <div className="game-board">game-board</div>
        {/* game-info */}
        <Board />
        <div className="game-info">
          game-info
          <div></div>
          {/* todo */}
          <ol></ol>
        </div>
      </div>
    );
  }
}
