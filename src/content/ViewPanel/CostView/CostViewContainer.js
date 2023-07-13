import CostPerCategoryList from './CostPerCategoryList'
const CostViewContainer = () => {
  return (
    <div className="CostViewContainer">
        <div className='CostViewLabelAndCostContainer'>
        <div className='TotalCostLabel'>Total Cost</div>
        <div className='TotalCost'>$200</div>
        </div>
        <CostPerCategoryList/>
    </div>
    )
}

export default CostViewContainer