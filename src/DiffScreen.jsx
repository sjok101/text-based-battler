import React from 'react';

const DiffScreen = () => {
    return (
        <div className="diffScreen">
            <div className="figContainer">
              <figure>
                <img
                  src={"https://placehold.co/300x400"}
                  onClick={() => {
                    setDifficulty("Easy");
                    setStartBattle(true);
                    console.log(difficulty);
                  }}
                />
                <figcaption>Easy</figcaption>
              </figure>
              <figure>
                <img
                  src={"https://placehold.co/300x400"}
                  onClick={() => {
                    console.log("Hard");
                  }}
                />
                <figcaption>Hard</figcaption>
              </figure>
              <figure>
                <img
                  src={"https://placehold.co/300x400"}
                  onClick={() => {
                    console.log("Critical");
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
}

export default DiffScreen;