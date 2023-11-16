import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, onGoogleInput} = props
  const {suggestion} = suggestionDetails

  const onClickSuggestions = () => {
    onGoogleInput(suggestion)
  }
  return (
    <li className="suggestion-item">
      <p className="para">{suggestion}</p>
      <button className="btn-1" type="button" onClick={onClickSuggestions}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
