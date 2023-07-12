import NewItemCategoryListContainer from '../ItemCategory/ItemCategoryListContainer'
import OptionBar from '../OptionBar'
const NewItemViewContainer = () => {
  return (
    <form action="NewItemForm">
      <div className="NewItemViewContainer">

        <div className='NameAndCostContainer'>

          <div className="NewItemName">
            <label htmlFor="NewItemName">NewItemName</label>
            <input type="text" id='NewItemName' placeholder='Item Name' />
          </div>

          <div className="NewItemCost">
            <label htmlFor="NewItemCost">NewItemCost</label>
            <input type="text" id='NewItemCost' placeholder='Cost' />
            {/* onchange will run the function which changes the value so that we dont need a save button */}
          </div>

        </div>

        <div className="NewItemDescription">
          <label htmlFor="NewItemDescription">New Item Description</label>
          <textarea name="NewItemDescription" id="NewItemDescription" cols="30" rows="10" placeholder='Description'></textarea>
        </div>

        <NewItemCategoryListContainer />

        <div className='NewItemLink'>
          <label htmlFor="NewItemLink">.</label>
          <input type="text" id='NewItemLink' className='NewItemLink' placeholder='Link' />
        </div>
        <OptionBar />
      </div>
    </form>
  )
}

export default NewItemViewContainer