// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onWithdrawal = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="app-container">
        <div className="cash-withdrawal-container">
          <div className="profile-container">
            <p className="display-picture">s</p>
            <p className="display-name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance-name">Your Balance</p>
            <div>
              <p className="balance-amount">{balance}</p>
              <p className="balance-rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="sum-heading">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-container">
            {denominationsList.map(eachAmount => (
              <DenominationItem
                eachAmount={eachAmount}
                key={eachAmount.id}
                onWithdrawal={this.onWithdrawal}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
