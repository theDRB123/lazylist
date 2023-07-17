import EditItemCategoryListContainer from '../ItemCategory/ItemCategoryListContainer'
import OptionBar from '../OptionBar'
import { useState } from 'react'
import { useParams } from 'react-router-dom/dist/umd/react-router-dom.development'
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development'
const EditItemViewContainer = ({ Items, setItems }) => {

    const navigate = useNavigate()

    const { id } = useParams()
    const item = Items.find((item) => item.id.toString() === id)

    const [EditItemName, setEditItemName] = useState(item.itemName);
    const [EditItemDescription, setEditItemDescription] = useState(item.itemDescription);
    const [EditItemCost, setEditItemCost] = useState(item.itemCost);
    const [EditItemLink, setEditItemLink] = useState(item.itemLink);

    const handleChange = (value, target) => {
        target(value);
    }



    const handle_EditItemSave = () => {
        const newEditItem = {
            id: id,
            itemCheck: false,
            itemName: EditItemName,
            itemCost: EditItemCost,
            itemDescription: EditItemDescription,
            itemCategory: "category1",
            itemLink: EditItemLink
        }

        const tempItems = Items.filter((item) => item.id.toString() !== id)
        const newEditItemList = [...tempItems, newEditItem]
        setItems(newEditItemList);

        setEditItemName("")
        setEditItemCost("")
        setEditItemDescription("")
        setEditItemLink("")
        navigate(`/${id}`)
    }
    const handle_EditItemCancel = () => {
        setEditItemName("")
        setEditItemCost("")
        setEditItemDescription("")
        setEditItemLink("")
        const id = Items[Items.length - 1].id;
        navigate(`/${id}`)
    }
    return (
       
            <div className="EditItemViewContainer">
                <div className='NameAndCostContainer'>

                    <div className="EditItemName">
                        <label htmlFor="EditItemName">item.itemName</label>
                        <input type="text" id='EditItemName' placeholder='EditableItemName' value={EditItemName} onChange={(e) => handleChange(e.target.value, setEditItemName)} />
                    </div>
                    <div className="EditItemCost">
                        <label htmlFor="EditItemCost">Editable item cost</label>
                        <input type="text" placeholder='cost' value={EditItemCost} onChange={(e) => handleChange(e.target.value, setEditItemCost)} />
                    </div>
                </div>
                <div className="EditItemDescription">
                    <label htmlFor="EditItemDescription">Editable Item Description</label>
                    <textarea name="EditItemDescription" id="EditItemDescription" cols="30" rows="10" placeholder='Editable Item Description' value={EditItemDescription} onChange={(e) => handleChange(e.target.value, setEditItemDescription)}></textarea>
                </div>

                <EditItemCategoryListContainer />

                <div className='EditItemLink'>
                    <label htmlFor="EditItemLink"></label>
                    <input type="text" id='EditItemLink' className="EditItemLink" placeholder='link' value={EditItemLink} onChange={(e) => handleChange(e.target.value, setEditItemLink)} />
                </div>

                <OptionBar condition={3} handle_EditItemSave={handle_EditItemSave} handle_EditItemCancel={handle_EditItemCancel} />
            </div>
      
    )
}

export default EditItemViewContainer