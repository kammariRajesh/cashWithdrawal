// Write your code here
import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  render() {
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="card1">
          <div className="span-square">
            <span>S</span>
          </div>
          <p className="prg">Sarah Williams</p>
        </div>
        <div className="card2">
          <h1 className="heading1">Your Balance</h1>
          <h1 className="heading2">2000</h1>
        </div>
        <div className="card3">
          <h1 className="heading2">Withdraw</h1>
          <h1 className="heading1">CHOOSE SUM(IN RUPEES)</h1>
        </div>
        <div className="card4">
          <ul>
            {denominationsList.map(eachItem => (
              <DenominationItem item={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
