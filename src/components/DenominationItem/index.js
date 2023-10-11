// Write your code here
import './index.css'

const DenominationItem = props => {
  const {eachAmount, onWithdrawal} = props
  const {value} = eachAmount

  const onClicking = () => {
    onWithdrawal(value)
  }

  return (
    <li>
      <button className="button" type="button" onClick={onClicking}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
