import EditItemCategoryListContainer from '../ItemCategory/ItemCategoryListContainer'
import OptionBar from '../OptionBar'
const EditItemViewContainer = () => {
    return (
        <div className="EditItemViewContainer">
            <div className='NameAndCostContainer'>
                <div className="EditItemName">Editable_item_name</div>
                <div className="EditItemCost">Editable_item_cost</div>
            </div>
            <div className="EditItemDescription">Editable_item_description</div>
            <EditItemCategoryListContainer />
            <div className='EditItemLink'>Editable_item_link</div>
            <OptionBar />
        </div>
    )
}

export default EditItemViewContainer