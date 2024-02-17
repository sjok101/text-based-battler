import React from "react";
import { useState } from "react";
import "./App.css";
import BattleScreen from "./BattleScreen";
import DiffScreen from "./DiffScreen";

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
              id="forfeit-button"
              onClick={() => {
                console.log(difficulty);
                setStartBattle(false); //returns back to difficulty screen
              }}
            >
              Give up...
            </button>
          </div>
        ) : (
          <DiffScreen
            setPlay={setPlay}
            setStartBattle={setStartBattle}
            setDifficulty={setDifficulty}
          />
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
