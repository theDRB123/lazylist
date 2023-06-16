const ItemCategory = () => {
  return (
    <div className="ItemCategory">
      <form action="ItemCategoryEditForm">
        <label className="ItemCategoryEditLabel">ItemCatrgoryEdit</label>
        <input className="ItemCategoryEditInput" type="text" name="ItemCategoryEdit" id="ItemCategoryEdit" />
      </form>
      <div className='ItemCategoryDeleteButton' />ItemCategoryDeleteButton<div />
    </div>
  )
}

export default ItemCategory