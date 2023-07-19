import { useState } from "react"
import { useEffect } from "react"
import DeleteIcon from '@mui/icons-material/Delete';

const ItemCategory = ({ Edit, value, index, NewList, setNewList , setCategory , setShow , handle_RemoveCategory}) => {

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
          <DeleteIcon sx={{ color: 'rgba(54, 52, 55, 1)' }} className='ItemCategoryDeleteButton' onClick={() => handle_RemoveCategory(index)}/>
        </>
      ) : (
        <div className="ItemCategoryEditInput" onClick={() => handle_Click()}>{value}</div>
      )}
      
    </li >
  )
}

export default ItemCategory