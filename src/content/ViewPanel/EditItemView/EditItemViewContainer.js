import EditItemCategoryListContainer from '../ItemCategory/ItemCategoryListContainer'
import OptionBar from '../OptionBar'
const EditItemViewContainer = () => {
    return (
        <div className="EditItemViewContainer">
            <div className="EditItemName"></div>
            <div className="EditItemCost"></div>
            <div className="EditItemDescription"></div>
            <EditItemCategoryListContainer />
            <div className='EditItemLink'></div>
            <OptionBar />
        </div>
    )
}

export default EditItemViewContainer