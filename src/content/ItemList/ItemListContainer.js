import ItemList from './ItemList'
import AddNewItemButton from './AddNewItemButton'
const ItemListContainer = () => {
    return (
        <>
            <div className='ItemListContainer'>
                <ItemList />
                <AddNewItemButton />
            </div>
        </>
    )
}

export default ItemListContainer