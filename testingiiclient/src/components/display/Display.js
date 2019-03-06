import React from 'react';


const Display = props => {
  const { strikes, balls, fouls } = props.stats
  return (
    <div>
      <h2>Strikes: <span data-testid='strikeCount'>{strikes}</span></h2>
      <h2>Balls: <span data-testid='ballCount'>{balls}</span></h2>
      <h2>Fouls: <span data-testid='foulCount'>{fouls}</span></h2>
    </div>
  )
}


export default Display