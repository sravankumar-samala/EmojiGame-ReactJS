/* eslint-disable no-undef */
// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    const {emojisList} = this.props
    this.state = {
      score: 0,
      topScore: 0,
      playing: true,
      emojisList,
      selectedEmojisList: [],
      isWon: false,
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.state
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onEmojiClicked = id => {
    const {score, topScore, selectedEmojisList} = this.state

    // Checks if an emoji clicked twice
    if (score + 1 === 12 || selectedEmojisList.includes(id)) {
      // Game ends here
      this.setState({
        playing: false,
        isWon: score > topScore || score + 1 === 12,
      })
    } else {
      // Game still goes on
      const shuffledList = this.shuffledEmojisList()
      this.setState(prev => ({
        selectedEmojisList: [...prev.selectedEmojisList, id],
        playing: true,
        score: score + 1,
        emojisList: shuffledList,
      }))
    }
  }

  onPlayAgain = () => {
    const {score} = this.state
    this.setState(prevState => ({
      score: 0,
      playing: true,
      selectedEmojisList: [],
      topScore: Math.max(prevState.topScore, score),
    }))
  }

  render() {
    const {score, topScore, playing, emojisList, isWon} = this.state
    const navScoresObj = {score, topScore, playing}

    return (
      <div className="container">
        <div className="nav-container">
          <NavBar navScoresObj={navScoresObj} />
        </div>
        <div className="emoji-game-container">
          {playing ? (
            <ul className="container-wrapper">
              {emojisList.map(eachObject => (
                <EmojiCard
                  onEmojiClicked={this.onEmojiClicked}
                  key={eachObject.id}
                  emojiObject={eachObject}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              onPlayAgain={this.onPlayAgain}
              score={score}
              topScore={topScore}
              isWon={isWon}
            />
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame
