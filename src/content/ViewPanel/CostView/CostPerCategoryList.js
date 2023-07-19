import Item from "../../ItemList/Item"
import Category from "./Category"


const CostPerCategoryList = ({ CostPerCategoryArray }) => {

    return (
        <ul className="CostPerCategoryList">
            
            {/* {CostPerCategoryArray.map((element) => {

                (<Category CategoryName={element.CategoryName} CategoryCost={element.CategoryCost} />)

            })} */}
            {CostPerCategoryArray.map((element , index) => (<Category key={index} CategoryName={element.CategoryName} CategoryCost={element.CategoryCost}/>))}
            
        </ul>
    )
}

export default CostPerCategoryList