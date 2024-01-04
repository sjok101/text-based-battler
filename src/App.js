import React from "react";
import { useState } from "react";
import "./App.css";
import BattleScreen from "./BattleScreen";

const App = () => {
  const [play, setPlay] = useState(false);
  const [startBattle, setStartBattle] = useState(false);
  const [difficulty, setDifficulty] = useState([]);

  const nextScreen = () => {
    setPlay(true);
  };
  return (
    <div>
      {play ? (
        startBattle ? (
          <div className="battleScreen">
            <BattleScreen />
            <button
              onClick={() => {
                console.log(difficulty);
                setStartBattle(false);
              }}
            >
              Give up...
            </button>
          </div>
        ) : (
          <div className="diffScreen">
            <div className="figContainer">
              <figure>
                <img
                  src={"https://placehold.co/300x400"}
                  onClick={() => {
                    setDifficulty("Easy");

                    setStartBattle(true);
                  }}
                />
                <figcaption>Easy</figcaption>
              </figure>
              <figure>
                <img
                  src={"https://placehold.co/300x400"}
                  onClick={() => {
                    setDifficulty("Hard");

                    setStartBattle(true);
                  }}
                />
                <figcaption>Hard</figcaption>
              </figure>
              <figure>
                <img
                  src={"https://placehold.co/300x400"}
                  onClick={() => {
                    setDifficulty("Critical");

                    setStartBattle(true);
                  }}
                />
                <figcaption>Critical</figcaption>
              </figure>
            </div>
            <button
              onClick={() => {
                setPlay(false);
              }}
            >
              Back to Main
            </button>
          </div>
        )
      ) : (
        <div className="mainScreen">
          <h1>Ultimate Text Battler</h1>
          <button
            onClick={() => {
              setPlay(true);
            }}
          >
            Play
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
