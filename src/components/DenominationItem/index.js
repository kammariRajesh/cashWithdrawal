// Write your code here
import {Component} from 'react'

import './index.css'

class DenominationItem extends Component {
  render() {
    const {denominationsList} = this.props
    const {value} = denominationsList
    return <li className="list-item">{value}</li>
  }
}
export default DenominationItem
