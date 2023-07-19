// IF EDIT MODE ON --> SHOW DELETE BUTTON AND CHANGE TO EDIT MODE
import Item from '../../ItemList/Item'
import Category from '../CostView/Category'
import ItemCategory from './ItemCategory'

function ItemCategoryList({ Edit , NewList , setNewList , ChangeItemCategoryIndex , setChangeItemCategoryIndex , setShow , handle_RemoveCategory}) {

    return (
        <ul className="ItemCategoryList" id='ItemCategoryList' >
            {
                NewList.map((Category , index) => <ItemCategory key={index} Edit={Edit} value={Category} index={index} NewList={NewList} setNewList={setNewList} setShow={setShow} setCategory={setChangeItemCategoryIndex} handle_RemoveCategory={handle_RemoveCategory}/> )
            }
        </ul>
    )
}

export default ItemCategoryList