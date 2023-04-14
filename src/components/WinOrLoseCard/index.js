// Write your code here.
import './index.css'

const winLoseImages = [
  'https://assets.ccbp.in/frontend/react-js/won-game-img.png',
  'https://assets.ccbp.in/frontend/react-js/lose-game-img.png',
]

const WinOrLoseCard = props => {
  const {score, topScore, isWon, onPlayAgain} = props
  console.log(score, topScore, isWon)
  const imageUrl = isWon ? winLoseImages[0] : winLoseImages[1]
  const cardHeading = isWon ? 'You Won' : 'You Lose'

  const playAgain = () => onPlayAgain()

  return (
    <div className="win-lose-card-container">
      <div className="card-details">
        <h1>{cardHeading}</h1>
        <p className="best-score">Best Score</p>
        <p className="card-score">{score < 11 ? score : score + 1}/12</p>
        <button type="button" className="play-again-btn" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <div className="card-image-container">
        <img src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
