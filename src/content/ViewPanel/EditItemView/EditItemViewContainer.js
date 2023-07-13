import EditItemCategoryListContainer from '../ItemCategory/ItemCategoryListContainer'
import OptionBar from '../OptionBar'
const EditItemViewContainer = () => {
    return (
        <form action="EditItemForm">
            <div className="EditItemViewContainer">
                <div className='NameAndCostContainer'>

                    <div className="EditItemName">
                        <label htmlFor="EditItemName">Editable item name</label>
                        <input type="text" id='EditItemName' placeholder='EditableItemName'/>
                    </div>
                    <div className="EditItemCost">
                        <label htmlFor="EditItemCost">Editable item cost</label>
                        <input type="text" placeholder='cost' />
                    </div>
                </div>
                <div className="EditItemDescription">
                    <label htmlFor="EditItemDescription">Editable Item Description</label>
                    <textarea name="EditItemDescription" id="EditItemDescription" cols="30" rows="10" placeholder='Editable Item Description'></textarea>
                </div>
                
                <EditItemCategoryListContainer />

                <div className='EditItemLink'>
                    <label htmlFor="EditItemLink">.</label>
                    <input type="text" id='EditItemLink' className="EditItemLink" placeholder='link'/>
                </div>

                <OptionBar />
            </div>
        </form>
    )
}

export default EditItemViewContainer