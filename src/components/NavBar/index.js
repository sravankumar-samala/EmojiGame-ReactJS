// Write your code here.
import './index.css'

const ScoreDetails = props => {
  const {score, topScore} = props
  return (
    <div className="nav-list">
      <p className="score">Score: {score}</p>
      <p className="top-score">Top Score: {topScore}</p>
    </div>
  )
}

const NavBar = props => {
  const {navScoresObj} = props
  const {score, topScore, playing} = navScoresObj
  //   console.log(playing)
  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {playing ? <ScoreDetails score={score} topScore={topScore} /> : ''}
      {/* <ScoreDetails score={score} topScore={topScore} /> */}
    </nav>
  )
}

export default NavBar
