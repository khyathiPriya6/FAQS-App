// Write your code here.
// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {withAns: false}

  toggleAns = () => {
    this.setState(prevState => ({withAns: !prevState.withAns}))
  }

  ansContainer = answer => (
    <ul className="faq-answer-container">
      <hr className="divider" />
      <p className="faq-ans">{answer}</p>
    </ul>
  )

  render() {
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    const {withAns} = this.state

    const imgUrl = withAns
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altValue = withAns ? 'minus' : 'plus'

    return (
      <li className="faq-container">
        <div className="faq-question">
          <h1 className="questionText">{questionText}</h1>
          <button
            className="plus-minus-btn"
            type="submit"
            onClick={this.toggleAns}
          >
            <img src={imgUrl} alt={altValue} className="plus-minus-img" />
          </button>
        </div>
        {withAns ? this.ansContainer(answerText) : ''}
      </li>
    )
  }
}

export default FaqItem
