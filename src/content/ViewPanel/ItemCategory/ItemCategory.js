const ItemCategory = ({ Edit }) => {
  return (

    <li className="ItemCategory">
      {Edit == true ? (
        <>
          <label className="ItemCategoryEditLabel">ItemCategoryEdit</label>
          <input className="ItemCategoryEditInput" type="text" name="ItemCategoryEdit" id="ItemCategoryEdit" placeholder="category" />
        </>
      ) : (
        <div className="ItemCategoryEditInput" >Category</div>
      )}
      <div className='ItemCategoryDeleteButton'>Bin </div>
    </li >
  )
}

export default ItemCategory