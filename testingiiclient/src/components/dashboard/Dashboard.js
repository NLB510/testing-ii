import React from "react";

const Dashboard = props => {
  console.log(props.atBat);
  return (
    <>
      <h1>At Bat Dashboard</h1>
      <div>
        <h2>Strikes: {props.strikes}</h2>
        <h2>Balls: {props.balls}</h2>
        <h2>Fouls: {props.fouls}</h2>
      </div>

      <div>
        <button>Strike</button>
        <button>Ball</button>
        <button>Foul</button>
        <button>Hit</button>
      </div>
    </>
  );
};

export default Dashboard;
