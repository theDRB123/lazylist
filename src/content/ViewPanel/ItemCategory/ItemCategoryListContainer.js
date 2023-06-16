import ItemCategoryList from './ItemCategoryList'
const ItemCategoryListContainer = () => {
  return (
        <div className="ItemCategoryListContainer">
            <div className="CategoryLabel">CategoryLabel</div>
            <ItemCategoryList/>
            <div className='AddCategoryButton'>Add Category</div>
            <div className='EditCategoryButton'>Edit CategoryButton</div>
        </div>
    )
}

export default ItemCategoryListContainer