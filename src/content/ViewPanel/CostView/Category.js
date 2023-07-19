const Category = ({ CategoryName, CategoryCost }) => {
    return (
        <li>
            <div className="CostPerCategoryContainer">
                <div className="CategoryName">{CategoryName}</div>
                <div className="CategoryCost">{CategoryCost}</div>
            </div>
        </li>
    )
}

export default Category