import ItemList from './ItemList'
import AddNewItemButton from './AddNewItemButton'
const ItemListContainer = ( {setView , Items , handle_newItemButton , handle_Check, handle_itemView}) => {
    return (
        <>
            <div className='ItemListContainer'>
                <ItemList Items={Items} handle_itemView={handle_itemView} handle_Check={handle_Check} />
                <AddNewItemButton handle_newItemButton={handle_newItemButton} />
            </div>
        </>
    )
}

export default ItemListContainer