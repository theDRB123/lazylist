import CostPerCategoryList from './CostPerCategoryList'
const CostViewContainer = ({Items , Categories}) => {

  let TotalCost = 0 ;
  for (let index = 0; index < Items.length; index++) {
    const element = Items[index];
    TotalCost += Number(element.itemCost);
  }

  let CostPerCategoryArray = [] ;
  
  for (let index = 0; index < Categories.length; index++) {
    let CostPerCategoryObject 
    let cost = 0 ;
    Items.forEach(item => {
      if(item.itemCategoryIndex === index){
        cost += Number(item.itemCost);
      }
    })
    CostPerCategoryObject = {
      CategoryName: Categories[index] ,
      CategoryCost: cost
    }
    CostPerCategoryArray = [...CostPerCategoryArray , CostPerCategoryObject]
  }
  return (
    <div className="CostViewContainer">
        <div className='CostViewLabelAndCostContainer'>
        <div className='TotalCostLabel'>Total Cost</div>
        <div className='TotalCost'>{TotalCost}</div>
        </div>
        <CostPerCategoryList CostPerCategoryArray={CostPerCategoryArray}/>
    </div>
    )
}

export default CostViewContainer