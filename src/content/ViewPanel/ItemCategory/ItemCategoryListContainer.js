import ItemCategoryList from './ItemCategoryList'
const ItemCategoryListContainer = () => {
    let option = 1;
    return (
        <div className="ItemCategoryListContainer">
            <div className="CategoryLabel">Category :-</div> 
            { option == 1 ? (<ItemCategoryList/>) : (<div>ItemCategory</div>)}
            
            <div className='AddCategoryButton'>
                <button>Add Category</button>
            </div>
        </div>
    )
}

export default ItemCategoryListContainer