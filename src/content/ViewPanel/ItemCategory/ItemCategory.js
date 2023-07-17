import { useState } from "react"
import { useEffect } from "react"
const ItemCategory = ({ Edit, value, index, NewList, setNewList , setCategory , setShow}) => {

  const [Edited, setEdited] = useState(value)

  const handle_categoryEdit = (val) => {
    setEdited(val)
  }

  useEffect(() => {
    let tempList = NewList;
    tempList[index] = Edited
    setNewList(tempList)
  }, [Edited])

  const handle_Click = () => {
    console.log("clicked")
    setShow(false)
    setCategory(index);
  }

  return (

    <li className="ItemCategory">
      {Edit == true ? (
        <>
          <label className="ItemCategoryEditLabel">ItemCategoryEdit</label>
          <input className="ItemCategoryEditInput" type="text" name="ItemCategoryEdit" id="ItemCategoryEdit" placeholder="category" value={Edited} onChange={(e) => handle_categoryEdit(e.target.value)} />
        </>
      ) : (
        <div className="ItemCategoryEditInput" onClick={() => handle_Click()}>{value}</div>
      )}
      <div className='ItemCategoryDeleteButton'>Bin </div>
    </li >
  )
}

export default ItemCategory