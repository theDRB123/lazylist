const ItemCategory = () => {
  return (


    <li className="ItemCategory">
    <form action="ItemCategoryEditForm">
      <label className="ItemCategoryEditLabel">ItemCategoryEdit</label>
      <input className="ItemCategoryEditInput" type="text" name="ItemCategoryEdit" id="ItemCategoryEdit" n placeholder="category" />
    </form>
      <div className='ItemCategoryDeleteButton'>Bin </div>
    </li >

  )
}

export default ItemCategory