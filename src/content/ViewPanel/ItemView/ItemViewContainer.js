import OptionBar from '../OptionBar'

import { useParams } from 'react-router-dom'

const ItemViewContainer = ({Items , setItems}) => {

    let { id  } = useParams();

    const handle_deleteItem = () => {
        const tempItems = Items.filter((item) => item.id !== id)
        setItems(tempItems)
    }

    
    console.log(id)
    if (id == undefined) {
        id = 1;        
    }
    console.log(id)
    const item = Items.find(item => (item.id.toString() === (id).toString()))
    console.log(item)
    return (
        <div className="ItemViewContainer">
            <div className='NameAndCostContainer'>
                <div className="ItemName">{item.itemName}</div>
                <div className="ItemCost">{item.itemCost}</div>
            </div>
            <div className="ItemDescription">{item.itemDescription}</div>
            <div className="ViewItemCategory">{item.itemCategory}</div>
            <div className="ItemLink">{item.itemLink}</div>
            <OptionBar condition={1} id={id} />
        </div>
    )
}

export default ItemViewContainer