import React from "react";

const Dashboard = props => {
  // console.log(props.atBat);
  const {strikes, balls, fouls} = props.stats
  return (
    <>
      <h1>At Bat Dashboard</h1>
      <div>
        <h2>Strikes: <span data-testid='strikeCount'>{strikes}</span></h2>
        <h2>Balls: {balls}</h2>
        <h2>Fouls: {fouls}</h2>
      </div>

      <div>
        <button data-testid='strikeBtn' onClick={props.recordStrike}>Strike</button>
        <button data-testid='ballBtn' onClick={props.recordBall}>Ball</button>
        <button data-testid='foulBtn'  onClick={props.recordFoul}>Foul</button>
        <button data-testid='hitBtn' onClick={props.recordHit}>Hit</button>
      </div>
    </>
  );
};

export default Dashboard;
