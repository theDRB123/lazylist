import CostPerCategoryList from './CostPerCategoryList'
const CostViewContainer = () => {
  return (
    <div className="CostViewContainer">
        <div className="CostViewLabel">CostViewLabel</div>
        <div className="TotalCost">Total Cost</div>
        <CostPerCategoryList/>
    </div>
    )
}

export default CostViewContainer