import EditItemCategoryListContainer from '../ItemCategory/ItemCategoryListContainer'
import OptionBar from '../OptionBar'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom/dist/umd/react-router-dom.development'
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development'

const EditItemViewContainer = ({ Items, setItems, Categories, setCategories }) => {

    const navigate = useNavigate()

    

    const { id } = useParams()

    const item = Items.find((item) => item.id.toString() === id)

    const [EditItemName, setEditItemName] = useState(item.itemName);
    const [EditItemDescription, setEditItemDescription] = useState(item.itemDescription);
    const [EditItemCost, setEditItemCost] = useState(item.itemCost);
    const [EditItemLink, setEditItemLink] = useState(item.itemLink);
    const [EditItemCategoryIndex, setEditItemCategoryIndex] = useState(item.itemCategoryIndex)

    const handleChange = (value, target) => {
        target(value);
    }


    const handle_EditItemSave = () => {
        // console.log(`Edited ${id}`);
        const newEditItem = {
            id: item.id,
            itemCheck: false,
            itemName: EditItemName,
            itemCost: EditItemCost,
            itemDescription: EditItemDescription,
            itemCategoryIndex: EditItemCategoryIndex,
            itemLink: EditItemLink
        }
        
        var Index = Items.findIndex((item) => item.id.toString() === id)
        // console.log(Index)
        const tempArr = [...Items]
        tempArr[Index] = newEditItem

        setItems(tempArr);

        setEditItemName("")
        setEditItemCost("")
        setEditItemDescription("")
        setEditItemLink("")
        setEditItemCategoryIndex(-1)
        navigate(`/${id}`)
    }

    const handle_EditItemCancel = () => {
        setEditItemName("")
        setEditItemCost("")
        setEditItemDescription("")
        setEditItemLink("")
        setEditItemCategoryIndex(-1)

        const id = Items[Items.length - 1].id;
        navigate(`/${id}`)
    }
    return (

        <div className="EditItemViewContainer">
            <div className='NameAndCostContainer'>

                <div className="EditItemName">
                    <label htmlFor="EditItemName">item.itemName</label>
                    <input type="text" id='EditItemName' className='EditItemNameInput' placeholder='EditableItemName' value={EditItemName} onChange={(e) => handleChange(e.target.value, setEditItemName)} />
                </div>
                <div className="EditItemCost">
                    <label htmlFor="EditItemCost">Editable item cost</label>
                    <input type="text" placeholder='cost' className='EditItemCostInput' value={EditItemCost} onChange={(e) => handleChange(e.target.value, setEditItemCost)} />
                </div>
            </div>
            <div className="EditItemDescription">
                <label htmlFor="EditItemDescription">Editable Item Description</label>
                <textarea name="EditItemDescription" id="EditItemDescription" className='EditItemDescriptionInput' cols="30" rows="10" placeholder='Editable Item Description' value={EditItemDescription} onChange={(e) => handleChange(e.target.value, setEditItemDescription)}></textarea>
            </div>

            <EditItemCategoryListContainer Items={Items} setItems={setItems} Categories={Categories} setCategories={setCategories} ChangeItemCategoryIndex={EditItemCategoryIndex} setChangeItemCategoryIndex={setEditItemCategoryIndex} />

            <div className='EditItemLink'>
                <label htmlFor="EditItemLink"></label>
                <input type="text" id='EditItemLink' className="EditItemLinkInput" placeholder='link' value={EditItemLink} onChange={(e) => handleChange(e.target.value, setEditItemLink)} />
            </div>

            <OptionBar condition={3} handle_EditItemSave={handle_EditItemSave} handle_EditItemCancel={handle_EditItemCancel} />
        </div>

    )
}

export default EditItemViewContainer