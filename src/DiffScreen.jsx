import React from 'react';


const DiffScreen = (props) => {
    return (
        <div className="diffScreen">
            <div className="figContainer">
              <figure>
                <img
                  src={"https://placehold.co/300x400"}
                  onClick={() => {
                    props.setDifficulty("Easy");
                    props.setStartBattle(true);
                    
                  }}
                />
                <figcaption>Easy</figcaption>
              </figure>
              <figure>
                <img
                  src={"https://placehold.co/300x400"}
                  onClick={() => {
                    console.log("Hard");
                    props.setDifficulty("Hard");
                    props.setStartBattle(true);
                  }}
                />
                <figcaption>Hard</figcaption>
              </figure>
              <figure>
                <img
                  src={"https://placehold.co/300x400"}
                  onClick={() => {
                    console.log("Critical");
                    props.setDifficulty("Critical");
                    props.setStartBattle(true);
                  }}
                />
                <figcaption>Critical</figcaption>
              </figure>
            </div>
            <button
              onClick={() => {
                props.setPlay(false);
              }}
            >
              Back to Main
            </button>
          </div>
    )
}

export default DiffScreen;