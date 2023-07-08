import OptionBar from '../OptionBar'
const ItemViewContainer = () => {
    return (
        <div className="ItemViewContainer">
            <div className='NameAndCostContainer'>
                <div className="ItemName">ItemName</div>
                <div className="ItemCost">ItemCost</div>
            </div>
            <div className="ItemDescription">ItemDescription</div>
            <div className="ItemCategory">ItemCategory</div>
            <div className="ItemLink">ItemLink</div>
            <OptionBar />
        </div>
    )
}

export default ItemViewContainer