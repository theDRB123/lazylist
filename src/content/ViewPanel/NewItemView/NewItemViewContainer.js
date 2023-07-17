import { Navigate, useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';
import NewItemCategoryListContainer from '../ItemCategory/ItemCategoryListContainer'
import OptionBar from '../OptionBar'
import { useState } from 'react'

const NewItemViewContainer = ({Items , setItems}) => {
  
  const navigate = useNavigate();

  const [NewItemName , setNewItemName] = useState("");
  const [NewItemDescription , setNewItemDescription] = useState("");
  const [NewItemCost , setNewItemCost] = useState("");
  const [NewItemLink , setNewItemLink] = useState("");
  
  const handleChange = ( value , target) => {
    target(value);
  }

  const handle_NewItemSave = () => {
    const id = Items[Items.length - 1].id + 1;
    const newItem = {
      id: id,
      itemCheck: false ,
      itemName: NewItemName,
      itemCost: NewItemCost,
      itemDescription: NewItemDescription ,
      itemCategory: "category1",
      itemLink: NewItemLink
    }
    const newItemList = [...Items , newItem]
    setItems(newItemList);
    setNewItemName("")
    setNewItemCost("")
    setNewItemDescription("")
    setNewItemLink("")
    
  }
  const handle_NewItemCancel = () => {
    setNewItemName("")
    setNewItemCost("")
    setNewItemDescription("")
    setNewItemLink("")    
    const id = Items[Items.length - 1].id;
    navigate(`/${id}`)
  }
  return (    
    
    
      <div className="NewItemViewContainer">

        <div className='NameAndCostContainer'>

          <div className="NewItemName">
            <label htmlFor="NewItemName">NewItemName</label>
            <input type="text" id='NewItemName' placeholder='Item Name'  onChange={(e) => (handleChange(e.target.value , setNewItemName)) } value={NewItemName}/>
          </div>

          <div className="NewItemCost">
            <label htmlFor="NewItemCost">NewItemCost</label>
            <input type="text" id='NewItemCost' placeholder='Cost' value={NewItemCost} onChange={(e) => (handleChange(e.target.value , setNewItemCost))}/>
            {/* onchange will run the function which changes the value so that we dont need a save button */}
          </div>

        </div>

        <div className="NewItemDescription">
          <label htmlFor="NewItemDescription">New Item Description</label>
          <textarea name="NewItemDescription" id="NewItemDescription" cols="30" rows="10" placeholder='Description' value={NewItemDescription} onChange={(e) => handleChange(e.target.value , setNewItemDescription)}></textarea>
        </div>

        <NewItemCategoryListContainer />

        <div className='NewItemLink'>
          <label htmlFor="NewItemLink">.</label>
          <input type="text" id='NewItemLink' className='NewItemLink' placeholder='{Link}' value={NewItemLink} onChange={(e) => handleChange(e.target.value , setNewItemLink)}/>
        </div>
        <OptionBar handle_NewItemSave={handle_NewItemSave} handle_NewItemCancel={handle_NewItemCancel} condition={2}/>
      </div>
  )
}

export default NewItemViewContainer