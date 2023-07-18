import OptionBar from '../OptionBar'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'

const ItemViewContainer = ({ Items, setItems, Categories }) => {

    const navigate = useNavigate()
    let { id } = useParams();

    const handle_DeleteItem = () => {
        const tempItems = Items.filter((item) => item.id.toString() !== id)
        setItems(tempItems)
        navigate(`/0`)
    }

    const itemCategory = (value) => {
        if (value !== -1) {
            return (Categories[value])
        } else return "none"
    }

    let item

    if (id !== undefined) {
         item = Items.find(item => (item.id.toString() === (id).toString()))
    }else {item = Items.find(item => item.id === 1)}

    // console.log(item)
    return (
        <div className="ItemViewContainer">
            {id > 0 ? (
                <>
                    <div className='NameAndCostContainer'>
                        <div className="ItemName">{item.itemName}</div>
                        <div className="ItemCost">{item.itemCost}</div>
                    </div>
                    <div className="ItemDescription">{item.itemDescription}</div>
                    <div className="ViewItemCategory">{itemCategory(item.itemCategoryIndex)}</div>
                    <div className="ItemLink">{item.itemLink}</div>
                    <OptionBar condition={1} id={id} handle_DeleteItem={handle_DeleteItem} />
                </>
            ) : (<> </>)}

        </div>
    )
}

export default ItemViewContainer