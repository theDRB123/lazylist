import ItemCategoryList from './ItemCategoryList'
const ItemCategoryListContainer = () => {
    let option = 1;
    return (
        <div className="ItemCategoryListContainer">

            <div className="CategoryLabel">Select Category :-</div>
             
            { option == 1 ? (   
            <>
            <ItemCategoryList/>
            
            <div className='AddCategoryButton'>
                <button>Add Category</button>
            </div>
            </>
            ) : (<div className='ViewItemCategory'>ItemCategory</div>)}
            
        </div>
    )
}

export default ItemCategoryListContainer