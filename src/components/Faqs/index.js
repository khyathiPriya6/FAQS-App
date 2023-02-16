// Write your code here.
// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem/index'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="main-container">
        <div className="app-container">
          <h1 className="faq-heading">FAQs</h1>
          <li className="list-items">
            {faqsList.map(eachItem => (
              <FaqItem faqDetails={eachItem} key={eachItem.id} />
            ))}
          </li>
        </div>
      </div>
    )
  }
}

export default Faqs
