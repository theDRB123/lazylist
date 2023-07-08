import NewItemCategoryListContainer from '../ItemCategory/ItemCategoryListContainer'
import OptionBar from '../OptionBar'
const NewItemViewContainer = () => {
  return (
    <div className="NewItemViewContainer">
      <div className='NameAndCostContainer'>
        <div className="NewItemName"></div>
        <div className="NewItemCost"></div>
      </div>
      <div className="NewItemDescription"></div>
      <NewItemCategoryListContainer />
      <div className='NewItemLink'></div>
      <OptionBar />
    </div>
  )
}

export default NewItemViewContainer