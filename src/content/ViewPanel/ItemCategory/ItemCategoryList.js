// IF EDIT MODE ON --> SHOW DELETE BUTTON AND CHANGE TO EDIT MODE
import ItemCategory from './ItemCategory'
function ItemCategoryList({ Edit }) {
    return (
        <ul className="ItemCategoryList" id='ItemCategoryList'>
            <ItemCategory Edit={Edit} />
            <ItemCategory Edit={Edit} />
            <ItemCategory Edit={Edit} />
            <ItemCategory Edit={Edit} />
            <ItemCategory Edit={Edit} />
            <ItemCategory Edit={Edit} />
        </ul>
    )
}

export default ItemCategoryList