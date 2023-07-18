import ItemList from './ItemList'
import AddNewItemButton from './AddNewItemButton'
const ItemListContainer = ( {Items , handle_newItemButton , handle_itemView}) => {
    return (
        <>
            <div className='ItemListContainer'>
                <ItemList Items={Items} handle_itemView={handle_itemView} />
                <AddNewItemButton handle_newItemButton={handle_newItemButton} />
            </div>
        </>
    )
}

export default ItemListContainer