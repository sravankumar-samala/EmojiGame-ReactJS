// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiObject, onEmojiClicked} = props
  const {id, emojiUrl, emojiName} = emojiObject

  const shuffleEmojis = () => onEmojiClicked(id)

  return (
    <li className="emojiItem" onClick={shuffleEmojis}>
      <button className="emoji-btn" type="button">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
