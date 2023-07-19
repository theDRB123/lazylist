import { Navigate, useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';
import NewItemCategoryListContainer from '../ItemCategory/ItemCategoryListContainer'
import OptionBar from '../OptionBar'
import { useState } from 'react'
import Item from '../../ItemList/Item';

const NewItemViewContainer = ({ Items, setItems, Categories, setCategories }) => {

  const navigate = useNavigate();

  const [NewItemName, setNewItemName] = useState("");
  const [NewItemDescription, setNewItemDescription] = useState("");
  const [NewItemCost, setNewItemCost] = useState("");
  const [NewItemLink, setNewItemLink] = useState("");
  const [NewItemCategoryIndex, setNewItemCategoryIndex] = useState(-1)
  const handleChange = (value, target) => {
    target(value);
  }

  const handle_NewItemSave = () => {
    let id;
    if (Items.length == 0) {
      id = 1;
    } else id = Items[Items.length - 1].id + 1;
    console.log(`added ${id}`);
    const newItem = {
      id: id,
      itemCheck: false,
      itemName: NewItemName,
      itemCost: NewItemCost,
      itemDescription: NewItemDescription,
      itemCategoryIndex: NewItemCategoryIndex,
      itemLink: NewItemLink
    }
    const newItemList = [...Items, newItem]
    
    setItems(newItemList);

    setNewItemName("")
    setNewItemCost("")
    setNewItemDescription("")
    setNewItemLink("")
    setNewItemCategoryIndex(-1)
    navigate(`/${id}`)
  }
  const handle_NewItemCancel = () => {
    setNewItemName("")
    setNewItemCost("")
    setNewItemDescription("")
    setNewItemLink("")
    setNewItemCategoryIndex(-1)
    try{
    const id = Items[Items.length - 1].id;
    navigate(`/${id}`)
    }catch { navigate('/0')}
    
    
  }
  return (


    <div className="NewItemViewContainer">

      <div className='NameAndCostContainer'>

        <div className="NewItemName">
          <label htmlFor="NewItemName">NewItemName</label>
          <input type="text" id='NewItemName' className='NewItemNameInput' placeholder='Item Name' onChange={(e) => (handleChange(e.target.value, setNewItemName))} value={NewItemName} />
        </div>

        <div className="NewItemCost">
          <label htmlFor="NewItemCost">NewItemCost</label>
          <input type="text" id='NewItemCost' className='NewItemCostInput' placeholder='Cost' value={NewItemCost} onChange={(e) => (handleChange(e.target.value, setNewItemCost))} />
          {/* onchange will run the function which changes the value so that we dont need a save button */}
        </div>

      </div>

      <div className="NewItemDescription">
        <label htmlFor="NewItemDescription">New Item Description</label>
        <textarea name="NewItemDescription" id="NewItemDescription" className='NewItemDescriptionInput' cols="30" rows="10" placeholder='Description' value={NewItemDescription} onChange={(e) => handleChange(e.target.value, setNewItemDescription)}></textarea>
      </div>

      <NewItemCategoryListContainer Items={Items} setItems={setItems} Categories={Categories} setCategories={setCategories} ChangeItemCategoryIndex={NewItemCategoryIndex} setChangeItemCategoryIndex={setNewItemCategoryIndex} />

      <div className='NewItemLink'>
        <label htmlFor="NewItemLink">.</label>
        <input type="text" id='NewItemLink' className='NewItemLinkInput' placeholder='{Link}' value={NewItemLink} onChange={(e) => handleChange(e.target.value, setNewItemLink)} />
      </div>
      <OptionBar handle_NewItemSave={handle_NewItemSave} handle_NewItemCancel={handle_NewItemCancel} condition={2} />
    </div>
  )
}

export default NewItemViewContainer